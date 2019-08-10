/**
 * 管理shop功能模块的相关数据的代码
 */
import {
    RECEIVE_GOODS,
    RECEIVE_RATINGS,
    RECEIVE_INFO
} from '../mtations_types'
import {
    reqGoods,
    reqInfo,
    reqRatings
} from '../../api'

const state = {
    info:{},
    goods:[],
    ratings:[]
}
const mutations = {
    [RECEIVE_GOODS](state,{goods}){
        state.goods = goods
    },
    [RECEIVE_RATINGS](state,{ratings}){
        state.ratings = ratings
    },
    [RECEIVE_INFO](state,{info}){
        state.info = info
    },
}
const actions = {
    async getInfo({commit},cb){
        const result =await reqInfo()
        if(result.code === 0){
            const info = result.data
            commit(RECEIVE_INFO,{info})
            typeof cb === "function" && cb()
        }
    },
   async getRatings({commit},cb){
       const result = await reqRatings()
       if(result.code ===0){
        const ratings = result.data
        commit(RECEIVE_RATINGS,{ratings})
        typeof cb === "function" && cb()
       }
    },
    async getGoods({commit},cb){
        const result = await reqGoods()
        if(result.code === 0){  
          const goods = result.data
          commit(RECEIVE_GOODS,{goods})
          typeof cb === "function" && cb()
        }
    }
}
const getters = {}

export default{
    state,
    mutations,
    actions,
    getters
}