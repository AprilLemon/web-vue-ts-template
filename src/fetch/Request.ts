import { DefaultGeneralCallbackResult, DefaultRequestConfig, DefaultUploadFileConfig, RequestOptions } from './types'
import { generateJumpPath } from '@/tool/utils'
import { useLoginStore } from '@/store/login'

const errorMsg = (status: number) => {
  let message = ''
  switch (status) {
    case 400:
      message = '请求错误(400)'
      break
    case 401:
      message = '未授权，请重新登录(401)'
      break
    case 403:
      message = '拒绝访问(403)'
      break
    case 404:
      message = '请求出错(404)'
      break
    case 408:
      message = '请求超时(408)'
      break
    case 500:
      message = '服务器错误(500)'
      break
    case 501:
      message = '服务未实现(501)'
      break
    case 502:
      message = '网络错误(502)'
      break
    case 503:
      message = '服务不可用(503)'
      break
    case 504:
      message = '网络超时(504)'
      break
    case 505:
      message = 'HTTP版本不受支持(505)'
      break
    default:
      message = `连接出错(${status})!`
  }
  return `${message}，请检查网络或联系管理员！`
}

const redirectPage = () => {
  uni.navigateTo({
    url: generateJumpPath({
      url: '/pages/login/login',
      params: {},
    }),
  })
}
const reLaunchApp = () => {
  const { fetchReLogin } = useLoginStore()
  uni.showLoading({ mask: true, title: '正在更新用户信息' })
  fetchReLogin().then(() => {
    uni.hideLoading()
    uni.showToast({ icon: 'success', title: '更新成功,即将重启应用' })
    setTimeout(() => {
      uni.reLaunch({
        url: '/pages/home/index/index',
      })
    }, 1000)
  })
}

class Request<P> {
  public config: RequestOptions

  constructor (config: RequestOptions) {
    this.config = config
  }

  private requestSuccess (res: UniApp.RequestSuccessCallbackResult, fetchSuccess: any, resolve: any, reject: any): void {
    const result = <AnyObject> res.data
    const classRes = (this.config.successInterceptors && this.config.successInterceptors(result)) || result
    const fetchRes = (fetchSuccess && fetchSuccess(classRes)) || classRes
    if (fetchRes.code === 0) {
      resolve(<P> fetchRes)
      return
    }

    if (fetchRes.code === 401) {
      redirectPage()
    }

    if (fetchRes.code === 406) {
      reLaunchApp()
      return
    }

    console.error('fetch_success:', res)
    uni.hideLoading()
    uni.showToast({ icon: 'none', title: fetchRes.msg || errorMsg(fetchRes.code || res.statusCode) })
    reject(result)
  }

  private uploadSuccess (res: UniApp.UploadFileSuccessCallbackResult, fetchSuccess: any, resolve: any, reject: any): void {
    const result = JSON.parse(res.data)
    const classRes = (this.config.successInterceptors && this.config.successInterceptors(result)) || result
    const fetchRes = (fetchSuccess && fetchSuccess(classRes)) || classRes
    if (result.code === 0) {
      resolve(<P> fetchRes)
      return
    }
    if (result.code === 401) {
      redirectPage()
    }

    console.error(res)
    uni.hideLoading()
    uni.showToast({ icon: 'none', title: fetchRes.msg || errorMsg(fetchRes.code || res.statusCode) })
    reject(result)
  }

  private requestFail (error: DefaultGeneralCallbackResult, fetchFail: any, reject: any) {
    console.error(error)
    uni.hideLoading()
    uni.showToast({ icon: 'none', title: error.msg || error.errMsg })
    const classError = (this.config.failInterceptors && this.config.failInterceptors(error)) || error
    const fetchError = (fetchFail && fetchFail(classError)) || classError
    reject(fetchError)
  }

  private generateUrl (url: string) {
    return this.config.base ? `${this.config.base}${url}` : url
  }

  private generateHeader (header: any) {
    if (this.config.header) {
      if (typeof this.config.header === 'function') {
        return Object.assign({}, header, this.config.header())
      } else {
        return Object.assign({}, header, this.config.header)
      }
    }
    return header
  }

  private request (config: DefaultRequestConfig): Promise<P> {
    return new Promise((resolve, reject) => {
      const { success: fetchSuccess, fail: fetchFail, url, header } = config
      config.url = this.generateUrl(url)
      config.header = this.generateHeader(header)
      uni.request({
        ...config,
        success: (res: UniApp.RequestSuccessCallbackResult) => this.requestSuccess(res, fetchSuccess, resolve, reject),
        fail: error => this.requestFail(error, fetchFail, reject),
      })
    })
  }

  upload (config: DefaultUploadFileConfig): Promise<P> {
    return new Promise((resolve, reject) => {
      const { success: fetchSuccess, fail: fetchFail, url, header } = config
      config.url = this.generateUrl(url)
      config.header = this.generateHeader(header)
      uni.uploadFile({
        ...config,
        success: (res) => this.uploadSuccess(res, fetchSuccess, resolve, reject),
        fail: error => this.requestFail(error, fetchFail, reject),
      })
    })
  }

  get (config: DefaultRequestConfig): Promise<P> {
    config.method = 'GET'
    return this.request(config)
  }

  post (config: DefaultRequestConfig): Promise<P> {
    config.method = 'POST'
    return this.request(config)
  }

  postForm (config: DefaultRequestConfig): Promise<P> {
    config.method = 'POST'
    config.header = {
      'content-type': 'application/x-www-form-urlencoded;',
    }
    return this.request(config)
  }
}

export default Request
