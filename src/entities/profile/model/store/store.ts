import { ProfileStore } from '../types/store.types'
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

export const useProfileStore = create<ProfileStore>()(
	devtools(
		persist(
			set => ({
				balance: 0,
				experience: 0,
				goal: '',
				height: 170,
				weight: 60,
				name: 'Пользователь',
				status: '#НОВИЧОК',
				availableStatuses: ['#НОВИЧОК'],
				headwear: undefined,
				availableHeadwear: [],
				isInit: false,
				cheatsEnabled: false,

				setBalance: balance => set({ balance }),
				setWeight: weight => set({ weight }),
				setHeight: height => set({ height }),
				setGoal: goal => set({ goal }),
				setName: name => set({ name }),
				setStatus: status => set({ status }),
				setExperience: experience => set({ experience }),
				setIsInit: isInit => set({ isInit }),
				setCheatsEnabled: cheatsEnabled => set({ cheatsEnabled }),

				toggleHeadwear: headwear =>
					set(state => {
						if (state.headwear?.value === headwear.value)
							return {
								headwear: undefined,
							}

						return { headwear }
					}),

				addAvailableStatus: status =>
					set(state => ({
						availableStatuses: [...state.availableStatuses, status],
					})),
				addBalance: balance =>
					set(state => ({
						balance:
							state.balance + balance >= 0
								? state.balance + balance
								: state.balance,
					})),
				addExperience: experience =>
					set(state => ({
						experience: state.experience + experience,
					})),
				addAvailableHeadWear: headwear =>
					set(state => ({
						availableHeadwear: [...state.availableHeadwear, headwear],
					})),
				setState: state => set({ ...state }),
			}),
			{
				name: 'profile-store',
			}
		)
	)
)
