import {
	ExerciseDrawerForm,
	exerciseFormSchema,
	useExerciseStore,
} from '@/entities/exercise'
import { CreateCard } from '@/shared/components/ui/create-card'
import {
	SheetDescription,
	SheetHeader,
	SheetTitle,
} from '@/shared/components/ui/sheet'
import { useDisclosure } from '@/shared/lib/hooks/use-disclosure'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

function CreateExercise() {
	const { open, setOpen } = useDisclosure()

	const addExerciseItem = useExerciseStore(state => state.addItem)

	const form = useForm<z.infer<typeof exerciseFormSchema>>({
		resolver: zodResolver(exerciseFormSchema),
		mode: 'onChange',
		defaultValues: {
			complexity: 'easy',
			type: 'repeat',
		},
	})

	function onSubmit(data: z.infer<typeof exerciseFormSchema>) {
		addExerciseItem({
			...data,
			id: String(Math.random()),
		})
		setOpen(false)
		toast('Упражнение создано')
	}

	return (
		<ExerciseDrawerForm
			open={open}
			setOpen={setOpen}
			form={form}
			onSubmit={onSubmit}
			triggerSlot={<CreateCard>Создать упражнение</CreateCard>}
			headerSlot={
				<SheetHeader>
					<SheetTitle>Добавить новое упражнение</SheetTitle>
					<SheetDescription>
						Укажите название, сложность и тип.
					</SheetDescription>
				</SheetHeader>
			}
		/>
	)
}

export { CreateExercise }
