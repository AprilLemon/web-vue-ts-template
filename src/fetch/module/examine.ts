import { request } from '@/fetch/service'

export const statisticsList = (village_id: number, page: number) => request.get({
  url: '/api/examine/statistics/list',
  data: {
    village_id,
    page
  },
})
