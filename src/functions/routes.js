const routes = module.exports = require('next-routes')()

routes
  .add({ pattern: '/', page: 'Home/index' })
  .add({ pattern: '/posts', page: 'Post/index' })
  .add({ pattern: '/posts/:id', page: 'Post/show' })
  .add({ pattern: '/about', page: 'about' });
