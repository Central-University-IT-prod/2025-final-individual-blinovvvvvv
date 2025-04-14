import SidebarLinks from '../sidebar-links/SidebarLinks'

function MobileSidebar() {
	return (
		<nav className='fixed right-0 bottom-0 left-0 flex items-center justify-between gap-3 glass-bg p-4 md:hidden'>
			<SidebarLinks />
		</nav>
	)
}

export { MobileSidebar }
