const routes = require('next-routes')()


const TestPage = '/TestPage/TestPage'


routes.add({
  name: 'test',
  pattern: '/',
  page: TestPage
})

module.exports = routes
