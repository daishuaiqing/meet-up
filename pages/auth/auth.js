// pages/auth/auth.js
const {
  login
} = require('../../api/user.js');
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  login: function (e) {
    if (e.detail.errMsg === "getUserInfo:ok") {
      //授权成功，获取到用户的信息
      //调用wx.login()
      wx.showLoading({
        title: "授权中"
      })
      wx.login({
        success(res) {
          if (res.code) {
            //获取code成功
            //发送code和用户信息给服务端
            // console.log(res.code)
            login({
              code: res.code,
              signature: e.detail.signature,
              rawData: e.detail.rawData,
              encryptedData: e.detail.encryptedData,
              iv: e.detail.iv
            }).then(res => {
              app.globalData.token = res.token
              app.globalData.userInfo = e.detail.userInfo
              wx.setStorageSync('userInfo', e.detail.userInfo)
              wx.setStorageSync('token', res.token)
              wx.hideLoading()
              wx.showToast({
                title: "授权成功",
                duration: 1500
              })
              wx.navigateBack({
                delta: 1
              })
            })
          } else {
            //('登录失败！' + res.errMsg)
          }
        }
      })
    } else {
      wx.showToast({
        title: '授权失败',
        icon: 'none',
        duration: 1000
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})