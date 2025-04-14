import { exerciseComplexityItems } from '../../lib/form-options/exercise-complexity-items'
import { ExerciseForm } from '../../model/types/form.types'
import {
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/shared/components/ui/form'
import {
	ToggleGroup,
	ToggleGroupItem,
} from '@/shared/components/ui/toggle-group'
import { FieldValues, Path } from 'react-hook-form'

interface ExerciseComplexityFormFieldProps<T extends FieldValues> {
	form: ExerciseForm<T>
	name: Path<T>
	toggleType: 'single' | 'multiple'
}

function ExerciseComplexityFormField<T extends FieldValues>(
	props: ExerciseComplexityFormFieldProps<T>
) {
	const { form, toggleType = 'single', name } = props

	return (
		<FormField
			control={form.control}
			name={name}
			render={({ field }) => (
				<FormItem className='flex flex-wrap items-center justify-between gap-x-4 gap-y-2'>
					<FormLabel className='text-base'>Сложность упражнения</FormLabel>
					<ToggleGroup
						onValueChange={field.onChange}
						defaultValue={field.value}
						type={toggleType}
					>
						{exerciseComplexityItems.map(item => (
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

export { ExerciseComplexityFormField }
