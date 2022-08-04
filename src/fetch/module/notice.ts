//通知公告
import { request } from '@/fetch/service'

//公告创建
interface NoticeUp {
  title: string,
  enclosure: string,
  content: string,
  sort?: string
}

export const noticeUp = (data: NoticeUp) => request.postForm({
  url: '/api/notice/up',
  data,
})

//公告数据列表
export const noticeList = (data: { page: number, village_id: number | undefined, userid: string }) => request.get({
  url: '/api/notice/list',
  data,
})

//公告删除
export const noticeDel = (data: { id: string }) => request.get({
  url: '/api/notice/del',
  data,
})

//公告详情
export const noticeInfo = (data: { id: string }) => request.get({
  url: '/api/notice/info',
  data,
})

// 获取上一首 下一首 type 1上一首  2下一首
interface NoticeGetNext {
  id: string,
  type: number
}

export const noticeGetNext = (data: NoticeGetNext) => request.get({
  url: '/api/notice/getNext',
  data,
})

