export default function ({ route, redirect }) {
  console.log('path', route.path)
  console.log('query', route.query)

  if (process.client) {
    console.log('asd')
  }
  if (route.path === '/' && route.query.test === '666') {
    // console.log('redirect', redirect)
    redirect('/test')
  }
  console.log('auth', new Date().getTime())
}
