import {
	calculateRecommendedRepeat,
	calculateRecommendedTime,
	calculateRecommendedWeight,
	useProfileStore,
} from '@/entities/profile'
import { TrainingExercise } from '@/entities/training'
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
} from '@/shared/components/ui/alert-dialog'
import { Button } from '@/shared/components/ui/button'
import { Input } from '@/shared/components/ui/input'
import { Label } from '@/shared/components/ui/label'
import { useDisclosure } from '@/shared/lib/hooks/use-disclosure'
import { KeyboardEvent, useEffect, useId, useState } from 'react'

interface ExerciseCounterProps {
	onUpdate: (value: number) => void
	exercise: TrainingExercise
}

function ExerciseCounter(props: ExerciseCounterProps) {
	const id = useId()

	const { onUpdate, exercise } = props
	const weight = useProfileStore(state => state.weight)
	const height = useProfileStore(state => state.height)
	const goal = useProfileStore(state => state.goal)

	const { open, setOpen } = useDisclosure()

	const [warningDisplayed, setWarningDisplayed] = useState<boolean>(false)
	const [triggerPoint, setTriggerPoint] = useState<number>(35)

	const getRecommendedValue = () => {
		if (exercise.type === 'repeat')
			return calculateRecommendedRepeat(weight, height, goal)

		if (exercise.type === 'weight')
			return calculateRecommendedWeight(weight, height, goal)

		if (exercise.type === 'time')
			return calculateRecommendedTime(weight, height, goal)

		return 20
	}

	const type = exercise.type
	const value = exercise[type] ?? getRecommendedValue()

	const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
		if (
			!/[0-9]/.test(event.key) &&
			!(event.key === 'Backspace' || event.key === 'Delete')
		) {
			event.preventDefault()
		}
	}

	const onMinus = () => {
		if (value === 1) return

		if (type === 'repeat') onUpdate(value - 1)
		if (type === 'time') onUpdate(value - 1)
		if (type === 'weight') onUpdate(value - 1)

		if (value >= triggerPoint) {
			if (!warningDisplayed) {
				setOpen(true)
				setWarningDisplayed(true)
			}
		}
	}

	const onPlus = () => {
		if (type === 'repeat') onUpdate(value + 1)
		if (type === 'time') onUpdate(value + 1)
		if (type === 'weight') onUpdate(value + 1)

		if (value >= triggerPoint) {
			if (!warningDisplayed) {
				setOpen(true)
				setWarningDisplayed(true)
			}
		}
	}

	useEffect(() => {
		onUpdate(value)
		setTriggerPoint(+(value * 1.35).toFixed(0))

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<>
			<AlertDialog open={open} onOpenChange={setOpen}>
				<AlertDialogContent>
					<AlertDialogHeader>
						<AlertDialogTitle>Большая нагрузка</AlertDialogTitle>
						<AlertDialogDescription>
							Слишком большая нагрузка. Выше риски травмы, будьте аккуратнее
						</AlertDialogDescription>
					</AlertDialogHeader>
					<AlertDialogFooter>
						<AlertDialogAction>До меня дошло</AlertDialogAction>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>

			<div className='flex flex-col gap-2'>
				<Label htmlFor={id} className='text-lg font-bold text-black'>
					{type === 'repeat' && 'Повторения'}
					{type === 'weight' && 'Вес, кг'}
					{type === 'time' && 'Время, мин'}
				</Label>
				<div className='flex items-center gap-2'>
					<Button onClick={onMinus} variant='outline' className='size-8'>
						-1
					</Button>
					<Input
						className='w-fit max-w-14 truncate border-none bg-white font-bold text-black outline-black'
						onKeyDown={onKeyDown}
						value={value}
						onChange={event => onUpdate(+event.target.value)}
						id={id}
					/>
					<Button onClick={onPlus} variant='outline' className='size-8'>
						+1
					</Button>
				</div>
			</div>
		</>
	)
}

export { ExerciseCounter }
