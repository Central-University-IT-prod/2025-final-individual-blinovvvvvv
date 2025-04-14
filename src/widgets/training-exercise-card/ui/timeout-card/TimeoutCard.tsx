import { useCurrentTrainingStore } from '@/entities/training'
import { Timer } from '@/features/timer'
import { Button } from '@/shared/components/ui/button'

function TimeoutCard() {
	const setNextActiveExercise = useCurrentTrainingStore(
		state => state.setNextActiveExercise
	)

	const timeoutTime = useCurrentTrainingStore(state => state.timeoutTime)
	const setTimeoutTime = useCurrentTrainingStore(state => state.setTimeoutTime)

	const setTimeoutActive = useCurrentTrainingStore(
		state => state.setIsTimeoutActive
	)

	const onTimeoutComplete = () => {
		setTimeoutActive(false)
		setNextActiveExercise()
	}

	const onTimeoutTimeReduce = () => {
		if (timeoutTime < 10) return

		setTimeoutTime(timeoutTime - 10)
	}

	const onTimeoutTimeIncrease = () => {
		setTimeoutTime(timeoutTime + 10)
	}

	return (
		<div className='flex h-full w-full flex-col items-center justify-between gap-10'>
			<div className='flex w-full flex-col items-center gap-10'>
				<h1 className='text-2xl font-bold'>ПЕРЕРЫВ</h1>
				<Timer
					seconds={timeoutTime}
					onComplete={onTimeoutComplete}
					onCountDown={setTimeoutTime}
				/>
			</div>
			<div className='grid w-full grid-cols-[80px_1fr_80px] gap-2'>
				<Button
					className='rounded-xl py-4 text-xl'
					onClick={onTimeoutTimeReduce}
				>
					-10с
				</Button>
				<Button className='rounded-xl py-4 text-xl' onClick={onTimeoutComplete}>
					ДАЛЬШЕ
				</Button>
				<Button
					className='rounded-xl py-4 text-xl'
					onClick={onTimeoutTimeIncrease}
				>
					+10c
				</Button>
			</div>
		</div>
	)
}

export { TimeoutCard }
