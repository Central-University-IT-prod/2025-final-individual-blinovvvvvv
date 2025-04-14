import { TrainingCardText, useTrainingStore } from '@/entities/training'
import { DeleteTraining } from '@/features/delete-training'
import { PlayTraining } from '@/features/play-training'
import { PageTitle } from '@/shared/components/ui/page-title'
import { useSwipe } from '@/shared/lib/hooks/use-swipe'
import { cn } from '@/shared/lib/utils'
import { CreateTraining } from '@/widgets/create-training'
import { SwipeableCard } from '@/widgets/swipeable-card'

function TrainingsPage() {
	const items = useTrainingStore(state => state.items)

	const { onCloseSwipe, onOpenSwipe, swipedIndex } = useSwipe()

	return (
		<div className='mx-auto max-w-96 md:ml-16'>
			<PageTitle>Тренировки</PageTitle>
			<CreateTraining />

			<div className='mt-10 flex flex-col gap-4'>
				{items.map(({ id, name, bg }) => (
					<SwipeableCard
						className={cn('transition-all', bg)}
						leftSideSlot={
							<TrainingCardText>{name.toUpperCase()}</TrainingCardText>
						}
						rightSideSlot={<PlayTraining id={id} />}
						onSwipedLeft={() => onOpenSwipe(id)}
						onSwipedRight={onCloseSwipe}
						isSwiped={swipedIndex === id}
						itemsAtSwipeOn={<DeleteTraining id={id} />}
						key={id}
					/>
				))}
			</div>
		</div>
	)
}

export { TrainingsPage }
