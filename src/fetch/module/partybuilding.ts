// 乡村党建
import { request } from '@/fetch/service'
// 获取党员风采总数
export const memberstyleGetCount = () => request.get({
  url: '/api/memberstyle/getCount',
})
// 获取党员风采列表
export const memberstyleGetList = (data: { page: number, status: string }) => request.get({
  url: '/api/memberstyle/list',
  data,
})
// 获取 详情
export const memberstyleGetdetail = (data: { page: number, status: string }) => request.get({
  url: '/api/memberstyle/detail',
  data,
})
