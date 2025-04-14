import { links } from '../../model/links'
import { cn } from '@/shared/lib/utils'
import { Link, useLocation } from 'react-router'

export default function SidebarLinks() {
	const { pathname } = useLocation()

	return links.map(link => (
		<Link
			to={link.href}
			key={link.href}
			className={cn(
				'rounded-xl p-2 transition-colors hover:bg-zinc-800 md:p-3',
				{
					['bg-white text-black']: pathname === link.href,
				}
			)}
			viewTransition
		>
			<span
				className={cn(
					'flex flex-col items-start gap-1 md:flex-row md:items-center md:gap-3'
				)}
			>
				{link.icon}
				<span className='text-xs md:text-xl'>{link.text}</span>
			</span>
		</Link>
	))
}
