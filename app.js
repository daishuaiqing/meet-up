//app.js
var cn = require("utils/lang/cn")
var en = require("utils/lang/en")
App({
  onLaunch: function () {
    const updateManager = wx.getUpdateManager()
    updateManager.onCheckForUpdate(function (res) {
      // 请求完新版本信息的回调
      //console.log(res.hasUpdate)
    })
    updateManager.onUpdateReady(function () {
      wx.showModal({
        title: '更新提示',
        content: '新版本已经准备好，是否重启应用？',
        success: function (res) {
          if (res.confirm) {
            // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
            updateManager.applyUpdate()
          }
        }
      })
    })
    //判断当前系统的语言，选择显示的语言
    this.globalData.lang = cn.Content
    wx.setTabBarItem({
      index: 0,
      text: this.globalData.lang.index,
      iconPath: "image/tabbar/首页默认.png",
      selectedIconPath: "image/tabbar/首页选中.png"
    })
    wx.setTabBarItem({
      index: 1,
      text: this.globalData.lang.my,
      iconPath: "image/tabbar/消息默认.png",
      selectedIconPath: "image/tabbar/消息选中.png"
    })
    wx.setTabBarItem({
      index: 2,
      text: this.globalData.lang.account,
      iconPath: "image/tabbar/我的默认.png",
      selectedIconPath: "image/tabbar/我的选中.png"
    })
    //启动小程序，检查缓存中是否存在userInfo，如果存在，取出信息放入全局Data中，方便随时使用
    this.globalData.userInfo = wx.getStorageSync('userInfo')
    this.globalData.token = wx.getStorageSync('token')
    
    // 展示本地存储能力
    // var logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)

    // 登录
    // wx.login({
    //   success: res => {
    //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //   }
    // })
    // 获取用户信息
    // wx.getSetting({
    //   success: res => {
    //     if (res.authSetting['scope.userInfo']) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
    //       wx.getUserInfo({
    //         success: res => {
    //           // 可以将 res 发送给后台解码出 unionId
    //           this.globalData.userInfo = res.userInfo

    //           // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //           // 所以此处加入 callback 以防止这种情况
    //           if (this.userInfoReadyCallback) {
    //             this.userInfoReadyCallback(res)
    //           }
    //         }
    //       })
    //     }
    //   }
    // })
  },
  globalData: {
    userInfo: null,
    token: null,
    lang: null
  }
})