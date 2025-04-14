import { Achievement } from '../types/achievement.types'

export const achievementsItems: Achievement[] = [
	{
		isAchieved: false,
		label: 'Поднять в сумме более 500кг',
		name: 'Титан',
		max: 500,
	},
	{
		isAchieved: false,
		label: 'Выполнить упражнения на время в сумме больше 60 мин.',
		name: 'David Goggins',
		max: 60 * 60,
	},
	{
		isAchieved: false,
		label: 'Выполнить более 228 повторений',
		name: 'Сигма',
		max: 228,
	},
	{
		isAchieved: false,
		label: 'Выполнить более 52 упражнений',
		name: 'Петербуржец',
		max: 52,
	},
	{
		isAchieved: false,
		label: 'Провести в тренировках более 10 часов',
		name: 'Крутыш',
		max: 10 * 60 * 60,
	},
]
