import { TrainingExercise, useTrainingStore } from '@/entities/training'
import { Button } from '@/shared/components/ui/button'
import { toast } from 'sonner'

interface AddExerciseButtonProps {
	exercise: TrainingExercise
}

function AddExerciseButton({ exercise }: AddExerciseButtonProps) {
	const addTrainingExercise = useTrainingStore(
		state => state.addTrainingExercise
	)

	const onExerciseAdd = (exercise: TrainingExercise) => {
		addTrainingExercise({
			...exercise,
		})
		toast('Упражнение добавлено')
	}

	const onClick = () => onExerciseAdd(exercise)

	return <Button onClick={onClick}>Добавить</Button>
}

export { AddExerciseButton }
