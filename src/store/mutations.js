import {REQUESTING,REQUESTERROR,REQUESTSUCCESS} from './mutations_types'
export default{
//请求中
[REQUESTING] (state){
state.firstView = false
state.loading = true
},


//请求成功
[REQUESTSUCCESS] (state,{users}){
state.loading = false
state.users = users
},

//请求失败
[REQUESTERROR] (state,eerrorMsg){
  state.loading = false
  state.errorMsg = errorMsg
  }
}