import { ExerciseType } from '../../model/types/exercise.types'

interface TypeItem {
	id: ExerciseType
	label: string
}

export const exerciseTypeItems: TypeItem[] = [
	{
		id: 'repeat',
		label: 'Повторения',
	},
	{
		id: 'weight',
		label: 'Вес',
	},
	{
		id: 'time',
		label: 'Время',
	},
] as const
