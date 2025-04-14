import { useTrainingStore } from '@/entities/training'
import {
	AlertDialog,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from '@/shared/components/ui/alert-dialog'
import { Button } from '@/shared/components/ui/button'
import { DeleteButton } from '@/shared/components/ui/delete-button'
import { AlertDialogAction } from '@radix-ui/react-alert-dialog'
import { toast } from 'sonner'

interface DeleteTrainingProps {
	id: string
}

function DeleteTraining({ id }: DeleteTrainingProps) {
	const deleteTraining = useTrainingStore(state => state.deleteItem)

	const onDelete = () => {
		deleteTraining(id)
		toast('Тренировка удалена')
	}

	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<DeleteButton aria-label='Удалить тренировку' />
			</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>
						Вы точно хотите удалить эту тренировку?
					</AlertDialogTitle>
					<AlertDialogDescription>
						Это действие нельзя будет отменить.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Закрыть</AlertDialogCancel>
					<AlertDialogAction asChild>
						<Button onClick={onDelete} variant='destructive'>
							Удалить
						</Button>
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
}

export { DeleteTraining }
