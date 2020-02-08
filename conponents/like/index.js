// conponents/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    like:{
      type:Boolean
    }
    ,count:{
      type:Number
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    yesSrc:'images/like.png'
    ,noSrc:'images/like@dis.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike:function(event){
      // 获取like 与 count 属性
      let like = this.properties.like
      let count = this.properties.count
      count = like?--count:++count
      this.setData({
        like:!like
        ,count:count
      });

      // 自定义事件
      // 发起，激活一个自定义事件
      let behavior = this.properties.like?'like':'cancel';
      this.triggerEvent('like',{behavior:behavior},{});
      console.log(1)
    }
  }
})
