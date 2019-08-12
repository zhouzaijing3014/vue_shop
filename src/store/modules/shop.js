/**
 * 管理shop功能模块的相关数据的代码
 */
import Vue from 'vue'
import {
    RECEIVE_GOODS,
    RECEIVE_RATINGS,
    RECEIVE_INFO,
    ADD_FOOD_COUNT,
    REDUCE_FOOD_COUNT,
    CLEAR_CART
} from '../mtations_types'
import {
    reqGoods,
    reqInfo,
    reqRatings
} from '../../api'

const state = {
    info:{},
    goods:[],
    ratings:[],
    cartFoods: [], 
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
    [ADD_FOOD_COUNT](state,{food}){
        if(food.count){
            food.count++
        }else{
            Vue.set(food,'count',1)
            state.cartFoods.push(food)
        }
    },
    [REDUCE_FOOD_COUNT](state,{food}){
        if(food.count>0){
            food.count--
        } if(food.count === 0){
            state.cartFoods.splice(state.cartFoods.indexOf(food),1)
        }
    },
    [CLEAR_CART](state) {
    // 将购物车中所有food的count属性移除
    state.cartFoods.forEach(food => {
      food.count = 0
    })
    // 清空购物车数组
    state.cartFoods = []
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
    },
    updateFoodCount({commit},{isAdd,food}){
        if(isAdd){
            commit(ADD_FOOD_COUNT,{food})
        }else{
            commit(REDUCE_FOOD_COUNT,{food})
        }
    }
}
const getters = {
    // cartFoods(state){
    //     const {goods} = state
    //     const arr =[]
    //     goods.forEach(good => {
    //         good.foods.forEach(food=>{
    //             if(food.count>0){
    //                 arr.push(food)
    //             }
    //         })  
    //     });
    //     return arr
    // }
    totalCount(state){
        return state.cartFoods.reduce((pre,food)=>{
         return   pre + food.count
        },0)
    },
    totalPrice(state){
        return state.cartFoods.reduce((pre,food)=>{
         return  pre + food.count*food.price
        },0)
    }
}

export default{
    state,
    mutations,
    actions,
    getters
}