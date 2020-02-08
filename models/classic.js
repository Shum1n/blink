import { HTTP } from "../utils/http";

class ClassicModel extends HTTP{
    getLatest(sCallback){
        this.request({
            url:'classic/latest'
            ,method: 'GET'
            ,success:function(res){
                sCallback(res)
            }
      
        })
    }
}

export {ClassicModel}