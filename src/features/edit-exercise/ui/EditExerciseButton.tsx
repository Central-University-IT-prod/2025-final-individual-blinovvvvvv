import {
	ExerciseDrawerForm,
	exerciseFormSchema,
	useExerciseStore,
} from '@/entities/exercise'
import { Button } from '@/shared/components/ui/button'
import {
	SheetDescription,
	SheetHeader,
	SheetTitle,
} from '@/shared/components/ui/sheet'
import { useDisclosure } from '@/shared/lib/hooks/use-disclosure'
import { zodResolver } from '@hookform/resolvers/zod'
import { SquarePen } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

interface EditExerciseButtonProps {
	id: string
}

function EditExerciseButton({ id }: EditExerciseButtonProps) {
	const { open, setOpen } = useDisclosure()

	const updateExercise = useExerciseStore(state => state.updateItem)
	const exerciseToEdit = useExerciseStore(state => state.items).find(
		exercise => exercise.id === id
	)

	const form = useForm<z.infer<typeof exerciseFormSchema>>({
		resolver: zodResolver(exerciseFormSchema),
		mode: 'onChange',
		defaultValues: {
			...exerciseToEdit,
		},
	})

	function onSubmit(data: z.infer<typeof exerciseFormSchema>) {
		updateExercise(id, data)
		setOpen(false)
		toast('Изменения сохранены')
	}

	return (
		<ExerciseDrawerForm
			open={open}
			setOpen={setOpen}
			form={form}
			onSubmit={onSubmit}
			triggerAsChild
			triggerSlot={
				<Button
					className='size-14 rounded-[1.25rem] bg-[rgba(217,217,217,0.65)] text-black transition-colors'
					aria-label='Редактировать'
				>
					<SquarePen aria-label='Редактировать' />
				</Button>
			}
			headerSlot={
				<SheetHeader>
					<SheetTitle>Редактирование упражнения</SheetTitle>
					<SheetDescription>
						Добавьте или уберите то, что хотите добавить или убрать
					</SheetDescription>
				</SheetHeader>
			}
		/>
	)
}

export { EditExerciseButton }
