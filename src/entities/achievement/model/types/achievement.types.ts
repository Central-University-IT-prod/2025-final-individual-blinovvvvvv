export type AchievementName =
	| 'Титан'
	| 'David Goggins'
	| 'Сигма'
	| 'Петербуржец'
	| 'Крутыш'

export interface Achievement {
	name: AchievementName
	label: string
	isAchieved: boolean
	max: number
}
