/*
import axios from 'axios';

let base = '';

export const requestLogin = params => { return axios.post(`${base}/login`, params).then(res => res.data); };

export const getUserList = params => { return axios.get(`${base}/user/list`, { params: params }); };

export const getUserListPage = params => { return axios.get(`${base}/user/listpage`, { params: params }); };

export const removeUser = params => { return axios.get(`${base}/user/remove`, { params: params }); };

export const batchRemoveUser = params => { return axios.get(`${base}/user/batchremove`, { params: params }); };

export const editUser = params => { return axios.get(`${base}/user/edit`, { params: params }); };

export const addUser = params => { return axios.get(`${base}/user/add`, { params: params }); };*/

import request from './request'
//登录
export function requestLogin(data) {

    return request({
        url: '/iyoo-login-push/login?account='+data.account+'&password='+data.password,
        method: 'post',
        data:''
    })
}
//获取全部渠道名称接口
export function channelList() {

    return request({
        url: '/ad/advert/channelList?timestamp='+new Date().getTime(),
        method: 'get',
        params: {}
    })
}
//增加渠道接口
export function incChannel(data) {

    return request({
        url: '/ad/advert/incChannel',
        method: 'post',
        data:data
    })
}
//广告位控制
export function adControl(data) {

    return request({
        url: '/ad/advert/adControl ',
        method: 'post',
        data:data
    })
}


