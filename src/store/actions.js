import axios from 'axios'
import {REQUESTING,REQUESTERROR,REQUESTSUCCESS} from './mutations_types'
export default{
  async search({commit},searchName){
      commit(REQUESTING)
  try {
    const response = await axios('/gh/search/users', {params: {q: searchName}})
    // 如果成功了, 提交请求成功的mutation
    const result = response.data
    const users = result.items.map(item => ({
      username: item.login,
      url: item.html_url,
      avatar_url: item.avatar_url 
    }))
    commit(REQUESTSUCCESS, {users}) 
  } catch (error) { // 如果失败了, 提交请求失败的mutation
    commit(REQUESTERROR, {errorMsg: error.message}) 
  }
 }
}