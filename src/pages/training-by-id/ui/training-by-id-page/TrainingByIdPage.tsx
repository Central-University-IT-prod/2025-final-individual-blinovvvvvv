import { FinishCard } from '../finish-card/FinishCard'
import { useCurrentTrainingStore } from '@/entities/training'
import { EndTraining } from '@/features/end-training'
import { Container } from '@/shared/components/ui/container'
import { TrainingExerciseCard } from '@/widgets/training-exercise-card'

function TrainingByIdPage() {
	const trainingName = useCurrentTrainingStore(state => state.name)
	const currentExercise = useCurrentTrainingStore(state => state.activeExercise)
	const exercise = useCurrentTrainingStore(state => state.exercises)[
		currentExercise
	]
	const trainingIsCompleted = useCurrentTrainingStore(
		state => state.isCompleted
	)

	if (!exercise) return null

	if (trainingIsCompleted)
		return (
			<main>
				<FinishCard />
			</main>
		)

	return (
		<main>
			<Container className='mx-auto flex h-screen max-w-sm flex-col items-center'>
				<EndTraining />
				<p className='mt-6 mb-20 text-xl font-medium text-[#CACACA]'>
					{trainingName}
				</p>
				<TrainingExerciseCard exercise={exercise} />
			</Container>
		</main>
	)
}

export { TrainingByIdPage }
