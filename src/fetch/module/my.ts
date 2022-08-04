import { request } from '@/fetch/service'

// 村民申请认证
interface UserAuth {
  name: string,
  village_id: number,
  village_name: string,
  remarks: string,
  is_householder: number,
  detaile_address: string
  sex: number,
  mobile: number
}

export const userAuth = (data: UserAuth) => request.postForm({
  url: '/api/user/auth',
  data,
})

// 获取用户信息
export const getUserInfo = () => request.get({
  url: '/api/getUserInfo',
})

// 村民认证详情
export const userAuthInfo = () => request.get({
  url: '/api/userAuth/info',
  data: {},
})

//我的邻里互助列表
interface AidMyList {
  page: number,
  status: number
}

export const aidMyList = (data: AidMyList) => request.get({
  url: '/api/aid/myList',
  data,
})
