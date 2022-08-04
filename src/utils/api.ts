import {AxiosPromise} from 'axios'
import axios from "axios"
import qs from "qs"
axios.defaults.baseURL='http://127.0.0.1:9527/sign/'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
export const api ={
    //授权
    login(data:any):AxiosPromise{
        console.log(data)
        return axios.post('/signin?_allow_anonymous=true',{
            data:qs.stringify(data),
        })
    },
    getAccessTokenByCode(data:any):AxiosPromise{
        return axios.post('/sign/authz/oauth/v20/token',{
            data:qs.stringify(data),
            
        })
    },
    getUserInfo(data:any):AxiosPromise{
        return axios.post('/sign/api/oauth/v20/me',{
            data:qs.stringify(data),
           
        })
    }
}