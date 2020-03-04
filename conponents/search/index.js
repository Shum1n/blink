import {
  KeywordModel
} from "../../models/keyword"
import {
  BookModel
} from "../../models/book";
const keywordModel = new KeywordModel()
const bookModel = new BookModel()

Component({

  properties: {
    more: {
      type: String,
      observer: '_load_more'
      // true, true, true,
    }
  },
  /**
   * 页面的初始数据
   */
  data: {
    historyWords: [],
    hotWords: [],
    dataArray: [],
    searching:false,
    q:'',
    loading:false
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
    _load_more(){
      // if(1==1){
      //   return
      // }
      const length = this.data.dataArray.length
      if(!this.data.q){
        return
      }
      if(this.data.loading){
        return
      }
      this.data.loading = true
      bookModel.search(this.data.dataArray.length,this.data.q).then(res=>{
        // 当数据还没有返回回来的时候,再次向下滑动??
        // 加锁,
        this.setData({
          // es6合并数组
          dataArray: [...this.data.dataArray,...res.books]
        })
        // 如果不需要在wxml 中更新 loading,直接写在
        this.data.loading =false
      })
    },

    onCancel(event) {
      // this.initialize()
      this.triggerEvent('cancel', {}, {})
    },

    onDelete(event){
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

    // 加载更多
    // scroll-view
    // page onReachBottom

    //  在组件中无效
    // onReachBottom(){
    //   console.log(123123123);
    // }
  },


})
