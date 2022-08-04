//获取村镇列表
import { request } from '@/fetch/service'

export const getVillageList = () => request.get({
  url: '/api/village/list',
})

interface AppList {
  village_id?: number,
  is_admin: number
}

export const getAppList = (data: AppList) => request.get({
  url: '/api/village/app_list',
  data,
})
