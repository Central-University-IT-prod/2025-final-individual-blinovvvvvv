import { calculateBWI } from '../../lib/calculate-bwi'
import { ProfileGoal } from '../types/profile.types'

function bwiNormal(BWI: number, goal?: ProfileGoal | string) {
	if (18.5 <= BWI && BWI <= 29.9) {
		if (goal === 'Набрать массу') return 25
		if (goal === 'Привести себя в форму') return 15
		if (goal === 'Позаботиться о здоровье') return 10
		if (goal === 'Сбросить лишний вес') return 10

		if (!goal) return 15
	}
}

function bwiLow(BWI: number, goal?: ProfileGoal | string) {
	if (BWI < 18.5) {
		if (goal === 'Набрать массу') return 15
		if (goal === 'Привести себя в форму') return 10
		if (goal === 'Позаботиться о здоровье') return 10
		if (goal === 'Сбросить лишний вес') return 5

		if (!goal) return 10
	}
}

function bwiHigh(BWI: number, goal?: ProfileGoal | string) {
	if (BWI > 29.9) {
		if (goal === 'Набрать массу') return 20
		if (goal === 'Привести себя в форму') return 15
		if (goal === 'Позаботиться о здоровье') return 15
		if (goal === 'Сбросить лишний вес') return 15

		if (!goal) return 15
	}
}

export function calculateRecommendedWeight(
	weight: number,
	height: number,
	goal?: ProfileGoal | string
) {
	const BWI = calculateBWI(weight, height)
	let weightBase: number = 20

	weightBase += bwiNormal(BWI, goal) || 0
	weightBase += bwiLow(BWI, goal) || 0
	weightBase += bwiHigh(BWI, goal) || 0

	return weightBase
}
