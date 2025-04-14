import { AppCard } from './app-card'
import { cn } from '@/shared/lib/utils'
import { ReactNode } from 'react'

interface CreateCardProps {
	className?: string
	children: ReactNode
}

function CreateCard({ children, className }: CreateCardProps) {
	return (
		<AppCard
			as='span'
			className={cn('text-2xl font-bold silver-gradient', className)}
		>
			{children}
		</AppCard>
	)
}

export { CreateCard }
