import { useProfileStore } from '@/entities/profile'
import { ShopCard, useShopStore } from '@/entities/shop'
import { ShopItem } from '@/entities/shop/model/types/shop.types'
import { PageTitle } from '@/shared/components/ui/page-title'
import { toast } from 'sonner'

function ShopPage() {
	const availableItems = useShopStore(state => state.availableItems)

	const balance = useProfileStore(state => state.balance)

	const buyItem = useShopStore(state => state.buyItem)
	const onBuy = (item: ShopItem) => {
		buyItem(item)
		toast('Покупка доступна в Вашем профиле!')
	}

	return (
		<div>
			<PageTitle className='md:mb-5'>Магазин</PageTitle>
			<p className='mb-10 text-lg font-medium text-zinc-400'>
				Здесь вы можете потратить свои честно заработанные #СИГМИКИ
			</p>
			<div className='flex flex-col gap-4'>
				{availableItems.map(item => (
					<ShopCard
						onBuy={() => onBuy(item)}
						item={item}
						key={item.value}
						isDisabled={balance < item.price}
					/>
				))}
			</div>
		</div>
	)
}

export { ShopPage }
