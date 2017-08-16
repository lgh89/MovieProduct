// detailMovie.js
var api_url = "https://api.douban.com/v2/movie/subject/";
// 1292052
Page({

  /**
   * 页面的初始数据
   */
  data: {
      movie:{},
      loading:true,
      title:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var that = this;
      wx.showLoading({
          title: '玩命加载中...',
          fail:function(){
             that.setData({
                 loading:false,
             })
          }
      });
    wx.request({
      url: (api_url + options.id),
      method: 'POST',
      header: {
        'content-type': 'json'
      },
      success: function (res) {
        console.log('成功');
        console.log(res.data);

        that.setData({
            movie:res.data,
            title:res.data.title,
        })
      },
      fail: function () {
        console.log('错误');
      },      
      complete:function(){
        console.log('完成');
        wx.hideLoading();
        that.setData({
            loading:true,
        })
        wx.setNavigationBarTitle({
            title: that.data.movie.title,
        })
      }
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
  
  }
})