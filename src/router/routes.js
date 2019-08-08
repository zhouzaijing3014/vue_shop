import Login from 'pages/Login/Login.vue'
import Msite from 'pages/MSite/MSite.vue'
import Search from 'pages/Search/Search.vue'
import Order from 'pages/Order/Order.vue'
import Profile from 'pages/Profile/Profile.vue'

export default [
    {
        path:'/login',
        component:Login
       
    },
    {
        path:'/msite',
        component:Msite,
        meta:{
            FooterShow:true
        }
    },
    {
        path:'/order',
        component:Order,
        meta:{
            FooterShow:true
        }
    },
    {
        path:'/search',
        component:Search,
        meta:{
            FooterShow:true
        }
    },
    {
        path:'/profile',
        component:Profile,
        meta:{
            FooterShow:true
        }
    },
    {
        path:'/',
        redirect:'./msite',
        meta:{
            FooterShow:true
        }
    }
   
]