/**
 * 管理user功能模块的相关数据的代码
 */
import {
   RECEIVE_USER,
    RESET_USER,
    RECEIVE_TOKEN,
    RESET_TOKEN,
} from '../mtations_types'
import {
   
    reqAutoLogin,
    
} from '../../api'

const state = {
    user:{},
    token:localStorage.getItem('user_key'), //当前登陆用户对应的token
}
const mutations = {
    [RECEIVE_USER](state,{user}){
        state.user=user
    },
    [RESET_USER](state){
        state.user={}
    },
    [RECEIVE_TOKEN](state,{token}){
        state.token=token
    },
    [RESET_TOKEN](state){
        state.token=''
    },

}
const actions = {
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
     
    },

}
const getters = {}

export default{
    state,
    mutations,
    actions,
    getters
}