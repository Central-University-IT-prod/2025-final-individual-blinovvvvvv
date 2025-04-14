import { Achievement, AchievementName } from './achievement.types'

type AchievementStoreState = {
	totalTrainingTime: number
	totalRepeats: number
	totalWeight: number
	totalTime: number
	totalExercisesCompleted: number
	items: Achievement[]
}

type AchievementStoreActions = {
	addTotalTrainingTime: (totalTrainingTime: number) => void
	addTotalRepeats: (totalRepeats: number) => void
	addTotalWeight: (totalWeight: number) => void
	addTotalTime: (totalTime: number) => void
	addTotalExercisesCompleted: (totalExercisesCompleted: number) => void
	complete: (name: AchievementName) => void
}

export type AchievementStore = AchievementStoreState & AchievementStoreActions
