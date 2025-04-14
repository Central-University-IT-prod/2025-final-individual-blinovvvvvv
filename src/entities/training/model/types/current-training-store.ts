import { TrainingExercise } from './training.types'

type CurrentTrainingStoreState = {
	timeStart: string
	timeEnd: string
	exercises: TrainingExercise[]
	name: string
	activeExercise: number
	isCompleted: boolean
	isTimeoutActive: boolean
	timeoutTime: number
	isLastExerciseActive: boolean
	isRewardReceived: boolean
}

type CurrentTrainingStoreActions = {
	setTimeStart: (timeStart: string) => void
	setTimeEnd: (timeEnd: string) => void
	setExercises: (exercises: TrainingExercise[]) => void
	setName: (name: string) => void
	setActiveExercise: (exerciseIndex: number) => void
	setNextActiveExercise: () => void
	setIsCompleted: (isCompleted: boolean) => void
	setIsTimeoutActive: (isTimeoutActive: boolean) => void
	setTimeoutTime: (timeoutTime: number) => void
	updateActiveExerciseTime: (time: number) => void
	setIsRewardReceived: (isRewardReceived: boolean) => void
	setActiveExerciseCompleted: () => void

	setState: (state: Partial<CurrentTrainingStore>) => void
}

export type CurrentTrainingStore = CurrentTrainingStoreState &
	CurrentTrainingStoreActions
