import Axios from "axios";

// 这里取决于登录的时候讲token存储在那里
// const token = sessionStorage.getItem("token");

const http = Axios.create({
  timeout: 60000
});

// 设置post请求头
http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

// 添加请求拦截器
http.interceptors.request.use(
  config => {
    // 将token添加到请求头
    // token && (config.headers.Authorization = token);
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 添加响应拦截器
http.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  error => {
    // 响应错误处理
    // 比如： token过期，无权限访问，路径不存在，服务器问题等
    switch (error.response.status) {
      case 401:
        console.log("登录超时");
        break;
      case 403:
        console.log("无权限访问");
        break;
      case 404:
        console.log("路径出错");
        break;
      case 500:
        console.log("服务器错误");
        break;
      default:
        console.log("其它错误");
    }
    return Promise.reject(error);
  }
);

export default http;
