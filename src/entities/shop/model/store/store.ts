import { shopItems } from '../data/shop-items'
import { ShopStore } from '../types/shop-store.types'
import { ShopItem } from '../types/shop.types'
import { ProfileStore, useProfileStore } from '@/entities/profile/@x/shop'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

function profileStoreItemActions(store: ProfileStore, item: ShopItem) {
	store.setBalance(store.balance - item.price)

	if (item.type === 'status') {
		store.addAvailableStatus(item.value)
	}

	if (item.type === 'headwear') {
		store.addAvailableHeadWear({
			value: item.value,
			path: item.path,
			className: item.className,
		})
	}
}

export const useShopStore = create<ShopStore>()(
	persist(
		set => ({
			availableItems: shopItems,

			buyItem: item =>
				set(state => {
					const profileStore = useProfileStore.getState()

					if (profileStore.balance - item.price >= 0) {
						profileStoreItemActions(profileStore, item)

						return {
							availableItems: state.availableItems.filter(
								availableItem => availableItem.value !== item.value
							),
						}
					}

					return state
				}),
		}),
		{
			name: 'shop-store',
		}
	)
)
