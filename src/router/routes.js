import Login from 'pages/Login/Login.vue'
import Msite from 'pages/MSite/MSite.vue'
import Search from 'pages/Search/Search.vue'
import Order from 'pages/Order/Order.vue'
import Profile from 'pages/Profile/Profile.vue'
import Shop from 'pages/Shop/Shop.vue'
import Info from 'pages/Shop/Info/Info.vue'
import Goods from 'pages/Shop/Goods/Goods.vue'
import Ratings from 'pages/Shop/Ratings/Ratings.vue'
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
        path:'/shop',
        component:Shop,
        children:[
            {
                path:'/shop/info',
                component:Info
            },
            {
                path:'/shop/goods',
                component:Goods
            },
            {
                path:'/shop/ratings',
                component:Ratings
            },
            {
                path:'',
                component:Goods
            }
        ]
    },
    {
        path:'/',
        redirect:'./msite',
        meta:{
            FooterShow:true
        }
    }
   
]