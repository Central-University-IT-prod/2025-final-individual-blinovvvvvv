import { z } from 'zod'

export const formSchema = z.object({
	weight: z.string().min(1),
	height: z.string().min(1),
})
