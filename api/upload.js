const { baseUrl } = require('baseApi');

export const uploadFile = (tempFilePath) => {
  return new Promise((resolve, reject) => {
    wx.uploadFile({
      url: baseUrl + '/upload/image',
      filePath: tempFilePath,
      name: 'image',
      success(res) {
        console.log(res)
        const data = JSON.parse(res.data)
        if(data){
          resolve(data.data)
        }
      }
    })
  })
}