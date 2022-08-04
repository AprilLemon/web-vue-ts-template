import { request } from '@/fetch/service'

interface articleParams {
  category: number,
  page: number,
  status: number,
  village_id: number | undefined
}

export const getArticle = (data: articleParams) => request.get({
  url: '/api/article/getArticle',
  data,
})

interface ArticleDetail {
  userid?: any,
  village_id?: any,
  article_id: any
}

export const getArticleDetail = (data: ArticleDetail) => request.get({
  url: '/api/article/getArticleDetail',
  data,
})

interface ArticleSubmitArticle {
  title: string,
  category_id: string,
  thumb: string,
  content: string,
  description?: string
}

export const articleSubmitArticle = (data: ArticleSubmitArticle) => request.postForm({
  url: '/api/examine/article/submitArticle',
  data,
})
