import { usePlayTraining } from '../model/hooks/use-play-training'
import {
	ExerciseCard,
	ExerciseCardText,
	getBgByComplexity,
} from '@/entities/exercise'
import { useTrainingStore } from '@/entities/training'
import { Button } from '@/shared/components/ui/button'
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from '@/shared/components/ui/drawer'
import { Play } from 'lucide-react'
import { useNavigate } from 'react-router'

interface PlayTrainingProps {
	id: string
}

function PlayTraining({ id }: PlayTrainingProps) {
	const navigate = useNavigate()

	const training = useTrainingStore(state => state.items).find(
		item => item.id === id
	)

	const playTraining = usePlayTraining({
		exercises: training?.exercises,
		name: training?.name,
		id: training?.id,
		navigate,
	})

	const onClick = () => {
		playTraining()
	}

	if (!training) return null

	return (
		<Drawer>
			<DrawerTrigger asChild>
				<Button
					className='size-14 rounded-[1.25rem] bg-[rgba(217,217,217,0.65)] text-black transition-colors'
					aria-label='Запустить тренировку'
				>
					<Play fill='currentColor' aria-label='Запустить тренировку' />
				</Button>
			</DrawerTrigger>
			<DrawerContent>
				<div className='w-full overflow-y-auto'>
					<div className='mx-auto px-4 md:max-w-sm md:px-0'>
						<DrawerHeader className='mb-4 px-0'>
							<DrawerTitle className='text-lg'>{training.name}</DrawerTitle>
							<DrawerDescription className='text-base'>
								Упражнения в этой тренировке
							</DrawerDescription>
						</DrawerHeader>

						<div className='mb-6 flex flex-col gap-4'>
							{training.exercises.map((exercise, index) => (
								<ExerciseCard
									className={getBgByComplexity(exercise.complexity)}
									key={exercise.id + index}
								>
									<ExerciseCardText exercise={exercise} />
									<p className='text-xl font-bold text-black'>
										{exercise.type === 'repeat' && exercise.repeat + ' повт.'}
										{exercise.type === 'weight' && exercise.weight + ' кг'}
										{exercise.type === 'time' &&
											(exercise.time || 0) / 60 + ' мин.'}
									</p>
								</ExerciseCard>
							))}
						</div>

						<DrawerFooter className='grid grid-cols-2 justify-between gap-4 px-0'>
							<DrawerClose asChild>
								<Button className='rounded-xl py-4 text-xl text-white silver-gradient'>
									ЗАКРЫТЬ
								</Button>
							</DrawerClose>

							<DrawerClose asChild>
								<Button className='rounded-xl py-4 text-xl' onClick={onClick}>
									ЗАПУСК
								</Button>
							</DrawerClose>
						</DrawerFooter>
					</div>
				</div>
			</DrawerContent>
		</Drawer>
	)
}

export { PlayTraining }
