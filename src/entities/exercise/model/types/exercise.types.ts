export type ExerciseComplexity = 'easy' | 'medium' | 'hard'
export type ExerciseCategory =
	| 'legs'
	| 'shoulders'
	| 'arms'
	| 'back'
	| 'chest'
	| 'abs'
export type ExerciseType = 'time' | 'weight' | 'repeat'
export type ExerciseEquipment =
	| 'dumbbells'
	| 'carpet'
	| 'bench'
	| 'barbell'
	| 'pancakes'
	| 'treadmill'

export interface Exercise {
	id: string
	name: string
	complexity: ExerciseComplexity
	categories: ExerciseCategory[]
	equipment: ExerciseEquipment[]
	type: ExerciseType
	description: string
	links?: string
}
