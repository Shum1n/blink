// conponents/book/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    book:Object,
    showLike:{
      type:Boolean,
      value:true
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTap:function(event){
      const bid = this.properties.book.id
      // 跳转页面
      // 路径上不用加 wxml
      // 然后就能在 book-detial onLoad，options 中接受到 bid 属性
      wx.navigateTo({
        url: `/pages/book-detail/book-detail?bid=${bid}`,
        success: (result)=>{

        },
        fail: ()=>{},
        complete: ()=>{}
      });

    }

  }
})
