import { cn } from '@/shared/lib/utils'
import { ElementType, HTMLAttributes, ReactNode } from 'react'

interface AppCardProps extends HTMLAttributes<HTMLDivElement> {
	className?: string
	children: ReactNode
	as?: ElementType
}

function AppCard(props: AppCardProps) {
	const { children, className, as, ...otherProps } = props
	const As = as || 'div'

	return (
		<As
			className={cn('block rounded-3xl px-8 py-6', className)}
			{...otherProps}
		>
			{children}
		</As>
	)
}

export { AppCard }
