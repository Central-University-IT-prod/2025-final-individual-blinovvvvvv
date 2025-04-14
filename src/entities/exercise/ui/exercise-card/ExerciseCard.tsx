import { AppCard } from '@/shared/components/ui/app-card'
import { cn } from '@/shared/lib/utils'
import { HTMLAttributes, ReactNode } from 'react'

interface ExerciseCardProps extends HTMLAttributes<HTMLDivElement> {
	className?: string
	children: ReactNode
}

function ExerciseCard({ children, className }: ExerciseCardProps) {
	return (
		<AppCard
			className={cn('flex max-w-full items-center justify-between', className)}
		>
			{children}
		</AppCard>
	)
}

export { ExerciseCard }
