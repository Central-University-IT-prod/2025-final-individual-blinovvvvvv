import { Achievement } from '../model/types/achievement.types'
import { AppCard } from '@/shared/components/ui/app-card'
import { Progress } from '@/shared/components/ui/progress'

interface AchievementCardProps {
	achievement: Achievement
	progress: number
	max: number
}

function AchievementCard(props: AchievementCardProps) {
	const { achievement, progress, max } = props

	return (
		<AppCard className='flex flex-col justify-between gap-4 silver-gradient lg:flex-row lg:items-center'>
			<div className='space-y-1'>
				<p className='text-2xl font-bold text-[#CACACA] uppercase'>
					{achievement.name}
				</p>
				<p className='font-medium text-[#CACACA]'>{achievement.label}</p>
				<div className='mt-4'>
					<p className='text-sm font-medium select-none'>Прогресс</p>
					<Progress
						aria-label='progress'
						className='mt-1.5'
						value={progress}
						max={max}
					/>
				</div>
			</div>

			{achievement.isAchieved && (
				<p className='self-end rounded-xl px-4 py-2 text-lg font-semibold text-black green-gradient lg:self-center'>
					Получено
				</p>
			)}
		</AppCard>
	)
}

export { AchievementCard }
