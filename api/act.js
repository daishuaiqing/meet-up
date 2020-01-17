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

export const checkBookStatus = (info) => {
  return request(baseUrl + "/bms/book/checkBookStatus", info, 'get')
}

export const book = (info) => {
  return request(baseUrl + "/bms/book/add", info, 'POST')
}

export const unifiedOrder = (info) => {
  return request(baseUrl + "/wx/pay/createOrder", info, 'get')
}