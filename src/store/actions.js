import {
    RECIVE_ADDRESS,
    RECEIVE_CATEGORYS,
    RECEIVE_SHOPS
} from './mtations_types'
import {
    reqAddress,
    reqCategorys,
    reqShops
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
    
}