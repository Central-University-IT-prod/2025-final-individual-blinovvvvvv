import { useCurrentTrainingStore } from '@/entities/training'
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from '@/shared/components/ui/alert-dialog'
import { Button } from '@/shared/components/ui/button'

function EndTraining() {
	const setTrainingCompleted = useCurrentTrainingStore(
		state => state.setIsCompleted
	)
	const setTrainingTimeEnd = useCurrentTrainingStore(state => state.setTimeEnd)

	const onEnd = () => {
		setTrainingTimeEnd(Date.now().toString())
		setTrainingCompleted(true)
	}

	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<Button
					className='rounded-lg px-9 py-3 text-lg font-bold'
					variant={'destructive'}
				>
					ЗАВЕРШИТЬ
				</Button>
			</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>
						Вы точно хотите досрочно завершить эту тренировку?
					</AlertDialogTitle>
					<AlertDialogDescription>
						Это действие нельзя будет отменить.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Закрыть</AlertDialogCancel>
					<AlertDialogAction asChild>
						{/** по смешным причинам variant для этой кнопки не работает ^_^ */}
						<Button
							className='bg-[#210808] text-red-500 transition-colors hover:bg-[#3F0F10]'
							onClick={onEnd}
						>
							Завершить
						</Button>
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
}

export { EndTraining }
