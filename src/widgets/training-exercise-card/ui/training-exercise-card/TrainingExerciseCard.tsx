import { TimeoutCard } from '../timeout-card/TimeoutCard'
import {
	ExerciseCard,
	ExerciseCardText,
	getBgByComplexity,
} from '@/entities/exercise'
import { TrainingExercise, useCurrentTrainingStore } from '@/entities/training'
import { Timer } from '@/features/timer'
import { Button } from '@/shared/components/ui/button'
import { cn } from '@/shared/lib/utils'

interface TrainingExerciseProps {
	exercise: TrainingExercise
}

function TrainingExerciseCard({ exercise }: TrainingExerciseProps) {
	const updateActiveExerciseTime = useCurrentTrainingStore(
		state => state.updateActiveExerciseTime
	)

	const isTimeoutActive = useCurrentTrainingStore(
		state => state.isTimeoutActive
	)

	const isLastExerciseActive = useCurrentTrainingStore(
		state => state.isLastExerciseActive
	)

	const setTrainingCompleted = useCurrentTrainingStore(
		state => state.setIsCompleted
	)

	const setActiveExerciseCompleted = useCurrentTrainingStore(
		state => state.setActiveExerciseCompleted
	)

	const setTrainingTimeEnd = useCurrentTrainingStore(state => state.setTimeEnd)

	const setTimeoutActive = useCurrentTrainingStore(
		state => state.setIsTimeoutActive
	)
	const setTimeoutTime = useCurrentTrainingStore(state => state.setTimeoutTime)

	const onExerciseComplete = () => {
		setActiveExerciseCompleted()

		if (!isLastExerciseActive) {
			setTimeoutTime(15)
			setTimeoutActive(true)
		} else {
			setTrainingCompleted(true)
			setTrainingTimeEnd(Date.now().toString())
		}
	}

	if (isTimeoutActive) {
		return <TimeoutCard />
	}

	return (
		<div className='flex h-full w-full flex-col items-center justify-between gap-6'>
			<div className='flex w-full flex-col items-center gap-10'>
				<ExerciseCard
					className={cn('w-full', getBgByComplexity(exercise.complexity))}
				>
					<ExerciseCardText exercise={exercise} />
				</ExerciseCard>
				{['weight', 'repeat'].includes(exercise.type) && (
					<h1 className='text-4xl font-bold'>
						{exercise.type === 'weight' && exercise.weight + 'кг'}
						{exercise.type === 'repeat' && exercise.repeat + ' повт.'}
					</h1>
				)}

				{exercise.type === 'time' && (
					<Timer
						seconds={Number(exercise.time)}
						onCountDown={updateActiveExerciseTime}
						onComplete={onExerciseComplete}
					/>
				)}

				<p>{exercise.description}</p>

				{exercise.links && <p>{exercise.links}</p>}
			</div>
			<Button
				className='w-full rounded-xl py-4 text-xl'
				onClick={onExerciseComplete}
			>
				ВЫПОЛНЕНО
			</Button>
		</div>
	)
}

export { TrainingExerciseCard }
