import {
    RECIVE_ADDRESS,
    RECEIVE_CATEGORYS,
    RECEIVE_SHOPS,
    RECEIVE_USER,
    RESET_USER,
    RECEIVE_TOKEN,
    RESET_TOKEN
} from './mtations_types'
import {
    reqAddress,
    reqCategorys,
    reqShops,
    reqAutoLogin
} from '../api'

export default {
    async  getAddress({commit,state}){
        const {longitude,latitude} = state
        const result = await reqAddress(longitude,latitude)
        if(result.code === 0){
            const address = result.data
            commit(RECIVE_ADDRESS,address)
        }
    },
    // getAddress({commit,data}){
    //     const {longitude,latitude} = data,
    //     const result = reqAddress(longitude,latitude)
    //     if(result.code ===0){
    //         const address = result.data
    //         commit(RECIVE_ADDRESS,address)
    //     }
    // },
    async  getCategorys({commit}){
        const result = await reqCategorys()
        if(result.code === 0){
            const categorys = result.data
            commit(RECEIVE_CATEGORYS,categorys)
        }
    },
    async  getShops({commit,state}){
        const {longitude,latitude} = state
        const result = await reqShops({longitude,latitude})
        if(result.code === 0){
            const shops = result.data
            commit(RECEIVE_SHOPS,shops)
        }
    },
    saveUser({commit},user){
        const token = user.token
        localStorage.setItem('user_key',token)
        commit(RECEIVE_TOKEN,{token})
        delete user.token
        commit(RECEIVE_USER,{user})
    },
    logout({commit}){
        commit(RESET_USER)
        commit(RESET_TOKEN)
        localStorage.removeItem('user_key')
    },
   async autoLogin({commit,state}){
       if(state.token){
            const result = await reqAutoLogin()
            if(result.code === 0){
                const user = result.data
                commit(RECEIVE_USER,{user})
            }
       }
     
    }   
        
}