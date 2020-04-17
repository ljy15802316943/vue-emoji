import axios from "axios";
import qs from "qs"; //处理参数
import router from '../router';
import { Loading } from 'element-ui';
import { Message } from 'element-ui';

let loading = null;

//开始加载动画
function openLoading(){
  loading = Loading.service({
    lock:true,
    text:'拼命加载中...',
    background:'rgba(0,0,0,.7)'
  });
};

//关闭加载动画
function closeLoading(){
  loading.close();
};

//添加请求拦截器
axios.interceptors.request.use(
  config => {
    //加载动画
    openLoading()
    if(sessionStorage.sessionId){ //如果我的sessionId存在(sessionId其实就是token), 在登录页面获取
      // 设置统一的请求header
      config.headers.Authorization = sessionStorage.sessionId //授权(每次请求把sessionId带给后台)
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

//添加响应拦截器
axios.interceptors.response.use(
  response => {
    closeLoading()//关闭加载动画
    if(response.data.errorCode == 1){ //后端反回的状态值，本应该errorCode是status
      Message({
        type:'warning',
        duration:1500,
        showClose: true,
        message:'当前登录已失效，请从新登录！'
      })
      sessionStorage.removeItem("sessionId")//清除sessionId
      sessionStorage.removeItem("username")//清除username
      sessionStorage.removeItem("modules")//清除权限
      sessionStorage.removeItem("userId")//清除用户id
      router.push("/logon")//让用户从新回到登录页面
    }
    return response;
  },
  error => {
    closeLoading() // 关闭加载动画
    return Promise.resolve(error.response);
  }
);

axios.defaults.baseURL = "http://10.26.4.18:8081/neixuan";    // 开发环境
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.timeout = 10000; // 响应超时时间

function checkStatus(response) {
  return new Promise((resolve, reject) => {
    if(response && (response.status === 200 || response.status === 304 || response.status === 400)){
      resolve(response.data);
    }else{
      Message({
        type:'error',
        showClose: true,
        message:'网络异常，请检查网络连接是否正常！'
      })
    }
  });
};

export default {
  post(url, params) {
    return axios({
      method: "post",
      url,
      data: params
    }).then(response => {
      return checkStatus(response);
    });
  },
  get(url, params) {
    params = qs.stringify(params);
    return axios({
      method: "get",
      url,
      params
    }).then(response => {
      return checkStatus(response);
    });
  }
};