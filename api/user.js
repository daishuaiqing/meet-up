const { baseUrl } = require('baseApi');
const { request } = require('request');

export const login = (info) => {
  return request(baseUrl + "/ums/user/login", info, 'POST')
}

export const reLogin = (info) => {
  return request(baseUrl + "/ums/user/reLogin", info, 'POST')
}