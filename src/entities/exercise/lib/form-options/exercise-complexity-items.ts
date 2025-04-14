import { ExerciseComplexity } from '../../model/types/exercise.types'

interface ComplexityItem {
	id: ExerciseComplexity
	label: string
}

export const exerciseComplexityItems: ComplexityItem[] = [
	{
		id: 'easy',
		label: 'Легко',
	},
	{
		id: 'medium',
		label: 'Средне',
	},
	{
		id: 'hard',
		label: 'Сложно',
	},
] as const
