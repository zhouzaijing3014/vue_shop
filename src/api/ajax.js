import axios from 'axios'
import qs from 'qs'

// axios.defaults.baseURL = 'http://localhost:4000'

axios.interceptors.request.use(config=>{
    const {method,data} = config
    if(method.toLowerCase()==='post' && data instanceof Object){
        config.data = qs.stringify(data)
    }
    return config
})

axios.interceptors.response.use(response=>{
    return response.data
},error =>{
    console.log(error.message)
    return new Promise(()=>{})
})

export default axios
