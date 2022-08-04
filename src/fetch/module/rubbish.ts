// 随手拍列表
import { request } from '@/fetch/service'

// 获取已上报总数
export const garbageGetCount = () => request.get({
  url: '/api/garbage/getCount',
})

// 垃圾上报列表
export const garbageList = (data: { page: number, status: string }) => request.get({
  url: '/api/garbage/list',
  data,
})

// 垃圾上报

interface GarbageUp {
  title?: string,
  address: {
    latitude: number,
    longitude: number,
    name: string,
    address: string
  },
  file: string
}

export const garbageUp = (data: GarbageUp) => request.post({
  url: '/api/garbage/up',
  data,
})

export const garbageInfo = (data: { id: string }) => request.get({
  url: '/api/garbage/info',
  data,
})
export const garbageDel = (data: { id: string }) => request.get({
  url: '/api/garbage/del',
  data,
})

