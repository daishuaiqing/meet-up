// pages/act/detail/detail.js
const {
  getDetailById,
  checkBookStatus
} = require('../../../api/act.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    bookStatus: false,
    showModal: false
  },

  /**
   * 我要报名
   */
  enroll: function() {
    this.setData({
      showModal: true
    })
  },

  // 取消创建名片
  clickcancle(e) {
    this.setData({
      showModal: e.detail
    })
  },
  //确定去创建名片
  clickconfirm(e) {
    this.setData({
      showModal: false
    })
    wx.navigateTo({
      url: '/pages/userInfo/edit/edit',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let id = JSON.parse(decodeURIComponent(options.id))
    this.getDetailById({
      id: id
    })
    checkBookStatus({
      actId: id
    }).then(res => {
      this.setData({
        bookStatus: res
      })
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