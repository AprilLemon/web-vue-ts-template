import Request from './Request'
import { getLoginInfo } from '@/tool/login'

interface RequestResponse {
  code: number,
  data: AnyObject,
  msg: string
}

export const request = new Request<RequestResponse>({
  base: (() => process.env.NODE_ENV === 'production' ? 'https://api.foxcube.cn' : import.meta.env.VITE_APP_DEV_TARGET)(),
  header: () => {
    const info = getLoginInfo()
    return {
      Authorization: info?.jwt ?? '',
    }
  },
})
