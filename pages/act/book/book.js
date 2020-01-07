// pages/act/book/book.js
const {
  getMyProfiles
} = require('../../../api/user.js');
const {
  getDetailById,
  book
} = require('../../../api/act.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showModal: false,
    hasCard: false
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

  submit() {
    book({
      actId: this.data.act.id
    }).then(res => {
      if(res.isPay){
        //调用支付
        console.log("调用支付")
        wx.showToast({
          title: '报名成功,订单已创建，支付尚未接通',
          icon: 'success',
          duration: 2000
        })
      }else{
        //报名成功
        wx.showToast({
          title: '报名成功',
          icon: 'success',
          duration: 1000
        })
        setTimeout(function () {
          wx.navigateBack({
            delta: 1
          })
        }, 500)
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options.act)
    getDetailById({
      id: options.act
    }).then(res => {
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
    getMyProfiles().then(res => {
      if (res) {
        this.setData({
          profiles: res,
          hasCard: true
        })
      } else {
        this.setData({
          showModal: true
        })
      }
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