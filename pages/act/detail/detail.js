// pages/act/detail/detail.js
const {
  getDetailById,
  checkBookStatus
} = require('../../../api/act.js');
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bookStatus: false
  },

  /**
   * 我要报名
   */
  enroll: function() {
    wx.navigateTo({
      url: '/pages/act/book/book?act='+this.data.act.id,
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let id = JSON.parse(decodeURIComponent(options.id))
    this.setData({
      id: id
    })
    this.getDetailById({
      id: id
    })
  },

  getDetailById: function(param) {
    getDetailById(param).then(res => {
      this.setData({
        act: res.bmsActivity,
        books: res.bmsBooks,
        user: res.umsUser
      })
    })
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
        showModal: false
      })
      // 查看申请状态
      checkBookStatus({
        actId: this.data.id
      }).then(res => {
        this.setData({
          bookStatus: res
        })
      })
    } else {
      this.setData({
        bookStatus: false,
        showAuthModel: true
      })
    }
  },

  // 取消授权
  cancelAuth(e) {
    this.setData({
      showAuthModel: e.detail
    })
  },
  //确定去授权
  confirmAuth(e) {
    this.setData({
      showAuthModel: false
    })
    wx.navigateTo({
      url: '/pages/auth/auth'
    })
    this.setData({
      showAuthModel: false
    })
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