const devBaseURL = ''
const dev = {
  rootApi: devBaseURL + '/rootApi/',
  guestApi: devBaseURL + '/guestApi/',
  userApi: devBaseURL + '/userApi/'
}

const prod = {
  rootApi: '//ybinsure.com/t/icar/v1/auth/',
  guestApi: '//ybinsure.com/t/user/v1/guest/',
  userApi: '//ybinsure.com/t/user/v1/auth/'
}

module.exports = function () {
  if (process.env.NODE_ENV === 'production') {
    return prod
  } else {
    return dev
  }
}
