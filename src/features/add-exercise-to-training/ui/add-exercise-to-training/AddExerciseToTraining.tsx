import { AddExerciseButton } from '../add-exercise-button/AddExerciseButton'
import {
	ExerciseCard,
	ExerciseCardText,
	getBgByComplexity,
	useExerciseStore,
} from '@/entities/exercise'
import { Button } from '@/shared/components/ui/button'
import { CreateCard } from '@/shared/components/ui/create-card'
import {
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from '@/shared/components/ui/drawer'

function AddExerciseToTraining() {
	const exercises = useExerciseStore(state => state.items)

	return (
		<>
			<DrawerTrigger className='w-full'>
				<CreateCard>Добавить упражнения</CreateCard>
			</DrawerTrigger>
			<DrawerContent>
				<div className='w-full overflow-y-auto'>
					<div className='mx-auto px-4 md:max-w-sm md:px-0'>
						<DrawerHeader className='mb-5 px-0'>
							<DrawerTitle className='text-lg'>
								Добавить упражнение в тренировку
							</DrawerTitle>
							<DrawerDescription className='text-base'>
								Добавьте упражнения в новую тренировку
							</DrawerDescription>
						</DrawerHeader>

						<div className='mb-6 flex flex-col gap-2'>
							{exercises.map(exercise => (
								<ExerciseCard
									key={exercise.id}
									className={getBgByComplexity(exercise.complexity)}
								>
									<ExerciseCardText exercise={exercise} />
									<AddExerciseButton
										exercise={{
											...exercise,
											isCompleted: false,
										}}
									/>
								</ExerciseCard>
							))}
						</div>

						<DrawerFooter className='grid grid-cols-1 justify-between gap-4 px-0'>
							<DrawerClose asChild>
								<Button className='rounded-xl py-4 text-xl text-white silver-gradient'>
									ЗАКРЫТЬ
								</Button>
							</DrawerClose>
						</DrawerFooter>
					</div>
				</div>
			</DrawerContent>
		</>
	)
}

export { AddExerciseToTraining }
