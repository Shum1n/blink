import {HTTP} from '../utils/http-p.js'

class BookModel extends HTTP{

    getHotList(){
        // 返回 Promise 对象
        return super.request('classic/hot_list')
    }
}

export {BookModel}