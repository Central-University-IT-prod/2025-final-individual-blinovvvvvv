import { ExerciseEquipment } from '../../model/types/exercise.types'

export interface EquipmentItem {
	id: ExerciseEquipment
	label: string
}

export const exerciseEquipmentItems: EquipmentItem[] = [
	{
		id: 'dumbbells',
		label: 'Гантели',
	},
	{
		id: 'carpet',
		label: 'Коврик',
	},
	{
		id: 'bench',
		label: 'Скамья',
	},
	{
		id: 'barbell',
		label: 'Штанга',
	},
	{
		id: 'pancakes',
		label: 'Блины',
	},
	{
		id: 'treadmill',
		label: 'Беговая дорожка',
	},
] as const
