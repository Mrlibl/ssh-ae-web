import { post } from './request'

export const login = post('/game/user_actions/userLogins')

export async function ConnectWallet(account: string) {
  const res = await login({
    UserLoginReqMsg: { wallet: account },
  })
  return res
}
