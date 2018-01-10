const routes = module.exports = require('next-routes')()

routes
  .add({ name: '/', pattern: '/', page: 'Home/index' })
  .add({ name: '/about', pattern: '/about', page: 'about' });
