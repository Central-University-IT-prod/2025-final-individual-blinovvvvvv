import { useProfileStore } from '@/entities/profile'
import { CheatPanel } from '@/features/cheat-panel'
import { Container } from '@/shared/components/ui/container'
import { ProfileCard } from '@/widgets/profile-card'
import { MobileSidebar, Sidebar } from '@/widgets/sidebar'
import { Outlet } from 'react-router'

export default function Layout() {
	const isCheatsEnabled = useProfileStore(state => state.cheatsEnabled)

	return (
		<>
			<ProfileCard className='flex-row justify-between gap-4 rounded-t-none rounded-b-4xl p-8 pb-12 md:hidden' />
			<Container className='relative grid gap-16 pb-28 md:mx-auto md:grid-cols-[252px_1fr] md:pt-20 md:pb-0'>
				<aside
					className='sticky top-20 hidden space-y-6 self-start md:block'
					aria-label='Сайдбар'
				>
					<ProfileCard />
					<Sidebar />
				</aside>
				<main className='md:pb-10'>
					<Outlet />
				</main>
			</Container>
			<MobileSidebar />

			{isCheatsEnabled && <CheatPanel />}
		</>
	)
}
