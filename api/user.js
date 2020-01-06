const { baseUrl } = require('baseApi');
const { request } = require('request');

export const login = (info) => {
  return request(baseUrl + "/ums/user/login", info, 'POST')
}

export const reLogin = (info) => {
  return request(baseUrl + "/ums/user/reLogin", info, 'POST')
}

export const saveProfiles = (info) => {
  return request(baseUrl + "/ums/profiles/save", info, 'POST')
}

export const getMyProfiles = () => {
  return request(baseUrl + "/ums/profiles/getMyProfiles")
}