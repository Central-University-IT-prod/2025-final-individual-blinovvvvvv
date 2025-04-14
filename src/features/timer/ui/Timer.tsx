import { formatTime } from '../lib/format-time'
import { useEffect } from 'react'

type TimerProps = {
	seconds: number
	onCountDown: (time: number) => void
	onComplete: () => void
	isStopped?: boolean
}

function Timer(props: TimerProps) {
	const { seconds, onComplete, isStopped, onCountDown } = props

	useEffect(() => {
		if (isStopped) {
			onCountDown(0)
			return
		}
		if (seconds <= 0) {
			onComplete()
			return
		}
		const timer = setInterval(() => {
			onCountDown(seconds - 1)
		}, 1000)
		return () => clearInterval(timer)
	}, [isStopped, onComplete, onCountDown, seconds])

	return <p className='text-4xl font-medium'>{formatTime(seconds)}</p>
}

export { Timer }
