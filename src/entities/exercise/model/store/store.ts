import { mockExercises } from '../data/exercise.data'
import { ExerciseStore } from '../types/store.types'
import { useTrainingStore } from '@/entities/training/@x/exercise'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useExerciseStore = create<ExerciseStore>()(
	persist(
		(set, get) => ({
			items: mockExercises,
			filters: {
				categories: [],
				complexity: [],
				equipment: [],
			},
			filteredItems: () => {
				const { items, filters } = get()

				return items.filter(item => {
					const matchedCategories =
						filters.categories.length == 0 ||
						item.categories.every(category =>
							filters.categories.includes(category)
						)
					const matchedComplexity =
						filters.complexity.length == 0 ||
						filters.complexity.includes(item.complexity)
					const matchedEquipment =
						filters.equipment.length == 0 ||
						(item.equipment.every(equip => filters.equipment.includes(equip)) &&
							item.equipment.length > 0)

					return matchedCategories && matchedComplexity && matchedEquipment
				})
			},

			addItem: item =>
				set(state => ({
					items: [...state.items, item],
				})),
			deleteItem: id =>
				set(state => ({
					items: state.items.filter(item => item.id !== id),
				})),
			updateItem: (id, payload) =>
				set(state => {
					const { items, setItems, setTrainingExercises, trainingExercises } =
						useTrainingStore.getState()

					setItems(
						items.map(item => {
							item.exercises = item.exercises.map(exercise => {
								if (exercise.id === id)
									return {
										...exercise,
										...payload,
									}
								return exercise
							})
							return item
						})
					)

					setTrainingExercises(
						trainingExercises.map(exercise => {
							if (exercise.id === id)
								return {
									...exercise,
									...payload,
								}
							return exercise
						})
					)
					return {
						items: state.items.map(item =>
							item.id === id ? { ...item, ...payload } : item
						),
					}
				}),
			setFilters: filters => set({ filters }),
		}),
		{
			name: 'exercise-store',
		}
	)
)
