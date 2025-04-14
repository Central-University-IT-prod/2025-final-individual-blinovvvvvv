import { cn } from '@/shared/lib/utils'
import { Trash2 } from 'lucide-react'
import { ButtonHTMLAttributes } from 'react'

interface DeleteButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
	'aria-label': string
}

function DeleteButton({
	className,
	'aria-label': ariaLabel,
	...props
}: DeleteButtonProps) {
	return (
		<button
			className={cn(
				'flex h-full w-full cursor-pointer items-center justify-center rounded-3xl bg-[#210808] transition-colors duration-300',
				className
			)}
			aria-label={ariaLabel}
			{...props}
		>
			<Trash2 stroke='#C50226' aria-label={ariaLabel} />
		</button>
	)
}

export { DeleteButton }
