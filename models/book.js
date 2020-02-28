import {HTTP} from '../utils/http-p.js'

class BookModel extends HTTP{

    getHotList(){
        // 返回 Promise 对象
        return this.request({url:'book/hot_list'})
    }

    search(start, q){
        return this.request({
            url:'book/search?summary=1',
            data:{
                q:q,
                start:start
            }
        })
    }
    
    getMyBookCount(){
        return this.request({url:'book/favor/count'})
    }

    getDetail(bid){
        return this.request({
            url:`book/${bid}/detail`
        })
    }

    getLikeStatus(bid){
        return this.request({url:`book/${bid}/favor`})
    }

    getComment(bid){
        return this.request({url:`book/${bid}/short_comment`})
    }

    postComment(bookid,comment){
        return this.request({
            url:'book/add/short_comment'
            ,method:"post"
            ,data:{
                book_id:bookid
                ,content:comment
            }
        })
    }


}

export {BookModel}