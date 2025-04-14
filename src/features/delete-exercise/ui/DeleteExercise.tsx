import { useExerciseStore } from '@/entities/exercise'
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

interface DeleteExerciseProps {
	id: string
	onDelete?: () => void
}

function DeleteExercise({ id, onDelete }: DeleteExerciseProps) {
	const deleteExercise = useExerciseStore(state => state.deleteItem)

	const onClick = () => {
		if (onDelete) onDelete()
		else {
			deleteExercise(id)
			toast('Упражнение удалено')
		}
	}

	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<DeleteButton aria-label='Удалить упражнение' />
			</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>
						Вы точно хотите удалить это упражнение?
					</AlertDialogTitle>
					<AlertDialogDescription>
						Это действие нельзя будет отменить.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Закрыть</AlertDialogCancel>
					<AlertDialogAction asChild>
						<Button onClick={onClick} variant='destructive'>
							Удалить
						</Button>
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
}

export { DeleteExercise }
