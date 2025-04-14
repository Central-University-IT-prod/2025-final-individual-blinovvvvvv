import { useState } from 'react'

export function useSwipe() {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const [swipedIndex, setSwipedIndex] = useState<any | null>(null)
	const onCloseSwipe = () => setSwipedIndex(null)

	return {
		onCloseSwipe,
		swipedIndex,
		onOpenSwipe: setSwipedIndex,
	}
}
