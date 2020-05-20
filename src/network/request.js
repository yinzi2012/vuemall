import axios from 'axios'

export function request(config) {
   const service = axios.get({
      timeout:5000
   })
    //拦截器请求
    service.interceptors.request.use(config=>{
        return config
    },err=>{
        console.info(err)
    })
    //拦截器响应
    service.interceptors.response.use(res=>{
        return res.data
    },err=>{
        console.log(err)
    })
    return service(config)
}