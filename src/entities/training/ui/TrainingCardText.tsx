import { ReactNode } from 'react'

function TrainingCardText({ children }: { children: ReactNode }) {
	return (
		<h3 className='max-w-38 text-2xl font-bold break-words text-black'>
			{children}
		</h3>
	)
}

export { TrainingCardText }
