// safari.js
var api_top250 = 'https://api.douban.com/v2/movie/top250';
Page({
    onPullDownRefresh:function(){
        console.log('fjewoifjeifoj');
    },
  /**
   * 页面的初始数据
   */
  data: {
      movies:[],
      title: '',
      loading:true,
      subTitle:'加载中...',
      start:0,
      hasMore:true,
      hasUp:true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  loadMore:function(){
      if(this.data.hasMore == false) 
        return;
    wx.showLoading({
        title: '玩命加载中...',
        // mask:true,
    })
    this.setData({
        hasMore:false,
    })
    var that = this;
    wx.request({
        url: api_top250,
        method:'POST',
        data: {
            'count':10,
            'start':that.data.start,
        },
        header:{
            'content-type':'application/json'
        },
        success:function(res){
            console.log(res.data);
            if (res.data.subjects){
                that.setData({
                    movies: that.data.movies.concat(res.data.subjects),
                    start: that.data.start + 10,
                    hasMore:true,
                });
            }else{
                that.setData({
                    hasUp:false,
                    hasMore:false,
                })
            }
        },
        complete: function () {
            wx.hideLoading();
            that.setData({
                loading: true,
            })
            wx.setNavigationBarTitle({
                title: 'Top250',
            })
        }
    })
  },
  onLoad: function (options) {
      var that = this;
      wx.showLoading({
          title: '玩命加载中...',
          fail:function(){
              that.setData({
                  loading:false,
              })
          }
      })
      wx.request({
          url:api_top250,
          data: {
              'count': 10,
              'start': 0
          },
          method:'POST',
          header:{
              'content-type': "application/json"
          },
          success: function(res){
            console.log(res.data);
             that.setData({
                movies:res.data.subjects,
                subTitle:'牌行榜Top250',
                start:that.data.start + 10,
             });
             console.log(res.data.subjects);
          },
          fail: function(){

          },      
          complete:function(){
              wx.hideLoading();
              that.setData({
                  loading:true,
              })
              wx.setNavigationBarTitle({
                  title: 'Top250',
              })
          }
      })
  },

  onPullDownRefresh:function(){
      console.log('下拉刷新');
    //   wx.stopPullDownRefresh();
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