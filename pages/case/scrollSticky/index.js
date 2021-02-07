// pages/case/scrollSticky/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    tabList: [
      { title: 'tab1' },
      { title: 'tab2' },
      { title: 'tab3' },
      { title: 'tab4' },
    ],
    statusBarHeight: 0,
    navHeight: 0,
    fixedNav: false,
    showToTop: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      navHeight: wx.getStorageSync('navHeight'),
      statusBarHeight: wx.getStorageSync('statusBarHeight')
    })
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

  },
  scroll(e) {
    let isFixed = e.detail.isFixed
    this.setData({
      fixedNav: isFixed
    })
  }
})