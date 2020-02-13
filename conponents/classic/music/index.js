// conponents/classic/music/index.js
import {classicBeh} from '../classic-beh.js'

// 音乐管理对象
const mMgr = wx.getBackgroundAudioManager()

Component({
  /**
   * 组件的属性列表
   */
  behaviors:[classicBeh],
  properties: {
    src:String,
    title:String
  },


  /**
   * 组件的初始数据
   */
  data: {
    pauseSrc:'images/player@pause.png'
    ,playSrc:'images/player@play.png'
    ,playing:false
  },


  // 在组件实例进入页面节点树时执行
  // https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/lifetimes.html
  attached:function(){

    // 不建议直接写业务代码，建议封装方法。
    this._recoverStatus()
    // 让总控开关控制按钮
    this._monitorSwitch()
  },

  // 生命周期函数——组件从页面移除
  // hidden 不触发该事件。 wx:if
  // wx:if  会执行完成的生命周期
  detached:function(){
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onPlay:function(){
      this.setData({
        playing:!this.data.playing
      })
      if(this.data.playing){
        mMgr.src = this.properties.src
        mMgr.title = this.properties.title
      }else{
        // 暂停音乐
        mMgr.pause()
      }
    },
    _recoverStatus:function(){
      // mMgr.src 保存上次播放的音乐地址
      // mMgr.paused 播放暂停 true
      // console.log(mMgr.paused);
      // console.log(mMgr.src);
      if(mMgr.paused){
        // 当前是暂停状
        this.setData({
          playing:false
        })
        return
      }
      // 用来判断是否与当前播放的音乐相同
      if(mMgr.src == this.properties.src){
        this.setData({
          playing:true
        })
      }
    },

    _monitorSwitch:function(){

      mMgr.onPlay(()=>{
        this._recoverStatus()
      })
      mMgr.onPause(()=>{
        this._recoverStatus()
      })
      mMgr.onStop(()=>{
        this._recoverStatus()
      })
      mMgr.onEnded(()=>{
        this._recoverStatus()
      })
    }

  }
})
