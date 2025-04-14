import { ProfileLevel } from '@/entities/profile'

export const avatarsPath: Record<
	ProfileLevel,
	{
		path: string
		alt: string
	}
> = {
	newbie: {
		path: '/spongebob.png',
		alt: 'Новичок Губка Боб',
	},
	sigma: {
		path: '/sigma.jpg',
		alt: 'Сигма',
	},
	profi: {
		path: '/profi.jpg',
		alt: 'Профи',
	},
	sportsman: {
		path: '/sportsman.jpg',
		alt: 'Качок',
	},
	gigachad: {
		path: '/gigachad.jpg',
		alt: 'Гигачад',
	},
}
