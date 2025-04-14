import { Training, TrainingExercise } from './training.types'

type TrainingStoreState = {
	items: Training[]
	trainingExercises: TrainingExercise[]
}

type TrainingStoreActions = {
	addItem: (item: Training) => void
	deleteItem: (id: string) => void

	addTrainingExercise: (exercise: TrainingExercise) => void
	deleteTrainingExerciseByIndex: (index: number) => void
	updateTrainingExerciseByIndex: (
		index: number,
		payload: Partial<TrainingExercise>
	) => void
	setTrainingExercises: (exercises?: TrainingExercise[]) => void
	setItems: (items: Training[]) => void
}

export type TrainingStore = TrainingStoreState & TrainingStoreActions
