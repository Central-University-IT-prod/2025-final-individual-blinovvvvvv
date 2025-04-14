import { ExerciseCategory } from '../../model/types/exercise.types'

export interface CategoryItem {
	id: ExerciseCategory
	label: string
}

export const exerciseCategoriesItems: CategoryItem[] = [
	{
		id: 'legs',
		label: 'Ноги',
	},
	{
		id: 'shoulders',
		label: 'Плечи',
	},
	{
		id: 'arms',
		label: 'Руки',
	},
	{
		id: 'back',
		label: 'Спина',
	},
	{
		id: 'chest',
		label: 'Грудь',
	},
	{
		id: 'abs',
		label: 'Пресс',
	},
] as const
