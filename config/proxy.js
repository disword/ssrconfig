module.exports = {
  '/rootApi': {
    target: 'https://120.27.21.67/t/icar/v1/auth/',
    secure: false,
    pathRewrite: {
      '^/rootApi': ''
    }
  },
  '/guestApi': {
    target: 'https://120.27.21.67/t/user/v1/guest/',
    secure: false,
    pathRewrite: {
      '^/guestApi': ''
    }
  },
  '/userApi': {
    target: 'https://120.27.21.67/t/user/v1/auth/',
    secure: false,
    pathRewrite: {
      '^/userApi': ''
    }
  }
}
