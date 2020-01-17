// pages/act/index/index.js
const { myBookList } = require('../../../api/act.js');
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showModal: false,
    bookArr: []
  },

  myBookList: function(){
    myBookList().then(res=>{
      this.setData({
        bookArr: res
      })
    })
  },

  goDetail: function(e){
    console.log(e)
    let param = e.currentTarget.dataset.item.bmsActivity
    wx.navigateTo({
      url: '/pages/act/detail/detail?id=' + encodeURIComponent(JSON.stringify(param.id))
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    if(app.globalData.token){
      this.myBookList()
    }
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