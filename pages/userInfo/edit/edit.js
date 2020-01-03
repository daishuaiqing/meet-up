// pages/userInfo/edit/edit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    xlArr: ["高中", "专科", "本科", "硕士", "博士"],
    genderArr: [{id:1,name:'男'},{id:2,name:'女'}],
    tempFilePaths:[],
    form: {}
  },

  xlPickerChange(e) {
    this.setData({
      ['form.education']: this.data.xlArr[e.detail.value]
    })
  },

  getInput(e){
    this.setData({
      [e.currentTarget.dataset.name]: e.detail.value
    })
  },

  datePickerChange(e){
    this.setData({
      ['form.birthday']: e.detail.value
    })
  },

  genderPickerChange(e){
    this.setData({
      genderStr: this.data.genderArr[e.detail.value].name,
      ['form.gender']: this.data.genderArr[e.detail.value].id
    })
  },

  uploadImg(){
    const that = this
    wx.chooseImage({
      count: 4,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        const tempFilePaths = res.tempFilePaths
        that.setData({
          tempFilePaths: that.data.tempFilePaths.concat(tempFilePaths)
        })
      }
    })
  },

  delImg(e){
    let tempFilePaths = this.data.tempFilePaths
    tempFilePaths.splice(e.currentTarget.dataset.index, 1)
    this.setData({
      tempFilePaths: tempFilePaths
    })
  },

  submit(){
    console.log(this.data.form)
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