import { FiltersFormSchema } from '../types/filter-form-schema.types'
import {
	ExerciseCategoriesFormField,
	ExerciseComplexityFormField,
	ExerciseEquipmentFormField,
	useExerciseStore,
} from '@/entities/exercise'
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
import { Form } from '@/shared/components/ui/form'
import { useForm } from 'react-hook-form'

function ExerciseFilters() {
	const filters = useExerciseStore(state => state.filters)
	const setFilters = useExerciseStore(state => state.setFilters)

	const form = useForm<FiltersFormSchema>({
		defaultValues: {
			...filters,
		},
	})

	const onSubmit = (data: FiltersFormSchema) => {
		setFilters(data)
	}

	return (
		<Drawer>
			<DrawerTrigger asChild>
				<Button variant='outline' className='my-10'>
					Фильтры
				</Button>
			</DrawerTrigger>
			<DrawerContent>
				<div className='mx-auto w-full max-w-sm'>
					<DrawerHeader>
						<DrawerTitle>Фильтры</DrawerTitle>
						<DrawerDescription>
							Здесь вы можете применить фильтры к упражнениям
						</DrawerDescription>
					</DrawerHeader>
					<div className='p-0 py-4'>
						<Form {...form}>
							<form
								id='filter-form'
								onSubmit={form.handleSubmit(onSubmit)}
								className='block space-y-3 px-4 md:space-y-6'
							>
								<ExerciseComplexityFormField
									form={form}
									toggleType='multiple'
									name='complexity'
								/>
								<ExerciseCategoriesFormField form={form} name='categories' />
								<ExerciseEquipmentFormField form={form} name='equipment' />
							</form>
						</Form>
					</div>
					<DrawerFooter>
						<DrawerClose asChild>
							<Button form='filter-form' type='submit'>
								Применить
							</Button>
						</DrawerClose>
						<DrawerClose asChild>
							<Button variant='outline'>Закрыть</Button>
						</DrawerClose>
					</DrawerFooter>
				</div>
			</DrawerContent>
		</Drawer>
	)
}

export { ExerciseFilters }
