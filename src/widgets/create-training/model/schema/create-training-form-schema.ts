import { z } from 'zod'

export const createTrainingFormSchema = z.object({
	name: z.string().min(1, {
		message: 'Укажите название тренировки',
	}),
})
