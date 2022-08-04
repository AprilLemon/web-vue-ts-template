import { request } from '../service'
// 积分榜相关信息
export const getInterInfo = (data: { userid: string, village_id: any }) => request.get({
  url: '/api/inter/getInterInfo',
  data,
})
// 本乡积分榜
export const getCountryInterInfo = (data: { userid: string, village_id: any }) => request.get({
  url: '/api/inter/getCountryInterInfo',
  data,
})
// 我的积分
export const interMyInter = (userid: string) => request.get({
  url: '/api/inter/myInter',
  data: {
    userid,
  },
})

// 获取积分详细
export const interInterDetailed = (userid: string) => request.get({
  url: '/api/inter/interDetailed',
  data: {
    userid,
  },
})

//  用户根据规则获取积分 rule_id规则ID 1每日登录 2随手拍 3垃圾上报 4通知公告 5美丽乡村 6邻里互助 7资讯阅读
interface InterUserGetInter {
  rule_id: number,
  content_id: string
}

export const interUserGetInter = (data: InterUserGetInter) => request.postForm({
  url: '/api/inter/userGetInter',
  data,
})

// 积分兑换说明
export const ruleDescList = (village_id: number) => request.get({
  url: '/api/ruleDesc/list',
  data: {
    village_id,
  },
})

// 积分管理.用户列表
interface InterUserListInfo {
  mobile: string,
  choice: string,
  sort: string,
  village_id: number,
  userid: string
}

export const interUserListInfo = (data: InterUserListInfo) => request.get({
  url: '/api/examine/inter/userListInfo',
  data,
})

// 用户积分详情
interface InterGetDetail {
  id: string,
  village_id: number,
  userid: string,
  mobile?: number
}

export const interGetDetail = (data: InterGetDetail) => request.get({
  url: '/api/examine/inter/getDetail',
  data,
})

// 管理员积分加减
interface InterChangeInter {
  id: string,
  type: 1 | 2,
  num?: number,
  desc: string
}

export const interChangeInter = (data: InterChangeInter) => request.postForm({
  url: '/api/examine/inter/changeInter',
  data,
})

// 管理员获取资讯
interface ArticleGetAllArticle {
  category: number,
  page: number,
  village_id: number,
}

export const articleGetAllArticle = (data: ArticleGetAllArticle) => request.get({
  url: '/api/examine/article/getAllArticle',
  data,
})

// 文章资讯置顶 flag是否置顶 1是 0反之
interface ArticleChangeTop {
  id: string,
  flag: 0 | 1
}

export const articleChangeTop = (data: ArticleChangeTop) => request.postForm({
  url: '/api/examine/article/changeTop',
  data,
})

// 获取tab分类列表
export const articleGetCategory = () => request.get({
  url: '/api/examine/article/getCategory',
})

// 修改资讯状态 status修改之后的状态（1显示 0隐藏）
interface ArticleChangeStatus {
  id: string,
  status: 0 | 1
}

export const articleChangeStatus = (data: ArticleChangeStatus) => request.postForm({
  url: '/api/examine/article/changeStatus',
  data,
})

// 获取各个认证状态总数
export const examineAuthListCount = () => request.get({
  url: '/api/examine/authListCount',
})
// 获取管理员首页数据统计
export const examineAdminIndex = () => request.get({
  url: '/api/examine/admin/index',
})

// 管理员获取资讯详情
export const examineArticleGetArticleById = (article_id: string) => request.get({
  url: '/api/examine/article/getArticleById',
  data: {
    article_id,
  },
})

// 管理员删除资讯
export const examineArticleDelArticle = (title_id: string) => request.postForm({
  url: '/api/examine/article/delArticle',
  data: {
    title_id,
  },
})

// 列表  type:1随手拍  2垃圾上报  status:随手拍 状态 0待处理  1处理中  2已处理   垃圾上报状态 0待处理   2已处理
interface ExamineUpList {
  page: number,
  type: 1 | 2,
  status: 0 | 1 | 2
}

export const examineUpList = (data: ExamineUpList) => request.get({
  url: '/api/examine/upList',
  data,
})

// 数据详情
export const examineInfo = (id: string) => request.get({
  url: '/api/examine/info',
  data: { id },
})

interface ExamineUpToExamine {
  id: string,
  status?: string,
  feedback: string
}

export const examineUpToExamine = (data: ExamineUpToExamine) => request.postForm({
  url: '/api/examine/upToExamine',
  data,
})

interface ExamineReleaseList {
  type: number,
  status: number,
  page: number
}

export const examineReleaseList = (data: ExamineReleaseList) => request.get({
  url: '/api/examine/releaseList',
  data,
})

// 审核  status 1通过 2 驳回
interface ExamineReleaseToExamine {
  id: string,
  status: 1 | 2
}

export const examineReleaseToExamine = (data: ExamineReleaseToExamine) => request.postForm({
  url: '/api/examine/releaseToExamine',
  data,
})
