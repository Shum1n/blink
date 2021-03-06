// 与输出js 类型，引入js使用 import 关键字。
import {config} from '../config.js'

const tips ={
    1:'默认错误'
    ,1005:'appley无效，请前往ww7yue.pro申请'
    ,3000:'期刊不存在'
}
// 使用es6 的语法，创建Http 类
class HTTP{
    // 重写方法，明确参数列表。不需要回调函数
    // 解构参数列表
    request({url,data={},method='GET'}){
        return new Promise((resolve,reject)=>{
            this. _request(url,resolve,reject,data,method)
        })
    }
    _request(url,resolve,reject,data={},method='GET'){
        wx.request({
            url: config.api_base_url+url,
            header: {'content-type':'application/json',appkey:config.appkey},
            data: data,
            method: method,
            dataType: 'json',
            responseType: 'text',
            success: (res)=>{
                let code = res.statusCode.toString()
                if(code.startsWith('2')){
                    resolve(res.data)

                }else{
                    // 异常处理
                    // appkey 处理默认错误
                    this._show_error(res.data.error_code)
                    // 将 Promise 状态改变成已失败
                    reject();
                }
            },
            fail: ()=>{
                // 断网，
                this._show_error(1)
                // 将 Promise 状态改变成已失败
                reject();
            },
            complete: ()=>{}
        });

    }
    // 表示一个私有方法
    // 没有给code ，返回默认错误提示信息
    _show_error(error_code=1){
        const tip = tips[error_code]
        wx.showToast({
            title:tip?tip:tips[1]
            ,icon:'none'
            ,duration:2000
        })
    }
}

export {HTTP}