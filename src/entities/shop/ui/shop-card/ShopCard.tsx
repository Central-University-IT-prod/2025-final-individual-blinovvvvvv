import { ShopItem } from '../../model/types/shop.types'
import { AppCard } from '@/shared/components/ui/app-card'
import { Button } from '@/shared/components/ui/button'
import { Image } from '@/shared/components/ui/image'

interface ShopCardProps {
	item: ShopItem
	onBuy: () => void
	isDisabled: boolean
}

function ShopCard(props: ShopCardProps) {
	const { item, onBuy, isDisabled } = props

	return (
		<AppCard className='flex flex-col justify-between gap-4 cyan-gradient lg:flex-row lg:items-center'>
			<div className='flex items-center gap-2'>
				{item.type === 'headwear' && (
					<div className='rounded-xl p-2 purple-gradient'>
						<Image src={item.path} alt={item.value} width={60} height={60} />
					</div>
				)}
				<p className='text-xl font-bold text-black'>
					{item.type === 'status' && 'НОВЫЙ СТАТУС:'}
				</p>
				<p className='text-xl font-bold text-black'>{item.value}</p>
			</div>
			<div className='flex items-center justify-between gap-4'>
				<div className='truncate rounded-3xl px-6 py-2 text-center font-inter text-3xl font-extrabold text-black green-gradient md:rounded-4xl md:text-4xl'>
					{item.price}
				</div>

				<Button disabled={isDisabled} onClick={onBuy}>
					Купить
				</Button>
			</div>
		</AppCard>
	)
}

export { ShopCard }
