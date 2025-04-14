import { AppCard } from '@/shared/components/ui/app-card'
import { cn } from '@/shared/lib/utils'
import { ReactNode, RefObject, useRef } from 'react'
import { useSwipeable } from 'react-swipeable'
import { useOnClickOutside } from 'usehooks-ts'

interface SwipeableCardProps {
	className?: string
	leftSideSlot: ReactNode
	rightSideSlot: ReactNode
	itemsAtSwipeOn?: ReactNode
	onSwipedLeft: () => void
	onSwipedRight: () => void
	isSwiped: boolean
}

function SwipeableCard(props: SwipeableCardProps) {
	const {
		className,
		leftSideSlot,
		rightSideSlot,
		onSwipedLeft,
		onSwipedRight,
		isSwiped,
		itemsAtSwipeOn,
	} = props

	const ref = useRef(null)

	const handlers = useSwipeable({
		onSwipedLeft,
		onSwipedRight,
		preventScrollOnSwipe: true,
		trackMouse: true,
	})

	useOnClickOutside<HTMLDivElement>(
		ref as unknown as RefObject<HTMLDivElement>,
		() => {
			if (isSwiped) onSwipedRight()
		}
	)

	return (
		<div className='relative mb-2' ref={ref}>
			<AppCard
				{...handlers}
				className={cn(
					'flex max-w-full items-center justify-between',
					`transition-transform duration-300 ${isSwiped ? '-translate-x-20' : 'translate-x-0'}`,
					className
				)}
			>
				{leftSideSlot}
				{rightSideSlot}
			</AppCard>

			<div
				className={cn(
					'absolute top-0 right-0 h-full w-[0px] max-w-[0px] overflow-hidden pl-0 transition-all duration-300',
					{
						['w-[80px] max-w-[80px] pl-4']: isSwiped,
					}
				)}
				aria-disabled={!isSwiped}
			>
				<div className={cn('absolute top-0 right-0 flex h-full w-[70px]')}>
					{itemsAtSwipeOn}
				</div>
			</div>
		</div>
	)
}

export { SwipeableCard }
