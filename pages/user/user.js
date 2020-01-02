// pages/user/user.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showModal: false
  },

  //去个人信息面板
  goProfiles: function() {
    console.log("hahah")
    if (app.globalData.token) {
      console.log(app.globalData.token)
      wx.navigateTo({
        url: '/pages/userInfo/edit/edit'
      })
    } else {
      this.setData({
        showModal: true
      })
    }
  },

  chooseAddress: function() {
    wx.chooseAddress({
      success(res) {
        //console.log(res.userName)
        //console.log(res.postalCode)
        //console.log(res.provinceName)
        //console.log(res.cityName)
        //console.log(res.countyName)
        //console.log(res.detailInfo)
        //console.log(res.nationalCode)
        //console.log(res.telNumber)
      }
    })
  },

  //联系客服
  makePhoneCall: function() {
    wx.makePhoneCall({
      phoneNumber: '18865550002'
    })
  },

  // 取消点击取消
  clickcancle(e) {
    console.log(e)
    this.setData({
      showModal: e.detail
    })
  },
  //点击确定
  clickconfirm(e) {
    wx.navigateTo({
      url: '/pages/auth/auth'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    if (app.globalData.token) {
      this.setData({
        showModal: false,
        userInfo: app.globalData.userInfo
      })
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})