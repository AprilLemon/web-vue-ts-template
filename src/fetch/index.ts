import { request } from './service'

export * from './module/snapshot'
export * from './module/rubbish'
export * from './module/partybuilding'
export * from './module/example'
export * from './module/home'
export * from './module/notice'
export * from './module/my'
export * from './module/neighbor-help'
export * from './module/trade'
export * from './module/village'
export * from './module/league-table'
export * from './module/certification'
export * from './module/interview'
export * from './module/article'
export * from './module/examine'

//查询核酸检测点列表
export interface CheckPointList {
  type: string,
  longitude: number,
  latitude: number,
  longAreaCode?: string
}

export const checkPointList = (data: CheckPointList) => request.get({
  url: '/system/checkPoint/list',
  data,
})

// 查询行政区划列表
interface DicAreaLis {
  parentId: number
}

export const dicAreaLis = (data: DicAreaLis) => request.get({
  url: '/system/dicArea/list',
  data,
})

interface GetConfig {
  code: string
}

export const CAMERA_PERMISSION = 'view_camera'
export const getConfig = (data: GetConfig) => request.get({
  url: '/system/config/list',
  data,
})

interface GetCameraPreviewUrl {
  cameraIndexCode: string
}

export const getCameraPreviewUrl = (data: GetCameraPreviewUrl) => request.get({
  url: '/system/checkPoint/getCameraPreviewUrl',
  data,
})

interface Test {
  data: string
}

export const test = (formData: Test) => request.upload({
  url: '/system/checkPoint/getCameraPreviewUrl',
  formData,
})

// test({ data: '' })

interface Login {
  code: string,
  userinfo: {
    nickName: string,
    avatarurl: string,
    gender: number
  }
}

export const login = (data: Login) => request.postForm({
  url: '/api/we/login',
  data,
})

// 重新登录置换jwt
export const getUserJwt = () => request.get({
  url: '/api/getUserJwt',
})

export const mockUpLoad = (filePath: string) => request.upload({
  url: '/api/upfile',
  name: 'file',
  filePath,
})

// 获取用户手机号
export const getMobile = (code: string) => request.post({
  url: '/api/we/getMobile',
  data: { code },
})

// banner列表
export const bannerList = (village_id: number) => request.get({
  url: '/api/banner/list',
  data: { village_id },
})

