import {
    RECIVE_ADDRESS,
    RECEIVE_CATEGORYS,
    RECEIVE_SHOPS
} from './mtations_types'


export default {
    [RECIVE_ADDRESS](state,address){
        state.address=address
    },
    [RECEIVE_CATEGORYS](state,categorys){
        state.categorys=categorys
    },
    [RECEIVE_SHOPS](state,shops){
        state.shops=shops
    },
}