// 封装微信的request
const request = (url, data = {}, method = "GET") => {
  return new Promise((resolve, reject) => {
    let token = app.globalData.token
    wx.request({
      url: url,
      data: data,
      method: method,
      header: {
        'content-type': 'application/json', // 默认值
        'token': token
      },
      success(res) {
        if (res.statusCode == 200) {
          if (res.data.code == 200) {
            resolve(res.data.data)
          } else {
            if (res.data.code == 401) {
              if (app.globalData.token) {
                wx.login({
                  success(res) {
                    if (res.code) {
                      //获取code成功
                      //发送code和用户信息给服务端
                      request(baseUrl + "/ums/user/reLogin", {
                        code: res.code
                      }, "POST").then(res => {
                        app.globalData.token = res.token
                        wx.setStorageSync('token', res.token)
                        request(url, data, method).then(res => {
                          resolve(res)
                        })
                      })
                    } else {
                      //('登录失败！' + res.errMsg)
                    }
                  }
                })
              } else {
                app.globalData.token = null
                app.globalData.userInfo = null
                wx.showToast({
                  title: "登录信息过期，请重新登录",
                  icon: 'none',
                  duration: 1500
                })
              }
            } else if (res.data.code == 404) {
              wx.showToast({
                title: res.data.message,
                icon: 'none',
                duration: 2000
              })
            } else if (res.data.code == 500) {
              wx.showToast({
                title: res.data.message,
                icon: 'none',
                duration: 2000
              })
            }
          }
        } else {
          //console.log(res)
          reject(res)
          wx.showToast({
            title: '网络异常，请稍候再试',
            icon: 'none',
            duration: 2000
          })
        }
      },
      fail(err) {
        //console.log(err)
        reject(err)
        wx.showToast({
          title: '网络异常，请稍候再试',
          duration: 2000
        })
        //app.openNetworkErrorModal(err.errMsg);
      }
    })
  });
}

module.exports = {
  request: request
}