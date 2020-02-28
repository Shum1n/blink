import {
  KeywordModel
} from "../../models/keyword"
import {
  BookModel
} from "../../models/book";
const keywordModel = new KeywordModel()
const bookModel = new BookModel()
Component({

  /**
   * 页面的初始数据
   */
  data: {
    historyWords: [],
    hotWords: [],
    dataArray: [],
    searching:false,
    q:''
  },

  attached() {
    this.setData({
      historyWords: keywordModel.getHistory()
    })

    keywordModel.getHot().then(res => {
      this.setData({
        hotWords: res.hot
      })
    })
  },

  /**
   * 组件方法
   */
  methods: {

    onCancel(event) {
      // this.initialize()
      this.triggerEvent('cancel', {}, {})
    },

    onDelete(event){
      console.log(111);
      this.setData({
        searching: false
      })
    },

    onConfirm(event) {
      // 获取值
      this.setData({
        searching: true
      })
      // value 文本框中输入的内容
      // text 监听事件携带标签中 text文本
      const word = event.detail.value || event.detail.text
      bookModel.search(0, word).then(res => {

        this.setData({
          dataArray: res.books
          ,q:word
        })

        keywordModel.addToHistory(word)
      })
    },

  },


})
