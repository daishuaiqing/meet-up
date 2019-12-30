const { baseUrl } = require('baseApi');
const { request } = require('request');

export const getActList = (info) => {
  return request(baseUrl + "/bms/activity/list", info, 'get')
}

export const getDetailById = (info) => {
  return request(baseUrl + "/bms/activity/getDetailById", info, 'get')
}

export const myBookList = (info) => {
  return request(baseUrl + "/bms/book/myBookList", info, 'get')
}