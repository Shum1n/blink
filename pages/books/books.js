// pages/books/books.js
import {
  BookModel
} from '../../models/book.js'
import {
  KeywordModel
} from '../../models/keyword.js'
let bookModel = new BookModel()
let keywordModel = new KeywordModel()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // promise 解决回调地狱、return
    // 解决多个异步合并
    books: [],
    searching: false,
    more: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    bookModel.getHotList().then(res => {
      this.setData({
        books: res
      })
    })
  },

  onSearching(event) {
    this.setData({
      searching: true
    })
  },

  onCancel(event) {
    this.setData({
      searching: false
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
    this.setData({
      // more 改为number 类型,修改为随机数 random()
      more: !this.data.more
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})