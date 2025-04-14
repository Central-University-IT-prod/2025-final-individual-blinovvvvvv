import { cn } from '@/shared/lib/utils'
import { ReactNode } from 'react'

interface PageTitleProps {
	className?: string
	children: ReactNode
}

function PageTitle({ children, className }: PageTitleProps) {
	return (
		<h1
			className={cn(
				'mb-5 text-xl font-semibold md:mb-10 md:text-3xl',
				className
			)}
		>
			{children}
		</h1>
	)
}

export { PageTitle }
