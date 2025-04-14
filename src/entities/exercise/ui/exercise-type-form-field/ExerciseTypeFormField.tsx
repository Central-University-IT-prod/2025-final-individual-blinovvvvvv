import { exerciseTypeItems } from '../../lib/form-options/exercise-type-items'
import { ExerciseForm } from '../../model/types/form.types'
import {
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/shared/components/ui/form'
import { ToggleGroupItem } from '@/shared/components/ui/toggle-group'
import { ToggleGroup } from '@radix-ui/react-toggle-group'
import { FieldValues, Path } from 'react-hook-form'

interface ExerciseTypeFormFieldProps<T extends FieldValues> {
	form: ExerciseForm<T>
	name: Path<T>
}

function ExerciseTypeFormField<T extends FieldValues>(
	props: ExerciseTypeFormFieldProps<T>
) {
	const { form, name } = props

	return (
		<FormField
			control={form.control}
			name={name}
			render={({ field }) => (
				<FormItem className='flex flex-wrap items-center justify-between gap-x-4 gap-y-2'>
					<FormLabel className='text-base'>Тип упражнения</FormLabel>
					<ToggleGroup
						onValueChange={field.onChange}
						defaultValue={field.value}
						type='single'
					>
						{exerciseTypeItems.map(item => (
							<ToggleGroupItem
								value={item.id}
								aria-label={`Выбрать ${item.label}`}
								key={item.id}
							>
								{item.label}
							</ToggleGroupItem>
						))}
					</ToggleGroup>
					<FormMessage />
				</FormItem>
			)}
		/>
	)
}

export { ExerciseTypeFormField }
