import { get, post, useGet } from './request'

export interface GetHomeInfo {
  linkList: {
    app_store_url: string
    google_play_url: string
  }
  time: number
  newsList: NewItem[]
  advisorsList: AdvisorItem[]
  teamList: {
    icon: string
    title_level: string
    name: string
    linked_in_url: string
    twitter_url: string
  }[]
  backerList: {
    img_url: string
    link: string
  }[]
}

export interface NewItem {
  id: number
  img_url: string
  name: string
  intro: string
  link: string
}

export interface AdvisorItem {
  id: number
  img_url: string
  name: string
  intro: string
  link: string
}

export const getHomeInfo = get<GetHomeInfo>('/game/index/indexData')

export const getNewsList = useGet('/game/index/newsList')

export interface GetEarnScore {
  score: string
  duration: string
}
export const getEarnScore = useGet<GetEarnScore>('/game/index/getTotal')

export interface GetUserEarnItem {
  member_id: string
  amount: string
  head: string
  icon: string
}

export const getUserEarns = useGet<GetUserEarnItem[]>(
  '/game/show_list/getIncomeData',
)

export interface GetInvestItem {
  amount: string
  eth_amount: string
  nft_token: string
  icon: string
}
export const getInvestItem = get<GetInvestItem[]>(
  '/game/show_list/getNftSellData',
)

// 获取地区
export const getZone = get('/game/show_list/getAmbassadorArea')
// 获取大使列表
export interface GetAmmba {
  id: number
  area: string
  country: string
  attribute: number
  icon: string
}

export const getAmmba = get<GetAmmba[]>('/game/show_list/getAmbassadorData')

export const getNews = get('https://adminhost.sirenai.me/index.php/api/index/newlist')
