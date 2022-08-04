import { request } from '@/fetch/service'

export const articleGetLocalHistory = (id: number) => request.get({
  url: '/api/article/getLocalHistory',
  data: {
    id,
  },
})
