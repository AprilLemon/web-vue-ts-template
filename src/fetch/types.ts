export interface RequestOptions {
  base?: string,
  header?: AnyObject,
  successInterceptors?: <T = UniApp.RequestSuccessCallbackResult>(result: T) => T
  failInterceptors?: <T = UniApp.GeneralCallbackResult>(error: T) => T
}

// get, post 参数默认配置
export interface DefaultRequestConfig extends UniApp.RequestOptions {
  data?: FormData | string | AnyObject | ArrayBuffer,
  success?: (result: AnyObject) => AnyObject
  fail?: (e: UniApp.GeneralCallbackResult) => UniApp.GeneralCallbackResult
}

export interface DefaultUploadFileConfig extends UniApp.UploadFileOption {
  success?: (result: AnyObject) => AnyObject
  fail?: (e: UniApp.GeneralCallbackResult) => UniApp.GeneralCallbackResult
}

export interface DefaultGeneralCallbackResult extends UniApp.GeneralCallbackResult {
  msg?: string
}
