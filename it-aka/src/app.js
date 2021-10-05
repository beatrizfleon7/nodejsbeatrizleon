const Koa = require('koa')

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


// Router paths

//ça c'est une très petite API dans la quelle il peut se connecter le client

router.get('/hello-world', (ctx, next) => {
  ctx.body = '<html><h1>Hello, World</h1><p>lorem ipsum</p></html>'
})

router.get('/hello', (ctx, next) => {
  ctx.body = '/html/index.html'
})

router.get('/hola', (ctx, next) => {
  ctx.body = {
    'name': 'Pepe',
    'age': 25
  }
})
router.post('/body-parser-object/', (ctx, next) => {
    ctx.body = ctx.request.body
})

router.put('/body-parser-object/:id', (ctx, next) => {
    ctx.request.body.id = ctx.params.id
    ctx.body = ctx.request.body
})

router.post('/body-parser-string/', (ctx, next) => {
    ctx.body = `Request Body: ${JSON.stringify(ctx.request.body)}`;
})

router.post('/authentification-to-db',  async (ctx, next) => {
  // a vous de coder
  // return jwt
  console.log(ctx)
  // on recuperer les elements distincts
  // ctx.request.body = { identifier: 'itakad@gmail.com', password: 'itakad2020' }
  let login = ctx.query.login
  let password = ctx.query.password

  // declare une variable pour le json web token
  var jwt = null

  // si les login et password sont correct je recupere un jwt
  await axios.post('https://gql.alcyone.life/auth/local', {
      identifier: login,
      password: password,
  })
  .then(response =>{
      console.log(response.data) // handle succes
      // extraction du jwt de la reponse
      jwt = response.data.jwt
  })
  .catch(function (error) {
      console.log('error') // handle error
  })
  .then(function () {
      console.log('--- --- ---')
  });
  // affichage jwt
  console.log(jwt)
  // je retourne un object avec le jwt
  ctx.body = {jwt: jwt}


})


// with query string
router.get('/authentification-to-db',  async (ctx, next) => {

  console.log(ctx)
  // on recuperer les elements distincts
  // ctx.request.body = { identifier: 'itakad@gmail.com', password: 'itakad2020' }
  let login = ctx.query.login
  let password = ctx.query.password

  // declare une variable pour le json web token
  var jwt = null

  // si les login et password sont correct je recupere un jwt
  await axios.post('https://gql.alcyone.life/auth/local', {
      identifier: login,
      password: password,
  })
  .then(response =>{
      // extraction du jwt de la reponse
      jwt = response.data.jwt
  })
  .catch(function (error) {
      console.log('error') // handle error
  })
  .then(function () {
      console.log('--- --- ---')
  });
  // affichage jwt
  console.log(jwt)
  // je retourne un object avec le jwt
  ctx.body = {jwt: jwt}
})



router.get('/get-db-collection/:collection', async (ctx, next) => {
  // recuperer en parametre le nom de la collection a requeter
  let collection = ctx.params.collection
  let ret = null
  // a vous de coder
  // return content of collection

    // ensuite requeter la base de donnee
    await axios.get(`https://gql.alcyone.life/${collection}`)
    .then(response => {
        ret = response.data
    })
    .catch(function (error) {
        console.log('error') // handle error
    })
    .then(function () {
        console.log('--- --- ---')
    });

    // a vous de coder
    // return content of collection
    ctx.body = ret


})


router.post('/',  (ctx, next) => {
  // a vous de coder
  return {jwt: jwt}
})


// Start Application
if (!module.parent) {
  app
  .use(router.routes()) // Specify we use a Router
  .use(router.allowedMethods()) 
  .listen(3000)
}
