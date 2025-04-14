import { TrainingExercise } from '@/entities/training'

export function transformTrainingExercises(
	trainingExercises: TrainingExercise[]
) {
	return trainingExercises.map(trainingExercise => {
		if (!trainingExercise.time) return trainingExercise

		return {
			...trainingExercise,
			// min -> sec
			time: trainingExercise.time * 60,
		}
	})
}
