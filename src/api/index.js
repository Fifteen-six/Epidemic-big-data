import axios from '../utils/request.js'


const base = {
    baseUrl: 'http://api.tianapi.com',
    ncov: '/txapi/ncov/index',
    ncovWorld: "/ncovabroad/index",
    juheBase: "/api",
    Travel: '/springTravel/citys',
    Travel00: '/springTravel/query',
    wanwei: "https://route.showapi.com",
    wanwei_: "/2217-4?showapi_appid=1102474&showapi_sign=1e4ed394efd547c5899ad15d6ac7fc9d",
    nocv: 'https://route.showapi.com',
    city:'/2217-2?showapi_appid=1102474&showapi_sign=1e4ed394efd547c5899ad15d6ac7fc9d'
}

const api = {
    getNocvCity() {
        return axios.get(base.nocv + base.city)
    },
    //疫情数据
    getNcov(params) {
        return axios.get(base.baseUrl + base.ncov, {
            params
        })
    },
    getNcovWorld(params) {
        return axios.get(base.baseUrl + base.ncovWorld, {
            params
        })
    },
    //各地政策城市数据
    getTravel(params) {
        return axios.get(base.juheBase + base.Travel, {
            params
        })
    },
    //各地政策详情
    getTravel00(params) {
        return axios.get(base.juheBase + base.Travel00, {
            params
        })
    },
    
}
export default api;