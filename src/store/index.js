import Vue from 'vue'
import Vuex from 'vuex'

// import state from './state'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'
import msite from './modules/msite'
import shop from './modules/shop'
import user from './modules/user'
Vue.use(Vuex)

export default new Vuex.Store({
    // state,
    mutations,
    getters,
    actions,
    modules:{
        msite:msite,  //标识名称     多模块编程
        shop:shop,
        user:user
    }

})