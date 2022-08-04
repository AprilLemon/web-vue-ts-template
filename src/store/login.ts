import { defineStore } from 'pinia'
import { ref } from 'vue'
import * as storageLogin from '@/tool/login'
import { login, getMobile, getUserInfo, userAuthInfo, getUserJwt } from '@/fetch'
import weappJwtDecode from '@/tool/weapp-jwt'

// 1男 2女 0未知
enum Gender {
  unknown = 0,
  man = 1,
  woman = 2
}

// 是否
enum YesOrNo {
  no,
  yes
}

// 授权状态 0待认证 1已驳回 2已认证 3认证中
enum Status {
  unknown,
  error,
  success,
  doing
}

export interface LoginInfo {
  id: string,
  jwt: string,
  nickname: string,
  avatarUrl: string,
  gender: Gender,
  version?: number,
  _appId?: string,
  iat?: number,
}

export interface UserInfo {
  id: string,
  nickname: string,
  username: string,
  avatarUrl: string,
  gender: Gender,
  mobile?: number,
  villageId?: number,
  villageName: string,
  sex: Gender,
  detailAddress: UniApp.ChooseLocationSuccess | undefined,
  isHouseholder: YesOrNo,
  isAdmin: YesOrNo,
  // 村名认证状态
  isAuth: Status
}

export interface AuthInfo {
  // 村名认证状态 同userInfo
  status: Status
}

