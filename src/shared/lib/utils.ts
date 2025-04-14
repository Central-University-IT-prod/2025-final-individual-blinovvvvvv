import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function random(start: number, end: number): number {
	return Math.floor(Math.random() * (end - start + 1)) + start
}

export function formatTimeDifference(startTimeStr: string, endTimeStr: string) {
	const startTime = new Date(parseInt(startTimeStr, 10))
	const endTime = new Date(parseInt(endTimeStr, 10))

	const diffMs = endTime.getTime() - startTime.getTime()

	const seconds = Math.floor((diffMs / 1000) % 60)
	const minutes = Math.floor((diffMs / (1000 * 60)) % 60)
	const hours = Math.floor(diffMs / (1000 * 60 * 60))

	return {
		timeDifference:
			`${hours.toString().padStart(2, '0')}:` +
			`${minutes.toString().padStart(2, '0')}:` +
			`${seconds.toString().padStart(2, '0')}`,
		seconds: Math.floor(diffMs / 1000),
	}
}

export function normalizeNumbers(a: number, b: number): [number, number] {
	const max = Math.max(a, b)
	if (max === 0) return [0, 0]

	const normalizedA = (a / max) * 100
	const normalizedB = (b / max) * 100

	return [normalizedA, normalizedB]
}
