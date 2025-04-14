import {
	AchievementName,
	achievementsItems,
	useAchievementStore,
} from '@/entities/achievement'
import { normalizeNumbers } from '@/shared/lib/utils'

function getProgress(achievementName: AchievementName) {
	const achievementStore = useAchievementStore.getState()

	switch (achievementName) {
		case 'Титан':
			return achievementStore.totalWeight
		case 'David Goggins':
			return achievementStore.totalTime
		case 'Сигма':
			return achievementStore.totalRepeats
		case 'Петербуржец':
			return achievementStore.totalExercisesCompleted
		case 'Крутыш':
			return achievementStore.totalTrainingTime
	}
}

export function getAchievementProgress(achievementName: AchievementName) {
	const achievement = achievementsItems.find(
		achievement => achievement.name === achievementName
	)

	const progress = getProgress(achievementName)

	const [normalizedProgress, normalizedMax] = normalizeNumbers(
		progress,
		achievement?.max || 0
	)

	return {
		progress: normalizedProgress,
		max: normalizedMax,
	}
}
