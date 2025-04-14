import { ProfileLevel } from '@/entities/profile'

export function parseCurrentLevel(experience: number): ProfileLevel {
	if (experience >= 4000) return 'gigachad'
	if (experience >= 3000) return 'sportsman'
	if (experience >= 2000) return 'profi'
	if (experience >= 1000) return 'sigma'

	return 'newbie'
}
