import { checkAchievements } from '../model/check/check-achievements'
import { useAchievementStore } from '@/entities/achievement'
import { useEffect } from 'react'

function AchievementProgressListener() {
	useEffect(() => {
		const unsubscribe = useAchievementStore.subscribe(() => {
			checkAchievements()
		})

		return () => unsubscribe()
	}, [])

	return null
}

export { AchievementProgressListener }
