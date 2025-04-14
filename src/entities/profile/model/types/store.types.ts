import { ProfileGoal, ProfileHeadwear, ProfileStatus } from './profile.types'

type ProfileStoreState = {
	balance: number
	weight: number
	height: number
	goal: ProfileGoal | string
	name: string
	status: ProfileStatus
	availableStatuses: ProfileStatus[]
	headwear?: ProfileHeadwear
	availableHeadwear: ProfileHeadwear[]
	experience: number
	isInit: boolean
	cheatsEnabled: boolean
}

type ProfileStoreActions = {
	setBalance: (newBalance: number) => void
	setWeight: (newWeight: number) => void
	setHeight: (newHeight: number) => void
	setGoal: (newGoal: ProfileGoal) => void
	setName: (newName: string) => void
	setStatus: (newStatus: ProfileStatus) => void
	toggleHeadwear: (headwear: ProfileHeadwear) => void
	setExperience: (experience: number) => void
	setIsInit: (isInit: boolean) => void
	setCheatsEnabled: (cheatsEnabled: boolean) => void
	addAvailableStatus: (status: ProfileStatus) => void
	addAvailableHeadWear: (headwear: ProfileHeadwear) => void
	addBalance: (balance: number) => void
	addExperience: (experience: number) => void
	setState: (newState: Partial<ProfileStoreState>) => void
}

export type ProfileStore = ProfileStoreState & ProfileStoreActions
