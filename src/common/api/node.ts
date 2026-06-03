import { post } from './request'

export type PostNodeList = {
  full_node: number
  verification_node: number
}
export const postNodeList = post<PostNodeList>(
  'https://nodes.muverse.info/index.php/game/node_index/MyNodeList',
)

export const postSetUserCode = post('/game/node_order/setUserNodeCode')

export const postHasPrevOrder = post('/game/node_order/getOrderInfoRecord')

export const postCreateOrder = post('/game/node_index/NodeIndex')

export const postOrderIndex = post('')

export const postCancelOrder = post('/game/node_order/clientCancelOrder')
