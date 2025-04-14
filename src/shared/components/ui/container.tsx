import { cn } from '@/shared/lib/utils'
import { ReactNode } from 'react'

interface ContainerProps {
	className?: string
	children: ReactNode
}

function Container({ children, className }: ContainerProps) {
	return <div className={cn('max-w-5xl p-6', className)}>{children}</div>
}

export { Container }
