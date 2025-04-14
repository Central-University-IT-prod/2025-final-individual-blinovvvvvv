import { calculateBWI } from '../../lib/calculate-bwi'

export function calculateRecommendedExercises(weight: number, height: number) {
	const BWI = calculateBWI(weight, height)

	if (18.5 <= BWI && BWI <= 29.9) {
		return 6
	}

	return 4
}
