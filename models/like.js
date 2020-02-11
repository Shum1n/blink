import { HTTP } from "../utils/http";

class LikeModel extends HTTP{
    like(behavior,artId,category){
        let url = behavior==='like'?'like':'like/cancel'
        this.request({
            url:url
            ,method:'POST'
            ,data:{
                art_id:artId
                ,type:category
            }
        })
    }

    getClassicLikeStatus(artId,category,sCallBack){
        this.request({
            url:`classic/${category}/${artId}/favor`
            ,success:sCallBack
        })
    }
}

export {LikeModel}