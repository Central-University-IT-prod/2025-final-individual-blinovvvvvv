import { TrainingExercise, useCurrentTrainingStore } from '@/entities/training'
import { routes } from '@/shared/routes/routes'
import { useNavigate } from 'react-router'

interface UsePlayTrainingProps {
	id?: string
	exercises?: TrainingExercise[]
	name?: string
	navigate: ReturnType<typeof useNavigate>
}

export function usePlayTraining({
	exercises,
	id,
	name,
	navigate,
}: UsePlayTrainingProps) {
	const setCurrentTraining = useCurrentTrainingStore(state => state.setState)

	function playTraining() {
		setCurrentTraining({
			timeStart: Date.now().toString(),
			timeEnd: '',
			exercises,
			name,
			isLastExerciseActive: exercises?.length === 1,
			activeExercise: 0,
			isCompleted: false,
			isRewardReceived: false,
		})

		navigate(routes.getTrainingById(id || ''))
	}

	return playTraining
}
