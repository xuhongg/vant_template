// axios({
//     //请求地址
//     url:'/user',
//     //请求类型
//     method:'post',
//     //请求根目录
//     baseURL:'http://xxx.xx.xx.x/api',
//     // URl传递参数
//     params:{id:2},//get请求时用
//     data:{key:''},//post请求时用
//     //自定义请求头
//     headers:{'x-Requested-With':'XMLHttpRequest'},
//     //设置超时时间
//     timeout:5000,
//     //跨域是否带Toten
//     withCredentials:false,
//     //身份信息验证
//     auth:{uname:'',pwd:''},

//     //具体可以看这个官网链接：http://www.axios-js.com/zh-cn/docs/
// })

// // 为给定 ID 的 user 创建请求
// axios
//   .get("/user?ID=12345")
//   .then(function(response) {
//     console.log(response);
//   })
//   .catch(function(error) {
//     console.log(error);
//   });

// // 可选地，上面的请求可以这样做
// axios
//   .get("/user", {
//     params: {
//       ID: 12345
//     }
//   })
//   .then(function(response) {
//     console.log(response);
//   })
//   .catch(function(error) {
//     console.log(error);
//   });

// axios
//   .post("/user", {
//     firstName: "Fred",
//     lastName: "Flintstone"
//   })
//   .then(function(response) {
//     console.log(response);
//   })
//   .catch(function(error) {
//     console.log(error);
//   });

import QS from "qs"; //引入qs模块，为post型数据提供序列化
//qs.parse  将url解析为对象格式
//qs.stringify  将对象序列化为url格式 以&拼接
import axios from "axios";
import {
  Toast
} from "vant";

//  设置请求超时
axios.defaults.timeout = 10000; //设置超时时间为10s```

// 设置post请求方式请求头
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded;charset=UTF-8";

if (process.env.NODE_ENV == "development") {
  console.log('enter development')
  //   axios.defaults.baseURL = "https://www.baidu.com";
} else if (process.env.NODE_ENV == "production") {
  console.log('enter production')
  //   axios.defaults.baseURL = "https://www.production.com";
}

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params
      })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data);
      });
  });
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, QS.stringify(params))
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data);
      });
  });
}
