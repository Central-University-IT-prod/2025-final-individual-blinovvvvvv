import { ProfileHeadwear, ProfileStatus } from '@/entities/profile/@x/shop'

type ShopItemStatus = {
	type: 'status'
	value: ProfileStatus
}

type ShopItemHeadwear = {
	type: 'headwear'
} & ProfileHeadwear

export type ShopItem = (ShopItemStatus | ShopItemHeadwear) & {
	price: number
}
