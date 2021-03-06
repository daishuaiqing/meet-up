//index.js
//获取应用实例
const { getActList } = require("../../api/act")
const app = getApp()

Page({
  data: {
    catArr: [{ name: "精品推荐" }, { name: "趣味特色" }, { name: "休闲展览" }, { name: "教育培训" }],
    currentIndex: 0,
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  changeCat: function(e){
    let index = e.currentTarget.dataset.index
    this.setData({
      currentIndex: index
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  goDetail: function(e){
    let param = e.currentTarget.dataset.item
    wx.navigateTo({
      url: '/pages/act/detail/detail?id=' + encodeURIComponent(JSON.stringify(param.id))
    })
  },
  getAct: function(){
    getActList().then(res=>{
      this.setData({
        actArr: res
      })
      wx.stopPullDownRefresh()
    })
  },
  onPullDownRefresh: function(){
    this.getAct()
  },
  onLoad: function () {
    this.getAct()
    //加载语言内容
    this.setData({
      lang: app.globalData.lang
    })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
