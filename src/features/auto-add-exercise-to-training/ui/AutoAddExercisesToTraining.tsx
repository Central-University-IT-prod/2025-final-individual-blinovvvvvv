import {
	ExerciseCard,
	ExerciseCategory,
	exerciseCategoriesItems,
	useExerciseStore,
} from '@/entities/exercise'
import {
	calculateRecommendedExercises,
	useProfileStore,
} from '@/entities/profile'
import { useTrainingStore } from '@/entities/training'
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
import { transformLabel } from '@/shared/lib/label'

function AutoAddExercisesToTraining() {
	const weight = useProfileStore(state => state.weight)
	const height = useProfileStore(state => state.height)

	const addTrainingExercise = useTrainingStore(
		state => state.addTrainingExercise
	)
	const exercises = useExerciseStore(state => state.items)
	const categories = Array.from(
		new Set(exercises.flatMap(exercise => exercise.categories))
	)

	const onSelect = (category: ExerciseCategory) => {
		const exercisesToAdd = exercises.filter(exercise =>
			exercise.categories.includes(category)
		)
		exercisesToAdd
			.slice(0, calculateRecommendedExercises(weight, height))
			.forEach(exercise =>
				addTrainingExercise({
					...exercise,
					isCompleted: false,
				})
			)
	}

	return (
		<>
			<DrawerTrigger className='w-full'>
				<CreateCard className='text-black white-gradient'>
					Автоподбор по категории
				</CreateCard>
			</DrawerTrigger>
			<DrawerContent>
				<div className='w-full overflow-y-auto'>
					<div className='mx-auto px-4 md:max-w-sm md:px-0'>
						<DrawerHeader className='mb-5 px-0'>
							<DrawerTitle className='text-lg'>
								Выбрать автоматически
							</DrawerTitle>
							<DrawerDescription className='text-base'>
								Выберите категорию для автоподбора упражнений
							</DrawerDescription>
						</DrawerHeader>

						<div className='mb-6 flex flex-col gap-2'>
							{categories.map(category => (
								<ExerciseCard className='silver-gradient' key={category}>
									<p>
										{transformLabel(
											exerciseCategoriesItems.find(eC => eC.id === category)
												?.label
										)}
									</p>
									<DrawerClose asChild>
										<Button onClick={() => onSelect(category)}>Выбрать</Button>
									</DrawerClose>
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

export { AutoAddExercisesToTraining }
