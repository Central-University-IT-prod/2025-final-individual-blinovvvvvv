import { SelectHeadwearItem } from '../select-headwear-item/SelectHeadwearItem'
import { useProfileStore } from '@/entities/profile'
import { cn } from '@/shared/lib/utils'

interface SelectHeadwearProps {
	className?: string
}

function SelectHeadwear({ className }: SelectHeadwearProps) {
	const availableHeadwear = useProfileStore(state => state.availableHeadwear)

	if (availableHeadwear.length === 0) return null

	return (
		<div className={cn('grid grid-cols-2 gap-2 lg:grid-cols-4', className)}>
			{availableHeadwear.map(headwear => (
				<SelectHeadwearItem headwear={headwear} key={headwear.value} />
			))}
		</div>
	)
}

export { SelectHeadwear }
