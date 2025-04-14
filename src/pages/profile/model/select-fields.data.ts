import { formSchema } from './schema/form-schema'
import { goalsList, heightDigits, weightDigits } from '@/entities/profile'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const schemaKeys = formSchema.keyof()._def.values

interface SelectField {
	name: (typeof schemaKeys)[number]
	label: string
	placeholder: string
	options: string[]
	triggerClassName?: string
}

export const selectFields: SelectField[] = [
	{
		name: 'weight',
		label: 'ВЕС',
		placeholder: 'Выберите вес',
		options: weightDigits,
	},
	{
		name: 'height',
		label: 'РОСТ',
		placeholder: 'Выберите рост',
		options: heightDigits,
	},
	{
		name: 'goal',
		label: 'ЦЕЛЬ ТРЕНИРОВОК',
		placeholder: 'Выберите цель',
		options: goalsList,
		triggerClassName: 'max-w-none',
	},
]
