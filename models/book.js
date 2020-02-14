import {HTTP} from '../utils/http-p.js'

class BookModel extends HTTP{

    getHotList(){
        // 返回 Promise 对象
        return this.request({url:'book/hot_list'})
    }

    getMyBookCount(){
        return this.request({url:'book/favor/count'})
    }
}

export {BookModel}