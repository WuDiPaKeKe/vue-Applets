import axios from "axios"

const apiAxios = axios.create({
  baseURL:"/9000/api",
  timeout:3000
})

//拦截器
apiAxios.interceptors.request.use(function (config) {
  return config;
});
apiAxios.interceptors.response.use(function (response) {
  return response.data;
}, function (error) {
  return Promise.reject(error);
});


export default apiAxios
