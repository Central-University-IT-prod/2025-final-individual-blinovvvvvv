import {
	Exercise,
	ExerciseCategory,
	ExerciseComplexity,
	ExerciseEquipment,
} from './exercise.types'

type Filters = {
	complexity: ExerciseComplexity[]
	categories: ExerciseCategory[]
	equipment: ExerciseEquipment[]
}

type ExerciseStoreState = {
	items: Exercise[]
	filters: Filters
	filteredItems: () => Exercise[]
}

type ExerciseStoreActions = {
	addItem: (newItem: Exercise) => void
	deleteItem: (id: string) => void
	updateItem: (id: string, payload: Partial<Omit<Exercise, 'id'>>) => void

	setFilters: (filters: Filters) => void
}

export type ExerciseStore = ExerciseStoreState & ExerciseStoreActions
