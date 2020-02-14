// pages/books/books.js
import {BookModel} from '../../models/book.js'
let bookModel = new BookModel()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // promise 解决回调地狱、return
    // 解决多个异步合并
    

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    // 如何使用promise
    // Promise 是一个对象，不是函数
    // 可以类比成 一个灰 class
    // 对象可以保存状态，除了闭包函数之外（可以保存状态）。函数(function)是马上返回结果的
    // 回调函数本质上也是函数，并不能保存状态

    // 1。new Promise ,可以接收两个参数 resolve,reject
    const promise = new Promise((resolve,reject)=>{
      // 2.将需要异步执行的代码写在箭头函数中
      // 2.1 promise 有三种状态 pending fulfilled rejected
      // - pending 进行中：new Promis() 就算作 进行中
      // - fulfilled 已成功，rejected 已失败
      // 当 Promise 状态变为已成功/ 已失败 时，此时Promise 状态凝固，将不能被修改为其他状态
      // 小程度获取系统信息的函数
      wx.getSystemInfo({
        success: res=> resolve(res),
        fail: err=> reject(err)
      });
    })

    // 3.获取 Promise 异步调用的结果
    // 3.1 then 方法接收两个结果，第一个为成功，第二个失败。
    // 总结：Promise 用对象的方式，保存异步调用的结果
    promise.then(res=>console.log(res),error=>console.log(error))



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