import {
	ExerciseCardText,
	getBgByComplexity,
	useExerciseStore,
} from '@/entities/exercise'
import { CreateExercise } from '@/features/create-exercise'
import { DeleteExercise } from '@/features/delete-exercise'
import { EditExerciseButton } from '@/features/edit-exercise'
import { ExerciseFilters } from '@/features/exercise-filters'
import { PageTitle } from '@/shared/components/ui/page-title'
import { useSwipe } from '@/shared/lib/hooks/use-swipe'
import { SwipeableCard } from '@/widgets/swipeable-card'

function ExercisesPage() {
	const { filteredItems } = useExerciseStore()

	const { onCloseSwipe, onOpenSwipe, swipedIndex } = useSwipe()

	return (
		<div className='mx-auto max-w-96 md:ml-16'>
			<PageTitle>Упражнения</PageTitle>
			<CreateExercise />

			<ExerciseFilters />
			<div className='flex flex-col gap-4'>
				{filteredItems().map(exercise => (
					<SwipeableCard
						className={getBgByComplexity(exercise.complexity)}
						leftSideSlot={<ExerciseCardText exercise={exercise} />}
						rightSideSlot={<EditExerciseButton id={exercise.id} />}
						onSwipedLeft={() => onOpenSwipe(exercise.id)}
						onSwipedRight={onCloseSwipe}
						isSwiped={swipedIndex === exercise.id}
						itemsAtSwipeOn={<DeleteExercise id={exercise.id} />}
						key={exercise.id}
					/>
				))}
			</div>
		</div>
	)
}

export { ExercisesPage }
