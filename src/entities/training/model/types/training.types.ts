import { Exercise } from '@/entities/exercise/@x/training'

export interface TrainingExercise extends Exercise {
	repeat?: number
	time?: number
	weight?: number
	isCompleted: boolean
}

export interface Training {
	id: string
	name: string
	bg: string
	exercises: TrainingExercise[]
}
