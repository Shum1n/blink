// pages/classic/classic.js
// 引入工具类,一定要使用相对路径
// 写的是根据文件名称导入，不是类名。
import {HTTP} from '../../utils/http.js'
let http = new HTTP();
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 使用工具类
    http.request({
      url:'classic/latest'
      ,method: 'GET'
      ,success:function(res){
        console.log(res)
      }

    })
    // shift +alt + a
    /* wx.request({
      url:'http://bl.7yue.pro/v1/classic/latest',
      header: {appkey:'oeGzAKG8jwo0MoJR'},
      data: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (result)=>{
        
      },
      fail: ()=>{},
      complete: ()=>{}
    }); */

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