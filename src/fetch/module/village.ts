import { request } from '@/fetch/service'
import { Media } from '@/types'

// 美丽乡村列表
interface BevillageList {
  page: number,
  village_id?: number
}

export const bevillageList = (data: BevillageList) => request.get({
  url: '/api/bevillage/list',
  data,
})

// 美丽乡村列表 status 1 已上架  2 待上架
interface BevillageMyList {
  page: number,
  status: number
}

export const bevillageMyList = (data: BevillageMyList) => request.get({
  url: '/api/bevillage/myList',
  data,
})

// 美丽乡村删除
export const bevillageDel = (id: string) => request.get({
  url: '/api/bevillage/del',
  data: {
    id,
  },
})

// 创建
interface BevillageUp {
  title?: string,
  content: string,
  file: Media[]
}

export const bevillageUp = (data: BevillageUp) => request.post({
  url: '/api/bevillage/up',
  data,
})

// 修改
interface BevillageEdit {
  id: string,
  title?: string,
  content: string,
  file: Media[]
}

export const bevillageEdit = (data: BevillageEdit) => request.post({
  url: '/api/bevillage/edit',
  data,
})

// 美丽乡村详情
export const bevillageInfo = (id: string) => request.get({
  url: '/api/bevillage/info',
  data: {
    id,
  },
})

// 首页美丽乡村视频列表
interface BevillageVideoList {
  id: any,
  village_id: any,
  userid: any
}

export const bevillageVideoList = (data: BevillageVideoList) => request.get({
  url: '/api/bevillage/videoList',
  data,
})

// 获取从统计数据
export const getVillage = (village_id: number) => request.get({
  url: '/api/getVillage',
  data: {
    village_id,
  },
})

// 根据乡ID获取所有村信息
export const villageGetVillageById = (village_id: number) => request.get({
  url: '/api/village/getVillageById',
  data: {
    village_id,
  },
})
