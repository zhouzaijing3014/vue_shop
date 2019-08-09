import ajax from './ajax'

const BASE = './api'
 
export const reqAddress = (longitude,latitude)=>ajax({
            method:'GET',
            url: BASE+ `/position/${latitude},${longitude}`})

export const reqCategorys = () => ajax.get( BASE+'/index_category',
               { headers: {
                    needToken: true
                }
            })

export const reqShops =({longitude,latitude})=> ajax({
        url: BASE+'/shops',
        params:{
            longitude,
            latitude
        },
        headers: {
            needToken: true
          }
    },
    
)
export const reqSendCode = (phone)=>ajax.get(BASE+'/sendcode',{
    params:{
        phone
    }
})
export const reqPwdLogin = ({name,pwd,captcha})=>ajax.post(BASE+'/login_pwd',{name,pwd,captcha})

export const reqSmsLogin =({phone,code})=>ajax.post(BASE+'/login_sms',{phone,code})

export const reqAutoLogin = () => ajax({
    url: BASE + '/auto_login',
    headers: {
      needToken: true
    }
  })
    