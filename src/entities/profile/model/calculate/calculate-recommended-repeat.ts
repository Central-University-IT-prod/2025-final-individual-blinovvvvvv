import { calculateBWI } from '../../lib/calculate-bwi'
import { ProfileGoal } from '../types/profile.types'

function bwiNormal(BWI: number, goal?: ProfileGoal | string) {
	if (18.5 <= BWI && BWI <= 29.9) {
		if (goal === 'Набрать массу') return 15
		if (goal === 'Привести себя в форму') return 10
		if (goal === 'Позаботиться о здоровье') return 5
		if (goal === 'Сбросить лишний вес') return 10

		if (!goal) return 15
	}
}

function bwiLow(BWI: number, goal?: ProfileGoal | string) {
	if (BWI < 18.5) {
		if (goal === 'Набрать массу') return 15
		if (goal === 'Привести себя в форму') return 10
		if (goal === 'Позаботиться о здоровье') return 5
		if (goal === 'Сбросить лишний вес') return 5

		if (!goal) return 5
	}
}

function bwiHigh(BWI: number, goal?: ProfileGoal | string) {
	if (BWI > 29.9) {
		if (goal === 'Набрать массу') return 10
		if (goal === 'Привести себя в форму') return 20
		if (goal === 'Позаботиться о здоровье') return 15
		if (goal === 'Сбросить лишний вес') return 20

		if (!goal) return 10
	}
}

export function calculateRecommendedRepeat(
	weight: number,
	height: number,
	goal?: ProfileGoal | string
) {
	const BWI = calculateBWI(weight, height)
	let repeatBase: number = 10

	repeatBase += bwiNormal(BWI, goal) || 0
	repeatBase += bwiLow(BWI, goal) || 0
	repeatBase += bwiHigh(BWI, goal) || 0

	return repeatBase
}
