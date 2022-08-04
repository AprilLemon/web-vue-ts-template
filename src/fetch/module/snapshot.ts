import { request } from '../service'

export const stateList = () => request.get({
  url: '/api/handClap/stateList',
})

interface HandClapUp {
  cate_id:number,
  describe: string,
  address: {
    latitude: number,
    longitude: number,
    name: string,
    address: string
  },
  file: string
}

// 上报
export const handClapUp = (data: HandClapUp) => request.post({
  url: '/api/handClap/up',
  data,
})

// 详情
export const handClapInfo = (data: { id: string }) => request.get({
  url: '/api/handClap/info',
  data,
})

// 随手拍列表
export const handClapList = (data: { status: string, page: number }) => request.get({
  url: '/api/handClap/list',
  data,
})

// 随手拍列表
export const handClapDel = (data: { id: string }) => request.get({
  url: '/api/handClap/del',
  data,
})

//事件上报分类
export const handCate = (data: { userid: any }) => request.get({
  url: '/api/handClap/handCate',
  data,
})

