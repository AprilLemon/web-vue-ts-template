import { request } from '@/fetch/service'

// 获取分类列表
export const aidCatList = () => request.get({
  url: '/api/aidCat/list',
})

// 发布
interface AidUp {
  mobile: number,
  cat_id: string,
  cat_name: string,
  file: any[],
  content: string
}

export const aidUp = (data: AidUp) => request.post({
  url: '/api/aid/up',
  data,
})

// 邻里互助 列表
interface AidList {
  page: number,
  is_all: number
}

export const aidList = (data: AidList) => request.get({
  url: '/api/aid/list',
  data,
})

// 邻里互助获取头部村信息
export const aidGetVillage = () => request.get({
  url: '/api/aid/getVillage',
})

// 邻里互助删除
export const aidDel = (id: number) => request.get({
  url: '/api/aid/del',
  data: {
    id,
  },
})

// 获取邻里互助详情
export const aidInfo = (id: string) => request.get({
  url: '/api/aid/info',
  data: {
    id,
  },
})

// 修改
interface AidEdit {
  id: string,
  mobile: number,
  cat_id: string,
  cat_name: string,
  file: any[],
  content: string
}

export const aidEdit = (data: AidEdit) => request.post({
  url: '/api/aid/edit',
  data,
})
