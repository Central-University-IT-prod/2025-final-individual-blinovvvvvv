import { Card, CardContent } from '@/shared/components/ui/card'
import { ReactNode } from 'react'

function ProfileFormFieldCard({ children }: { children: ReactNode }) {
	return (
		<Card className='w-full pt-6'>
			<CardContent className='flex flex-col gap-4'>{children}</CardContent>
		</Card>
	)
}

export { ProfileFormFieldCard }
