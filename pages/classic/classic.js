// pages/classic/classic.js
// 引入工具类,一定要使用相对路径
// 写的是根据文件名称导入，不是类名。

import {ClassicModel} from '../../models/classic.js'
import { LikeModel } from '../../models/like.js'
let classicModel = new ClassicModel()
let likeModel = new LikeModel()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    classic:null
    ,first:false
    ,latest:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 使用工具类
    // 接收异步函数的调用结果，使用回调函数
    // 使用回调函数，剥夺了return 的能力
    classicModel.getLatest((res)=>{
        this.setData({
          classic:res
        })
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

  // 自定义like 事件
  onLike:function (event) {
    let behavior = event.detail.behavior
    likeModel.like(behavior
      // 回调中设置
      ,this.data.classic.id
      ,this.data.classic.type
    )
  },

  onPrevious:function(event){
    this._updateClassic('previous')
  },

  onNext:function(event){
    this._updateClassic('next')
  },

  _updateClassic:function(nextOrPrev){
    let index = this.data.classic.index
    classicModel.getClassic(index,nextOrPrev,(res)=>{
      this.setData({
        classic : res
        ,first  : classicModel.isFirst(res.index)
        ,latest : classicModel.isLatest(res.index)
      })
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