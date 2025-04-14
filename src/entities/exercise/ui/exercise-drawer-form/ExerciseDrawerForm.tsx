import { exerciseFormSchema } from '../../model/form-schema/exercise-form-schema'
import { ExerciseForm } from '../../model/types/form.types'
import { ExerciseCategoriesFormField } from '../exercise-categories-form-field/ExerciseCategoriesFormField'
import { ExerciseComplexityFormField } from '../exercise-complexity-form-field/ExerciseComplexityFormField'
import { ExerciseEquipmentFormField } from '../exercise-equipment-form-field/ExerciseEquipmentFormField'
import { ExerciseTypeFormField } from '../exercise-type-form-field/ExerciseTypeFormField'
import { Button } from '@/shared/components/ui/button'
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/shared/components/ui/form'
import { Input } from '@/shared/components/ui/input'
import {
	Sheet,
	SheetContent,
	SheetFooter,
	SheetTrigger,
} from '@/shared/components/ui/sheet'
import { Textarea } from '@/shared/components/ui/textarea'
import { Dispatch, ReactNode, SetStateAction } from 'react'
import { z } from 'zod'

interface ExerciseDrawerFormProps {
	form: ExerciseForm<z.infer<typeof exerciseFormSchema>>
	onSubmit: (data: z.infer<typeof exerciseFormSchema>) => void
	triggerSlot: ReactNode
	triggerAsChild?: boolean
	headerSlot: ReactNode
	open: boolean
	setOpen: Dispatch<SetStateAction<boolean>>
}

function ExerciseDrawerForm(props: ExerciseDrawerFormProps) {
	const {
		form,
		headerSlot,
		onSubmit,
		triggerSlot,
		triggerAsChild,
		open,
		setOpen,
	} = props

	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetTrigger
				className='w-full'
				asChild={triggerAsChild}
				onClick={() => setOpen(true)}
			>
				{triggerSlot}
			</SheetTrigger>
			<SheetContent className='w-[100vw] overflow-y-auto md:w-[500px]'>
				{headerSlot}
				<Form {...form}>
					<form
						id='exercise-form'
						onSubmit={form.handleSubmit(onSubmit)}
						className='block space-y-3 px-4 md:space-y-6'
					>
						<FormField
							control={form.control}
							name='name'
							render={({ field }) => (
								<FormItem className='flex flex-wrap items-center justify-between gap-x-4 gap-y-2'>
									<FormLabel htmlFor='name-exercise' className='text-base'>
										Название упражнения
									</FormLabel>
									<Input
										id='name-exercise'
										onChange={field.onChange}
										defaultValue={field.value}
									/>
									<FormMessage />
								</FormItem>
							)}
						/>
						<ExerciseComplexityFormField
							form={form}
							toggleType='single'
							name='complexity'
						/>

						<ExerciseTypeFormField form={form} name='type' />
						<ExerciseCategoriesFormField form={form} name='categories' />
						<ExerciseEquipmentFormField form={form} name='equipment' />

						<FormField
							control={form.control}
							name='description'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Инструкция по выполнению упражнения</FormLabel>
									<FormControl>
										<Textarea placeholder='Инструкция здесь' {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name='links'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Ссылки на инструкцию по выполнению</FormLabel>
									<FormControl>
										<Textarea placeholder='Ссылки здесь' {...field} />
									</FormControl>
									<FormDescription>
										Также можете прикрепить ссылки на фото и видео
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
					</form>
				</Form>

				<SheetFooter>
					<Button
						form='exercise-form'
						className='block w-full rounded-xl py-2 text-lg'
						type='submit'
					>
						СОХРАНИТЬ
					</Button>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	)
}

export { ExerciseDrawerForm }
