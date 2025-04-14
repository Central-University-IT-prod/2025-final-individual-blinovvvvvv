import { profileStatuses } from '../data/profile-status.data'

export type ProfileGoal =
	| 'Сбросить лишний вес'
	| 'Набрать массу'
	| 'Привести себя в форму'
	| 'Позаботиться о здоровье'

export type ProfileLevel =
	| 'newbie'
	| 'sigma'
	| 'profi'
	| 'sportsman'
	| 'gigachad'

type ProfileHeadwearValue = 'КЕПКА' | 'ШЛЯПА' | 'КОРОНА' | 'СТУДЕНТ ЦУ'
export type ProfileHeadwear = {
	value: ProfileHeadwearValue
	path: string
	className?: string
}

export type ProfileStatus = (typeof profileStatuses)[number]
