import { AchievementCard, useAchievementStore } from '@/entities/achievement'
import { getAchievementProgress } from '@/features/achievement-progress'
import { PageTitle } from '@/shared/components/ui/page-title'

function AchievementsTab() {
	const achievements = useAchievementStore(state => state.items)
	return (
		<>
			<PageTitle>Достижения</PageTitle>
			<div className='flex flex-col gap-4'>
				{achievements.map(achievement => {
					const { progress, max } = getAchievementProgress(achievement.name)

					return (
						<AchievementCard
							achievement={achievement}
							key={achievement.name}
							progress={progress}
							max={max}
						/>
					)
				})}
			</div>
		</>
	)
}

export { AchievementsTab }