export const useLoginStore = defineStore('loginStore', () => {
    const loginInfo = ref<LoginInfo>({
      id: '',
      jwt: '',
      nickname: '',
      avatarUrl: '',
      gender: 0,
    })

    const userInfo = ref<UserInfo>({
      id: '',
      nickname: '',
      avatarUrl: '',
      gender: 0,
      mobile: undefined,
      username: '',
      villageId: undefined,
      villageName: '',
      sex: 0,
      detailAddress: {
        longitude: 0,
        latitude: 0,
        name: '',
        address: '',
      },
      isHouseholder: 0,
      isAdmin: 0,
      isAuth: 0,
    })

    const authInfo = ref<AuthInfo>({
      status: 0,
    })

    const restLoginInfo = ref<LoginInfo>(JSON.parse(JSON.stringify(loginInfo.value)))
    const restUserInfo = ref<LoginInfo>(JSON.parse(JSON.stringify(userInfo.value)))

    const recoverInfo = (data: LoginInfo) => {
      loginInfo.value = data
    }

    // 写入getUserProfile获取的基本信息
    const setLoginInfo = (data: LoginInfo) => {
      loginInfo.value.id = String(data.id)
      // loginInfo.value.jwt = data.jwt
      loginInfo.value.jwt = data.jwt
      loginInfo.value.nickname = data.nickname
      loginInfo.value.avatarUrl = data.avatarUrl
      loginInfo.value.gender = data.gender
      storageLogin.setLoginInfo(loginInfo.value)
      console.log('loginInfo:', loginInfo.value)
    }

    const setUserInfo = (data: UserInfo) => {
      userInfo.value = data
      storageLogin.setUserInfo(userInfo.value)
      console.log('userInfo:', userInfo.value)
    }
    const setAuthInfo = (data: AuthInfo) => {
      authInfo.value = data
    }

    // 写入获取手机号授权按钮返回的手机号
    const setUserPhone = (phone: number) => {
      userInfo.value.mobile = phone
      storageLogin.setUserInfo(userInfo.value)
    }

    const isLogin = () => {
      return !!loginInfo.value.jwt
    }
    const hasUserInfo = () => {
      return !!userInfo.value.id
    }
    const hasMobile = () => {
      return !!userInfo.value.mobile
    }
    const hasVillageId = () => {
      return !!userInfo.value.villageId
    }

    const isAdmin = () => {
      return !!userInfo.value.isAdmin
    }

    const clearInfo = () => {
      loginInfo.value = JSON.parse(JSON.stringify(restLoginInfo))
      userInfo.value = JSON.parse(JSON.stringify(restUserInfo))
      storageLogin.clearLoginData()
    }

    const wxGetCode = () => {
      return new Promise((resolve, reject) => {
        uni.login({
          provider: 'weixin',
          success: (res) => {
            resolve(res.code)
          },
          fail: (e) => {
            reject(e)
          },
        })
      })
    }

    const wexGetUserProfile = () => {
      return new Promise((resolve, reject) => {
        uni.getUserProfile({
          desc: '将用于注册账号体系',
          success: (res: UniApp.GetUserProfileRes) => {
            resolve(res.userInfo)
          },
          fail: (e: any) => {
            reject(e)
          },
        })
      })
    }

    const generateLoginInfo = (jwt = '') => {
      const data = weappJwtDecode(jwt)
      const finallyData: LoginInfo = {
        id: data.id,
        jwt: jwt,
        nickname: data.nickname,
        avatarUrl: data.avatarurl,
        gender: data.gender,
        // iat: data.iat,
        // version: data.version,
      }
      return finallyData
    }

    // 微信登录
    interface FetchLoginInfo {
      code: string,
      userInfo: UniApp.UserInfo
    }

    const fetchLogin = async (data: FetchLoginInfo) => {
      const { nickName, avatarUrl, gender } = <AnyObject> data.userInfo
      const res = <AnyObject> await login({
        code: data.code,
        userinfo: JSON.stringify({ nickName, avatarurl: avatarUrl, gender }),
      }).catch(e => {
        console.error(e)
      })
      if (res.data) {
        const flag = generateLoginInfo(res.data.jwt)
        setLoginInfo(flag)
        return flag
      }
    }

    // 后台返回406 jwt更新，调用这个接口
    const fetchReLogin = async () => {
      const res = await getUserJwt().catch(e => {
        console.error(e)
      })
      if (res?.data) {
        const flag = generateLoginInfo(res.data.jwt)
        setLoginInfo(flag)
        return flag
      }
    }

    // 获取手机号接口
    interface UserPhone {
      code: string,
      encryptedData: string,
      iv: string
    }

    const fetchUserPhone = (data: UserPhone) => {
      return new Promise((resolve, reject) => {
        if (!data.code) {
          uni.showToast({ icon: 'none', title: '无法获取code，请更新微信版本' })
          reject(new Error('无法获取code'))
          return
        }
        getMobile(data.code).then(res => {
          resolve(res.data.mobile)
          setUserPhone(res.data.mobile)
        }).catch(e => {
          reject(e)
        })
      })
    }

    type FetchUserInfo = () => Promise<UserInfo>
    const fetchUserInfo: FetchUserInfo = () => {
      return new Promise((resolve, reject) => {
        getUserInfo().then(res => {
          const {
            id = '',
            nickname = '',
            username = '',
            avatarurl = '',
            gender = 0,
            mobile,
            village_id,
            village_name = '',
            sex = 0,
            status = 0,
            detaile_address,
            is_householder = 0,
            is_administrators = 0,
            is_auth = 0,
          } = res.data

          const finallyData = {
            id,
            nickname,
            username,
            avatarUrl: avatarurl,
            gender,
            mobile,
            villageId: village_id,
            villageName: village_name,
            sex,
            detailAddress: detaile_address,
            isHouseholder: is_householder,
            isAdmin: is_administrators,
            isAuth: is_auth,
          }
          setUserInfo(finallyData)
          resolve(finallyData)
        }).catch(e => {
          reject(e)
        })
      })
    }

    const fetchAuthInfo = () => {
      return new Promise((resolve, reject) => {
        userAuthInfo().then(res => {
          resolve(res.data)
          setAuthInfo({
            status: res.data.status,
          })
        }).catch(e => {
          console.error(e)
          reject(e)
        })
      })
    }

    return {
      loginInfo,
      userInfo,
      authInfo,
      clearInfo,
      recoverInfo,
      isLogin,
      hasUserInfo,
      hasMobile,
      hasVillageId,
      isAdmin,
      setLoginInfo,
      setUserInfo,
      setUserPhone,
      fetchLogin,
      fetchReLogin,
      fetchUserPhone,
      fetchUserInfo,
      fetchAuthInfo,
      wxGetCode,
      wexGetUserProfile,
    }
  },
)
