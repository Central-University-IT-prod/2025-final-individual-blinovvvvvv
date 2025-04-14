import { ProfileHeadwear, useProfileStore } from '@/entities/profile'
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from '@/shared/components/ui/card'
import { Checkbox } from '@/shared/components/ui/checkbox'
import { Image } from '@/shared/components/ui/image'
import { cn } from '@/shared/lib/utils'

interface SelectHeadwearItemProps {
	headwear: ProfileHeadwear
}

function SelectHeadwearItem({ headwear }: SelectHeadwearItemProps) {
	const toggleHeadwear = useProfileStore(state => state.toggleHeadwear)
	const currentHeadwear = useProfileStore(state => state.headwear)
	const isSelected = currentHeadwear?.value === headwear.value

	const onClick = () => toggleHeadwear(headwear)

	return (
		<Card
			onClick={onClick}
			className={cn({
				['border-white']: isSelected,
			})}
		>
			<CardHeader className='flex flex-row justify-between px-4'>
				<CardTitle>{headwear.value}</CardTitle>
				<Checkbox checked={isSelected} aria-label={headwear.value} />
			</CardHeader>
			<CardContent className='flex justify-center px-4'>
				<Image
					src={headwear.path}
					alt={headwear.value}
					width={80}
					height={80}
				/>
			</CardContent>
		</Card>
	)
}

export { SelectHeadwearItem }
