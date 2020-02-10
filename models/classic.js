import { HTTP } from "../utils/http";

class ClassicModel extends HTTP{
    getLatest(sCallback){
        this.request({
            url:'classic/latest'
            ,method: 'GET'
            // 注意，此时的this 指向
            /* ,success:function(res){
                sCallback(res)
                // 写入缓存
                this._setLatestIndex(res.index)
            } */
            ,success:(res)=>{
                sCallback(res)
                this._setLatestIndex(res.index)
                // 放到缓存
                wx.setStorageSync(this._getKey(res.index),res)
            }
        })
    }

    getPrevious(index,sCallback){
        this.request({
            // url:`classic/${index}/previous`
            url:'classic/'+index+'/previous'
            ,success:(res)=>{
                sCallback(res)
            }
        })
    }

    getClassic(index,url,sCallback){
        // 根据路径判断所查找的key 值
        // 若是获取前一个页面。则 index+1
        let key = url == 'next'?this._getKey(index+1):this._getKey(index-1)
        let classic = wx.getStorageSync(key)
        // key 值不存在
        !classic ?this.request({
            url:`classic/${index}/${url}`
            ,success:(res)=>{
                wx.setStorageSync(this._getKey(res.index),res)
                sCallback(res)
            }
        }):sCallback(classic) // key值存在，直接调用回调函数
    }

    isFirst(index){
        return index == 1
    }

    isLatest(index){
        let latestIndex = this._getLatestIndex()
        return latestIndex == index
    }

    // 使用缓存记录最新的期刊号
    _setLatestIndex(index){
        wx.setStorageSync('latest', index);
    }

    // 读取小程序缓存
    _getLatestIndex(){
        return wx.getStorageSync('latest');
    }

    _getKey(index){
        return `classic-${index}`
    }
}

export {ClassicModel}