import ajax from './ajax'

const BASE = './api'
 
export const reqAddress = (longitude,latitude)=>ajax({
            method:'GET',
            url: BASE+ `/position/${latitude},${longitude}`})

export const reqCategorys = () => ajax.get( BASE+'/index_category')

export const reqShops =({longitude,latitude})=> ajax({
        url: BASE+'/shops',
        params:{
            longitude,
            latitude
        }
    }
)

