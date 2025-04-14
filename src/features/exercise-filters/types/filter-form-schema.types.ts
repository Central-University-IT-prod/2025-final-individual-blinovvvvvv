import {
	ExerciseCategory,
	ExerciseComplexity,
	ExerciseEquipment,
} from '@/entities/exercise'

export interface FiltersFormSchema {
	complexity: ExerciseComplexity[]
	categories: ExerciseCategory[]
	equipment: ExerciseEquipment[]
}
