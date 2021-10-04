const Koa = require('koa')

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


// Start Application
if (!module.parent) {
  app
  .use(router.routes()) // Specify we use a Router
  .use(router.allowedMethods()) 
  .listen(3000)
}
