const { baseUrl } = require('baseApi');
const { request } = require('request');

export const getActList = (info) => {
    return request(baseUrl + "/bms/activity/list", info, 'get')
  }