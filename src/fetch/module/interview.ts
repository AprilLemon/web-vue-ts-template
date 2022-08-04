//获取村镇列表
import { request } from '@/fetch/service'

// 访谈上报列表
interface InterviewList {
  page: number,
  keyword?: string,
  village_id?: number
  country_id?: number
}

export const interviewList = (data: InterviewList) => request.get({
  url: '/api/interview/list',
  data,
})

// 发布访谈上报
interface InterviewUp {
  title: string,
  create_user: string,
  mobile?: number,
  ids: string,
  file: string
}

export const interviewUp = (data: InterviewUp) => request.postForm({
  url: '/api/interview/up',
  data,
})

// 访谈上报编辑
interface InterviewEdit {
  id: string,
  title: string,
  create_user: string,
  mobile?: number,
  ids: string,
  file: string
}

export const interviewEdit = (data: InterviewEdit) => request.postForm({
  url: '/api/interview/edit',
  data,
})

// 访谈上报上架/下架列表
interface InterviewMyList {
  page: number,
  // 1已上架  2 待上架
  status: number,
  // 当前用户id
  userid: string
}

export const interviewMyList = (data: InterviewMyList) => request.get({
  url: '/api/interview/myList',
  data,
})

// 访谈上报详情
export const interviewInfo = (id: string) => request.get({
  url: '/api/interview/info',
  data: { id },
})

// 访谈 上下架/删除
interface InterviewOperation {
  // 0下架 1上架 2删除
  status: string,
  // 访谈ID
  id: string
}

export const interviewOperation = (data: InterviewOperation) => request.postForm({
  url: '/api/interview/operation',
  data,
})
