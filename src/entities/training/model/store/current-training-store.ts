import { CurrentTrainingStore } from '../types/current-training-store'
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

export const useCurrentTrainingStore = create<CurrentTrainingStore>()(
	devtools(
		persist(
			set => ({
				exercises: [],
				timeStart: '',
				timeEnd: '',
				name: '',
				activeExercise: 0,
				isCompleted: false,
				isTimeoutActive: false,
				timeoutTime: 0,
				isLastExerciseActive: false,
				isRewardReceived: false,

				setTimeStart: timeStart => set({ timeStart }),
				setTimeEnd: timeEnd => set({ timeEnd }),
				setExercises: exercises =>
					set({ exercises, isLastExerciseActive: exercises.length === 1 }),
				setName: name => set({ name }),
				setActiveExercise: activeExercise =>
					set(state => ({
						activeExercise,
						isLastExerciseActive: activeExercise === state.exercises.length - 1,
					})),
				setNextActiveExercise: () =>
					set(state => {
						const nextExerciseIndex = state.activeExercise + 1

						if (state.exercises[nextExerciseIndex]) {
							return {
								activeExercise: nextExerciseIndex,
								isLastExerciseActive:
									nextExerciseIndex === state.exercises.length - 1,
							}
						}

						return {
							activeExercise: state.activeExercise,
						}
					}),
				setIsCompleted: isCompleted => set({ isCompleted }),
				setIsTimeoutActive: isTimeoutActive => set({ isTimeoutActive }),
				setTimeoutTime: timeoutTime => set({ timeoutTime }),
				updateActiveExerciseTime: time =>
					set(state => {
						const exercises = [...state.exercises]
						const index = state.activeExercise

						if (exercises[index]) {
							exercises[index] = {
								...exercises[index],
								time,
							}
						}

						return { exercises }
					}),
				setIsRewardReceived: isRewardReceived => set({ isRewardReceived }),
				setActiveExerciseCompleted: () =>
					set(state => {
						const exercises = [...state.exercises]
						const activeExercise = exercises[state.activeExercise]

						if (activeExercise) {
							activeExercise.isCompleted = true
						}

						return { exercises }
					}),

				setState: state => set({ ...state }),
			}),
			{
				name: 'current-training-store',
			}
		)
	)
)
