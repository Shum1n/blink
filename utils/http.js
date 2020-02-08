// 与输出js 类型，引入js使用 import 关键字。
import {config} from '../config.js'

const tips ={
    1:'默认错误'
    ,1005:'appley无效，请前往ww7yue.pro申请'
    ,3000:'期刊不存在'
}
// 使用es6 的语法，创建Http 类
class HTTP{
    request(params){
        if(!params.method){
            params.method = 'GET'
        }
        wx.request({
            url: config.api_base_url+params.url,
            header: {'content-type':'application/json',appkey:config.appkey},
            data: params.data,
            method: params.method,
            dataType: 'json',
            responseType: 'text',
            success: (res)=>{
                let code = res.statusCode.toString()
                if(code.startsWith('2')){
                    params.success && params.success(res.data)

                }else{
                    // 异常处理
                    // appkey 处理默认错误
                    this._show_error(res.data.error_code)
                }
            },
            fail: ()=>{
                // 断网，
                this._show_error(1)},
            complete: ()=>{}
        });

    }
    // 表示一个私有方法
    // 没有给code ，返回默认错误提示信息
    _show_error(error_code=1){
        wx.showToast({
            title:tips[error_code]
            ,icon:'none'
            ,duration:2000
        })
    }
}

export {HTTP}