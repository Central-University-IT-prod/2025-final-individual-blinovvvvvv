import { useState } from 'react'

export function useDisclosure() {
	const [open, setOpen] = useState<boolean>(false)

	return {
		open,
		setOpen,
	}
}
