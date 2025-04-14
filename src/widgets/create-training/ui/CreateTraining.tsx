import { getRandomBg } from '../lib/get-random-bg'
import { transformTrainingExercises } from '../lib/transform/transform-training-exercises'
import { createTrainingFormSchema } from '../model/schema/create-training-form-schema'
import { ExerciseCardText, getBgByComplexity } from '@/entities/exercise'
import { useTrainingStore } from '@/entities/training'
import { AddExerciseToTraining } from '@/features/add-exercise-to-training'
import { AutoAddExercisesToTraining } from '@/features/auto-add-exercise-to-training'
import { DeleteExercise } from '@/features/delete-exercise'
import { ExerciseCounter } from '@/features/exercise-counter'
import { usePlayTraining } from '@/features/play-training'
import { Button } from '@/shared/components/ui/button'
import { CreateCard } from '@/shared/components/ui/create-card'
import {
	Drawer,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from '@/shared/components/ui/drawer'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/shared/components/ui/form'
import { Input } from '@/shared/components/ui/input'
import { useDisclosure } from '@/shared/lib/hooks/use-disclosure'
import { useSwipe } from '@/shared/lib/hooks/use-swipe'
import { SwipeableCard } from '@/widgets/swipeable-card'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { toast } from 'sonner'
import { Drawer as VaulDrawer } from 'vaul'
import { z } from 'zod'

function CreateTraining() {
	const navigate = useNavigate()

	const { open, setOpen } = useDisclosure()

	const { onCloseSwipe, onOpenSwipe, swipedIndex } = useSwipe()

	const addTraining = useTrainingStore(state => state.addItem)
	const setTrainingExercises = useTrainingStore(
		state => state.setTrainingExercises
	)
	const updateTrainingExerciseByIndex = useTrainingStore(
		state => state.updateTrainingExerciseByIndex
	)
	const trainingExercises = useTrainingStore(state => state.trainingExercises)
	const deleteTrainingExerciseByIndex = useTrainingStore(
		state => state.deleteTrainingExerciseByIndex
	)

	const form = useForm<z.infer<typeof createTrainingFormSchema>>({
		resolver: zodResolver(createTrainingFormSchema),
		mode: 'onSubmit',
		defaultValues: {
			name: '',
		},
	})
	const name = form.watch('name')
	const dataValid = name && trainingExercises.length > 0

	const onClose = () => {
		form.reset()
		setTimeout(() => form.clearErrors(), 0)
		setTrainingExercises([])
		setOpen(false)
	}

	const randomId = Math.random().toString()
	const transformedExercises = transformTrainingExercises(trainingExercises)

	const onSaveClick = () => {
		if (dataValid) {
			addTraining({
				id: randomId,
				bg: getRandomBg(),
				name,
				exercises: transformedExercises,
			})

			onClose()
			toast('Тренировка создана')
		}
	}

	const playTraining = usePlayTraining({
		exercises: transformedExercises,
		name,
		id: randomId,
		navigate,
	})

	const onRunClick = () => {
		if (dataValid) {
			onClose()
			playTraining()
		}
	}

	return (
		<Drawer open={open} onOpenChange={setOpen}>
			<DrawerTrigger className='w-full'>
				<CreateCard>Создать тренировку</CreateCard>
			</DrawerTrigger>
			<DrawerContent>
				<div className='w-full overflow-y-auto'>
					<div className='mx-auto px-4 md:max-w-sm md:px-0'>
						<DrawerHeader className='mb-4 px-0'>
							<DrawerTitle className='text-lg'>Создать тренировку</DrawerTitle>
							<DrawerDescription className='text-base'>
								Добавьте упражнения вручную или воспользуйтесь автоподбором по
								категории
							</DrawerDescription>
						</DrawerHeader>

						<div className='mb-8 flex flex-col gap-4'>
							<Form {...form}>
								<form
									onSubmit={form.handleSubmit(() => {})}
									className='flex flex-col gap-2'
									id='create-training'
								>
									<FormField
										control={form.control}
										name='name'
										render={({ field }) => (
											<FormItem>
												<FormLabel htmlFor='name-input'>Название</FormLabel>
												<FormControl>
													<Input
														id='name-input'
														placeholder='Название тренировки'
														defaultValue={field.value}
														onChange={field.onChange}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
								</form>
							</Form>

							<VaulDrawer.NestedRoot>
								<AutoAddExercisesToTraining />
							</VaulDrawer.NestedRoot>

							<VaulDrawer.NestedRoot>
								<AddExerciseToTraining />
							</VaulDrawer.NestedRoot>
						</div>

						<div>
							{trainingExercises.map((exercise, index) => {
								const onDelete = () => {
									deleteTrainingExerciseByIndex(index)
									toast('Упражнение удалено')
								}
								const onUpdate = (value: number) => {
									updateTrainingExerciseByIndex(index, {
										[exercise.type]: value,
									})
								}
								const onSwipedLeft = () => onOpenSwipe(index)
								const isSwiped = swipedIndex === index

								return (
									<SwipeableCard
										className={getBgByComplexity(exercise.complexity)}
										leftSideSlot={<ExerciseCardText exercise={exercise} />}
										rightSideSlot={
											<ExerciseCounter
												onUpdate={onUpdate}
												exercise={exercise}
											/>
										}
										onSwipedLeft={onSwipedLeft}
										onSwipedRight={onCloseSwipe}
										isSwiped={isSwiped}
										itemsAtSwipeOn={
											<DeleteExercise id={exercise.id} onDelete={onDelete} />
										}
										key={'exercise' + index}
									/>
								)
							})}
						</div>

						<DrawerFooter className='grid grid-cols-2 justify-between gap-4 px-0'>
							<Button
								form='create-training'
								type='submit'
								className='rounded-xl py-4 text-xl text-white silver-gradient'
								onClick={onRunClick}
							>
								ЗАПУСТИТЬ
							</Button>

							<Button
								form='create-training'
								type='submit'
								className='rounded-xl py-4 text-xl'
								onClick={onSaveClick}
							>
								СОХРАНИТЬ
							</Button>
						</DrawerFooter>
					</div>
				</div>
			</DrawerContent>
		</Drawer>
	)
}

export { CreateTraining }
