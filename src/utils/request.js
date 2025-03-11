import axios from 'axios'

const service = axios.create({
  baseURL: 'https://api.imooc-web.lgdsunday.club/api',
  timeout: 5000,
})

service.interceptors.request.use(
  config => {
    // 如果需要，在这里可以添加请求头或进行其他操作
    config.headers.icode = 'hellosunday'
    return config
  },
  error => {
    // 处理请求错误
    console.log(error)
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    // 如果响应数据正常，则直接返回需要使用的数据
    const { success, message, data } = response.data
    if (success) {
      return data
    } else {
      console.log(message)
      return Promise.reject(message)
    }
  },
  error => {
    // 处理响应错误
    console.log(error)
    return Promise.reject(error)
  }
)

export function request(options) {
  return service(options)
}
