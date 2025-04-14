import { mockTrainings } from '../data/training-data'
import { TrainingStore } from '../types/training-store.types'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useTrainingStore = create<TrainingStore>()(
	persist(
		set => ({
			items: mockTrainings,
			trainingExercises: [],

			addTrainingExercise: exercise =>
				set(state => ({
					trainingExercises: [...state.trainingExercises, exercise],
				})),
			deleteTrainingExerciseByIndex: index =>
				set(state => ({
					trainingExercises: state.trainingExercises.filter(
						(_, exerciseIndex) => exerciseIndex !== index
					),
				})),
			updateTrainingExerciseByIndex: (index, payload) =>
				set(state => {
					const trainingExercises = [...state.trainingExercises]
					if (trainingExercises[index]) {
						trainingExercises[index] = {
							...trainingExercises[index],
							...payload,
						}
					}
					return { trainingExercises: trainingExercises }
				}),
			setTrainingExercises: trainingExercises => set({ trainingExercises }),

			addItem: item => set(state => ({ items: [...state.items, item] })),
			deleteItem: id =>
				set(state => ({
					items: state.items.filter(item => item.id !== id),
				})),
			setItems: items => set({ items }),
		}),
		{
			name: 'training-store',
		}
	)
)
