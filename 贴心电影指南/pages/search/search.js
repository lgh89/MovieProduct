// search.js
// https://api.douban.com/v2/movie/search?q=
var search_url = 'https://api.douban.com/v2/movie/search';

Page({

  /**
   * 页面的初始数据
   */
  data: {
     placeHoldText:'请输入您需要搜索的电影信息',
     movies:[],
     start:0,
  },
  sComplete:function(e){
      console.log(e.detail.value);
      wx.showLoading({
          title: '玩命加载中...',
      });
      var that = this;
      wx.request({
          url: search_url,
          data:{
             count:10,
             start:0,
             q:e.detail.value,
          },
          header: {
              'content-type': 'application/json'
          },
          method:'POST',
          success: function (res) {
              console.log(res.data);
              if(res.data.subjects){
                  that.setData({
                      start:that.data.start + 10,
                      movies:res.data.subjects,
                      placeHoldText:res.data.title,
                  })
              }
          },
          complete:function(res){
                wx.hideLoading();
          },
          fail:function(error){
              
          }
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