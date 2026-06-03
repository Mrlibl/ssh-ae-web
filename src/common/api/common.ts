import { post, isTest } from './request'

export const postGetCode = post(
  `https://dapp${isTest ? 'test' : 'one'}.muverse.info/api/v1/sendEmail`,
)

export const postCodeLogin = post(
  `https://dapp${isTest ? 'test' : 'one'}.muverse.info/api/v1/register`,
)

// 密码登录
export const postPwdLogin = post(
  `https://${isTest ? 'dapptest' : 'dappone'}.muverse.info/api/v1/login`,
)

export const postSubsctibe = post(
  'https://dappone.muverse.info/api/v1/earClickHistory',
)

export const postVisiterLog = post(
  'https://musics.muverse.info/index.php/game/personal/insVistorLog',
)

export const postLogin = post(
  'https://nodes.muverse.info/index.php/game/user_actions/userLogins',
)

export const postCheckAuth = post(
  'https://nodes.muverse.info/index.php/game/Metamaskapi/checkauth',
)

export const postDisconnectWallet = post(
  'https://nodes.muverse.info/game/user_actions/userLogOut',
)
