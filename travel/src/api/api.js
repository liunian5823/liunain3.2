import axios from 'axios';

let api='http://www.gz.chuangxiangit.cn'

//轮播
export const banner=()=>{
 return axios.get((api+'/tourism/'))
}
//列表页
export const homes=(loanend)=>{
 return axios.get((api+'/homes/?page='+ loanend))
}
// 详情页
export const goods=(goodsId)=>{
 return axios.get((api+'/goods/'+goodsId+'/'))
}
//语音功能
export const speechend=(params)=>{
  return axios.post((api+"/speech/"),params)//params代表需要传的参数
}
//搜索功能
export const searchIng=(searder)=>{
 return axios.get((api+'/goods/?search='+searder))
}
//验证码
export const getcode=(params)=>{
  return axios.post((api+'/codes/'),params)
 }

 //注册
export const register=(params)=>{
  return axios.post((api+'/users/'),params)
 }

 //登录
 export const login=(params)=>{
  return axios.post((api+'/login/denglu.php'),params)
 }

 //判断攻略是否收藏
 export const getcoll = goodsId=>{
  return axios.get((api+'/collect/'+ goodsId) +'/')
 }
 
//收藏功能
export const collect = params=>{
  return axios.post((api+'/collect/'),params)
 }

 //取消收藏
 export const delcoll = collId=>{
  return axios.delete((api+'/collect/' + collId) + '/')
 }

 //我的收藏列表
export const myscoll =()=>{
  return axios.get((api + '/collect/'))
}
