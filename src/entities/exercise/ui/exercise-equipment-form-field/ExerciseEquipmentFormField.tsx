import { exerciseEquipmentItems } from '../../lib/form-options/exercise-equipment-items'
import { ExerciseForm } from '../../model/types/form.types'
import { Checkbox } from '@/shared/components/ui/checkbox'
import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/shared/components/ui/form'
import { FieldValues, Path } from 'react-hook-form'

interface ExerciseEquipmentFormFieldProps<T extends FieldValues> {
	form: ExerciseForm<T>
	name: Path<T>
}

function ExerciseEquipmentFormField<T extends FieldValues>(
	props: ExerciseEquipmentFormFieldProps<T>
) {
	const { form, name } = props

	return (
		<FormField
			control={form.control}
			name={name}
			render={() => (
				<FormItem>
					<div className='mb-4'>
						<FormLabel className='text-base'>Оборудование</FormLabel>
						<FormDescription>
							Выберите оборудование для упражнения
						</FormDescription>
					</div>
					<div className='grid grid-cols-2 gap-2'>
						{exerciseEquipmentItems.map(item => (
							<FormField
								key={item.id}
								control={form.control}
								name={name}
								render={({ field }) => {
									return (
										<FormItem
											key={item.id}
											className='flex flex-row items-start space-y-0 space-x-3'
										>
											<FormControl>
												<Checkbox
													checked={field.value?.includes(item.id)}
													onCheckedChange={checked => {
														const valueArray = field.value ?? []

														return checked
															? field.onChange([...valueArray, item.id])
															: field.onChange(
																	field?.value?.filter(
																		(value: string) => value !== item.id
																	)
																)
													}}
													aria-label={item.label}
												/>
											</FormControl>
											<FormLabel className='text-sm font-normal'>
												{item.label}
											</FormLabel>
										</FormItem>
									)
								}}
							/>
						))}
					</div>
					<FormMessage />
				</FormItem>
			)}
		/>
	)
}

export { ExerciseEquipmentFormField }
