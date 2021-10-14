import axios from "axios"

const mockAxios = axios.create({
  baseURL:"/mock",
  timeout:3000
})

//拦截器
mockAxios.interceptors.request.use(function (config) {
  return config;
});
mockAxios.interceptors.response.use(function (response) {
  return response.data;
}, function (error) {
  return Promise.reject(error);
});


export default mockAxios
