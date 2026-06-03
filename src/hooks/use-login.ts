import { reactive, ref, watch } from 'vue'

const { isLogin = false, info = {} } = JSON.parse(
  localStorage.getItem('accountInfo') || '{}',
)

export const isShowLogin = ref(false)

export const accountInfo = reactive<{
  isLogin: boolean
  info: Record<string, any>
}>({ isLogin, info })

watch(
  () => accountInfo,
  () => {
    localStorage.setItem('accountInfo', JSON.stringify(accountInfo))
  },
  { deep: true },
)

export async function logout() {
  accountInfo.isLogin = false
  accountInfo.info = {}
  localStorage.removeItem('accountInfo')
}

export function login() {
  return new Promise((res) => {
    isShowLogin.value = true
    watch(isShowLogin, (v) => {
      if (!v) {
        accountInfo.isLogin ? res(accountInfo) : res(false)
      }
    })
  })
}

export default function useLogin() {
  return {
    isShowLogin,
    logout,
    accountInfo,
  }
}
