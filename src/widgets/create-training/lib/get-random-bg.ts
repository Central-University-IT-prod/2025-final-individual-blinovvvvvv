import { random } from '@/shared/lib/utils'

export function getRandomBg() {
	const rand = random(1, 3)

	switch (rand) {
		case 1:
			return 'pink-gradient'
		case 2:
			return 'cyan-gradient'
		case 3:
			return 'purple-gradient'
		default:
			return 'cyan-gradient'
	}
}
