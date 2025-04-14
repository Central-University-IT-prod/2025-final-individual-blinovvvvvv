import { profileStatuses } from '@/entities/profile'
import { z } from 'zod'

export const formSchema = z.object({
	weight: z.string(),
	height: z.string(),
	goal: z.string(),
	name: z.string(),
	status: z.enum(profileStatuses),
})
