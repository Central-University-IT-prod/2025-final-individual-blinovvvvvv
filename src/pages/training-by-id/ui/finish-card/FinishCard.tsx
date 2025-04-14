import { useAchievementStore } from '@/entities/achievement'
import { useProfileStore } from '@/entities/profile'
import { useCurrentTrainingStore } from '@/entities/training'
import { Button } from '@/shared/components/ui/button'
import { Container } from '@/shared/components/ui/container'
import { PageTitle } from '@/shared/components/ui/page-title'
import { formatTimeDifference } from '@/shared/lib/utils'
import { routes } from '@/shared/routes/routes'
import { useEffect } from 'react'
import { useNavigate } from 'react-router'

function FinishCard() {
	const navigate = useNavigate()

	const timeStart = useCurrentTrainingStore(state => state.timeStart)
	const timeEnd = useCurrentTrainingStore(state => state.timeEnd)

	const { timeDifference, seconds } = formatTimeDifference(timeStart, timeEnd)
	const decimalSeconds = Math.floor(seconds / 60)

	const {
		addTotalExercisesCompleted,
		addTotalRepeats,
		addTotalTime,
		addTotalWeight,
		addTotalTrainingTime,
	} = useAchievementStore()

	const completedExercises = useCurrentTrainingStore(
		state => state.exercises
	).filter(exercise => exercise.isCompleted)

	const isRewardReceived = useCurrentTrainingStore(
		state => state.isRewardReceived
	)
	const setIsRewardReceived = useCurrentTrainingStore(
		state => state.setIsRewardReceived
	)

	const addBalance = useProfileStore(state => state.addBalance)
	const addExperience = useProfileStore(state => state.addExperience)

	// 1 сигмик за минуту тренировки
	const balanceReward = decimalSeconds
	// 10 опыта за минуту тренировки
	const experienceReward = decimalSeconds * 10

	useEffect(() => {
		if (!isRewardReceived) {
			if (seconds > 60) {
				addBalance(balanceReward)
				addExperience(experienceReward)

				addTotalTrainingTime(decimalSeconds)
				addTotalExercisesCompleted(completedExercises.length)

				completedExercises.forEach(({ type, repeat, time, weight }) => {
					console.log(repeat)
					if (type === 'repeat') addTotalRepeats(repeat || 0)
					if (type === 'time') addTotalTime(time || 0)
					if (type === 'weight') addTotalWeight(weight || 0)
				})
			}

			setIsRewardReceived(true)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<Container className='mx-auto flex h-screen max-w-sm flex-col justify-between gap-8'>
			<div className='flex flex-col'>
				<PageTitle className='mt-12 self-center'>
					Тренировка завершена 🎉
				</PageTitle>

				<div className='flex flex-col items-center gap-10'>
					<div className='space-y-4'>
						<p className='text-xl font-medium text-[#CACACA]'>
							Время тренировки: {timeDifference}
						</p>
						<p className='text-xl font-medium text-[#CACACA]'>
							Выполнено упражнений: {completedExercises.length}
						</p>
					</div>
					<div className='space-y-2 self-center'>
						<p className='text-xl font-bold text-[#636363]'>#СИГМИКИ</p>
						<div className='truncate rounded-3xl px-6 py-5 text-center font-inter text-3xl font-extrabold text-black green-gradient md:rounded-4xl md:text-5xl'>
							+{balanceReward}
						</div>
					</div>
					<div className='space-y-2 self-center'>
						<p className='text-xl font-bold text-[#636363]'>#ОПЫТ</p>
						<div className='truncate rounded-3xl px-6 py-5 text-center font-inter text-3xl font-extrabold text-black cyan-gradient md:rounded-4xl md:text-5xl'>
							+{experienceReward}
						</div>
					</div>
				</div>
			</div>

			<Button
				onClick={() => navigate(routes.trainings)}
				className='w-full rounded-xl py-4 text-xl'
			>
				К ТРЕНИРОВКАМ
			</Button>
		</Container>
	)
}

export { FinishCard }
