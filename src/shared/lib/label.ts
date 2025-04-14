export function transformLabel(label?: string) {
	if (!label) return null

	return '#' + label?.toUpperCase()
}
