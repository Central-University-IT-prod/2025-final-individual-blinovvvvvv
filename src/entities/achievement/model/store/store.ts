import { achievementsItems } from '../data/achievements.data'
import { AchievementStore } from '../types/store.types'
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

export const useAchievementStore = create<AchievementStore>()(
	devtools(
		persist(
			set => ({
				items: achievementsItems,
				totalTrainingTime: 0,
				totalRepeats: 0,
				totalWeight: 0,
				totalTime: 0,
				totalExercisesCompleted: 0,

				complete: name =>
					set(state => ({
						items: state.items.map(item => {
							if (item.name === name)
								return {
									...item,
									isAchieved: true,
								}

							return item
						}),
					})),
				addTotalTrainingTime: totalTrainingTime =>
					set(state => ({
						totalTrainingTime: state.totalTrainingTime + totalTrainingTime,
					})),
				addTotalRepeats: totalRepeats =>
					set(state => ({
						totalRepeats: state.totalRepeats + totalRepeats,
					})),
				addTotalWeight: totalWeight =>
					set(state => ({
						totalWeight: state.totalWeight + totalWeight,
					})),
				addTotalTime: totalTime =>
					set(state => ({
						totalTime: state.totalTime + totalTime,
					})),
				addTotalExercisesCompleted: totalExercisesCompleted =>
					set(state => ({
						totalExercisesCompleted:
							state.totalExercisesCompleted + totalExercisesCompleted,
					})),
			}),
			{
				name: 'achievement-store',
			}
		)
	)
)
