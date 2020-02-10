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
        this.request({
            url:`classic/${index}/${url}`
            ,success:(res)=>{
                sCallback(res)
            }
        })
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
}

export {ClassicModel}