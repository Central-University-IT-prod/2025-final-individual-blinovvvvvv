import { Link } from './types/link.types'
import { routes } from '@/shared/routes/routes'
import { BicepsFlexed, Dumbbell, ShoppingBasket, User } from 'lucide-react'

export const links: Link[] = [
	{
		text: 'Профиль',
		href: routes.profile,
		icon: <User aria-label='user' />,
	},
	{
		text: 'Упражнения',
		href: routes.exercises,
		icon: <BicepsFlexed aria-label='biceps' />,
	},
	{
		text: 'Тренировки',
		href: routes.trainings,
		icon: <Dumbbell aria-label='dumbbell' />,
	},
	{
		text: 'Магазин',
		href: routes.shop,
		icon: <ShoppingBasket aria-label='shop' />,
	},
]
