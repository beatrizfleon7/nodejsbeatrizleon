//
const Koa = require('koa')

//
const axios = require('axios');

// acceder aux params depuis le contexte
const koaBody = require('koa-body')

// declarer un router pour avoir plusieurs route
const Router = require('koa-router')

// Declare Main Application
const app = module.exports = new Koa()
app.use(koaBody({ multipart: true }))

// Declare Router
var router = new Router()

/*** Define auth api ****/
router.post('/auth', async(ctx, next) => {
    let login = ctx.request.body.login
    let password = ctx.request.body.password

    console.log(`user: ${login}, pass: ${password}`)

    var jwt = null

    await axios.post('https://gql.alcyone.life/auth/local', { 
        identifier: login, 
        password: password 
    })
    .then(function (response) {
        // get jwt
        jwt = response.data.jwt
        console.log(`Bearer ${response.data.jwt}`)
    })

    ctx.body = {jwt: jwt}

})



//****************************define articles api*****************************

//get /articles
router.get('/articles', ctx => {
   
    let articles = null
    let jwt = ctx.request.query.jwt;

    console.log(`/articles token --> ${jwt}`)

    await axios.get('https://gql.alcyone.life/Blog-Articles', { headers: { Authorization: `Bearer ${jwt}` }
            }).then(async function (response) {
                
                articles = response.data

            })


            ctx.body = articles;

})








//get /articles/:id

router.get('/articles/:id', ctx => {
    // get id from request param (request param always as string)
    let id = parseInt(ctx.params.id);  // if id in heros array is int than we have to convert req param to int.
    // find hero by id
    let article = articles.find( articles => articles.id === id)
    // send response
    ctx.body = article;
})
//post /articles
router.post('/articles', ctx => {
    console.log(ctx.request.body);
    // we get request body from ctx.request.body bcoz koa-parser add parsed body to ctx.request.body
    let {id,name} = ctx.request.body;
    if(!id){
        ctx.throw('400','id is required field');
    }
    if(!name){
        ctx.throw('400','name is required field');
    }
    articles.push({id,name});
    ctx.body = articles;
})


//****************************define comments api*****************************

//get /comment/
router.get('/comments', ctx => {
    ctx.body = 'hello world';
})

//get /comment/:id

router.get('/comments/:id', ctx => {
    // get id from request param (request param always as string)
    let id = parseInt(ctx.params.id);  // if id in heros array is int than we have to convert req param to int.
    // find hero by id
    let comment = comments.find( comments => comments.id === id)
    // send response
    ctx.body = comment;
})

//post /comment/

//post /articles
router.post('/comments', ctx => {
    console.log(ctx.request.body);
    // we get request body from ctx.request.body bcoz koa-parser add parsed body to ctx.request.body
    let {id,name} = ctx.request.body;
    if(!id){
        ctx.throw('400','id is required field');
    }
    if(!name){
        ctx.throw('400','name is required field');
    }
    comments.push({id,name});
    ctx.body = comments;
})



///////////////











// Start Application
if (!module.parent) {
    app
    .use(router.routes()) // Specify we use a Router
    .use(router.allowedMethods())
    .listen(3000)
}