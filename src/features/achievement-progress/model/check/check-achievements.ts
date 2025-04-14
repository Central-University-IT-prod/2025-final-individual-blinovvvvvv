import {
	AchievementName,
	achievementsItems,
	useAchievementStore,
} from '@/entities/achievement'
import { toast } from 'sonner'

export function checkAchievements() {
	const {
		totalExercisesCompleted,
		totalRepeats,
		totalTime,
		totalWeight,
		totalTrainingTime,
		items,
		complete,
	} = useAchievementStore.getState()

	const checkAndComplete = (name: AchievementName, condition: boolean) => {
		if (!items.find(ach => ach.name === name)?.isAchieved && condition) {
			complete(name)

			toast(`Достижение разблокировано: ${name} 🎉`)
		}
	}

	checkAndComplete('Титан', totalWeight > achievementsItems[0].max)
	checkAndComplete('David Goggins', totalTime > achievementsItems[1].max)
	checkAndComplete('Сигма', totalRepeats > achievementsItems[2].max)
	checkAndComplete(
		'Петербуржец',
		totalExercisesCompleted > achievementsItems[3].max
	)
	checkAndComplete('Крутыш', totalTrainingTime > achievementsItems[4].max)
}
