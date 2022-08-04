import { request } from '../service'

// 交易集市列表
interface MarketList {
  page: number,
  cat_id: number,
  keyword: string,
  s_village_id: number
}

export const marketList = (data: MarketList) => request.get({
  url: '/api/market/list',
  data,
})

// 获取分类
export const marketCatList = () => request.get({
  url: '/api/marketCat/list',
})

// 创建
interface MarketUp {
  title: string,
  create_user: string,
  file: string,
  mobile: number,
  cat_id: number,
  cat_name: string
}

export const marketUp = (data: MarketUp) => request.postForm({
  url: '/api/market/up',
  data,
})

// 查询详情
export const marketInfo = (id: string) => request.get({
  url: '/api/market/info',
  data: {
    id,
  },
})

// 我的集市 status: 1已上架  2 待上架
interface MarketMyList {
  status: number,
  page: number
}

export const myList = (data: MarketMyList) => request.get({
  url: '/api/market/myList',
  data,
})

// 上下架删除 status  0下架  1 上架 2删除
interface MarketOperation {
  id: string,
  status: number
}

export const marketOperation = (data: MarketOperation) => request.get({
  url: '/api/market/operation',
  data,
})

// 编辑
interface MarketEdit {
  id: string,
  title: string,
  create_user: string,
  file: string,
  mobile: number,
  cat_id: number,
  cat_name: string
}

export const marketEdit = (data: MarketEdit) => request.post({
  url: '/api/market/edit',
  data,
})
