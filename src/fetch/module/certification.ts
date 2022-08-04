import { request } from '@/fetch/service'
// 获取村民认证列表
export const getAuthList = (data: { page: number, status: number }) => request.get({
  url: '/api/examine/authList',
  data,
})
// 获取各个认证状态总数
export const getAuthListCount = () => request.get({
  url: '/api/examine/authListCount',
})

// 村名认证审核
interface Authentication {
  id: string,
  status: number,
  examine_opinion: string,
  // 是否管理员 0否 1是
  is_admin: string
}

export const authentication = (data: Authentication) => request.postForm({
  url: '/api/examine/authentication',
  data,
})

