import { ShopItem } from './shop.types'

type ShopStoreState = {
	availableItems: ShopItem[]
}

type ShopStoreActions = {
	buyItem: (item: ShopItem) => void
}

export type ShopStore = ShopStoreState & ShopStoreActions
