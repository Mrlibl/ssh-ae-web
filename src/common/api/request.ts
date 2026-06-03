// @ts-nocheck
import axios from 'axios'
import { Message } from '@arco-design/web-vue'
import { useQuery, useMutation, useInfiniteQuery } from 'vue-query'
import router from '@/router'

import { state, disconnectWallet } from '@/hooks/use-wallet'
import i18n from '@/i18n'

import { getI18nKey } from '../utils'
import { accountInfo, logout } from '@/hooks/use-login'

// const prodTestMap = {
//   music: 'musictest',
//   dapp: 'dapptest',
//   dappone: 'dapptest',
// }

const testHost = 'https://music.muverse.info'
// const testHost = 'https://musictest.muverse.info'
const prodHost = 'https://music.muverse.info'

export const isDev = process.env.NODE_ENV === 'development'
export const isTest = !location.href.includes('www.muverse.info')
// export const isTest = location.href.includes('www.muverse.info')

async function request<T>(
  url: string,
  method: string,
  params: any = {},
  headers?: any,
) {
  const {
    wallet,
    wtype,
    token: wallet_token,
    chainId,
    ownerId: owner_id,
  } = state
  const { token, id } = accountInfo.info
  const { t } = i18n.global
  const query = {
    url,
    method,
    headers: {
      Authorization: token,
      ...headers,
    },
    params: {},
    data: {},
  }

  function checkI18n(key: string) {
    const i18nKey = getI18nKey(key)
    const i18nValue = t(i18nKey)
    return i18nValue !== i18nKey ? i18nValue : key
  }

  if (!query.url.startsWith('http')) {
    if (window.location.host.includes('www.muverse')) {
      query.url = `${prodHost}${query.url}`
    } else {
      query.url = `${testHost}${query.url}`
    }
  }

  const globalParams = query.url.includes('muverse')
    ? {
        wallet,
        token: wallet_token,
        owner_id,
        email_owner_id: owner_id,
        member_id: id,
        chain_id: chainId,
        wallet_type: wtype,
        platform: 1,
      }
    : {}

  if (params?.headers) {
    query.headers = params.headers
    delete params.headers
  }

  if (method === 'GET') {
    query.params = {
      ...globalParams,
      ...params,
    }
  }

  // 区分测试和正式环境
  if (method === 'POST') {
    query.data = params.data || {
      ...globalParams,
      ...params,
    }
  }

  let res: any
  try {
    isDev && console.log('query-params ->', query)
    res = await axios(query)
    isDev && console.log('query-res ->', res)
  } catch (e: any) {
    res = e.response
  }

  const { data, status } = res

  // if (status !== 200 || (data.code && data.code !== 200)) {
  //   if (data.msg === 'Invalid token' && !url.includes('LogOut')) {
  //     // if (state.isConnected) await disconnectWallet(false)
  //     setTimeout(() => {
  //       location.reload()
  //     }, 1000)
  //   } else if (data.msg.includes('token error')) {
  //     if (accountInfo.isLogin) await logout()
  //     router.push('/home')
  //   } else {
  //     data.msg && Message.error(checkI18n(data.msg))
  //   }
  //   return undefined as T
  // }

  return data.data !== undefined ? (data.data as T) : (data as T)
}

export function get<T>(url: string, p = {}) {
  return function (params = {}) {
    return request<T>(url, 'GET', { ...p, ...params })
  }
}

export function post<T>(url: string, headers = {}, p = {}) {
  return function (params = {}) {
    return request<T>(url, 'POST', { ...p, ...params }, headers)
  }
}

export function useGet<T = any>(url: string) {
  return function (params = {}) {
    return useQuery<T>(url, get<T>(url, params))
  }
}

// 由于接口大部分为post类型, post作为获取数据
export function usePost<T = any>(url: string, headers = {}, config?: any) {
  return function (params?: any) {
    return useQuery<T>(url, post<T>(url, headers, params), config)
  }
}

// 提交表单, 不自动运行
export function useFormPost<T>(url: string, headers = {}) {
  return function (params = {}) {
    return useMutation(url, post<T>(url, headers, params))
  }
}

// 获取分页类型数据, 自动运行
export function useInfinitePost<T>(url: string, headers = {}, config = {}) {
  return function (params?: any) {
    return useInfiniteQuery<T>(url, post<T>(url, headers, params), config)
  }
}
