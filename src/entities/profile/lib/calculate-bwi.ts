export function calculateBWI(weight: number, height: number) {
	return weight / (height / 100) ** 2
}
