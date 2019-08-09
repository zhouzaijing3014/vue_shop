import axios from 'axios'
import qs from 'qs'
import {Toast} from 'mint-ui'

import store from '../store'
import router from '../router'
// import router from '../router'
// axios.defaults.baseURL = 'http://localhost:4000'

axios.interceptors.request.use(config=>{
    const {method,data} = config
    if(method.toLowerCase()==='post' && data instanceof Object){
        config.data = qs.stringify(data)
    }
    if(config.headers.needToken){
        const token = store.state.token
        if(!token){
            const error = new Error('没有token,不能发送ajax请求')
            error.status = 401
            throw error
        }else{
            config.headers['Authorization'] = token
        }
    }
    return config
})

axios.interceptors.response.use(response=>{
    return response.data
},error =>{
    const {response, status, message} = error
    if(!response){
        if(status === 401){
            if(router.currentRoute.path!=='/login'){
                Toast(message)
                router.replace('/login')
            }
        }
    }else{
        const status = response.status
        if(status === 401){
            if(router.currentRoute.path !== '/login'){
                Toast(response.data.message)
                 // 退出登陆
                store.dispatch('logout')
                 // 跳转到登陆页面
                router.replace('/login')
            }
        }else if(status === 404){
            Toast('请求的资源不存在')
        }else{
            Toast('请求错误: ' + message)
        }
    }
    return new Promise(()=>{})
})

export default axios
