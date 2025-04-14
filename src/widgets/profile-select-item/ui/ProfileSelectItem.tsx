import { FormControl, FormItem, FormLabel } from '@/shared/components/ui/form'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/shared/components/ui/select'
import { cn } from '@/shared/lib/utils'

interface ProfileSelectItemProps {
	onChange: () => void
	value: string
	options: string[]
	placeholder: string
	label: string
	triggerClassName?: string
}

function ProfileSelectItem({
	onChange,
	options,
	value,
	label,
	placeholder,
	triggerClassName,
}: ProfileSelectItemProps) {
	return (
		<FormItem className='flex flex-wrap items-center justify-between gap-x-4 gap-y-2'>
			<FormLabel className='text-base'>{label}</FormLabel>
			<Select onValueChange={onChange} defaultValue={value}>
				<FormControl>
					<SelectTrigger
						aria-label={placeholder}
						className={cn('max-w-36', triggerClassName)}
					>
						<SelectValue placeholder={placeholder} />
					</SelectTrigger>
				</FormControl>
				<SelectContent>
					{options.map((option, index) => (
						<SelectItem value={option} key={option + index}>
							{option}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</FormItem>
	)
}

export { ProfileSelectItem }
