import { Storage } from '@/constants'
import { LoginInfo, UserInfo } from '@/store/login'

export const setLoginInfo = (data: LoginInfo) => {
  return window.localStorage.setItem(Storage.Login, data)
}
export const getLoginInfo = () => {
  return window.localStorage.getItem(Storage.Login)
}
export const setUserInfo = (data: UserInfo) => {
  return window.localStorage.setItem(Storage.User, data)
}
export const getUserInfo = () => {
  return window.localStorage.getItem(Storage.User)
}

// 检查是否登录
export const checkLogin = () => {
  const loginInfo = getLoginInfo()
  if (loginInfo.jwt) {
    return true
  } else {
    clearLoginData()
    return false
  }
}

// 清楚登录数据
export const clearLoginData = () => {
  window.localStorage.removeItem(Storage.Login)
  window.localStorage.removeItem(Storage.User)
}
