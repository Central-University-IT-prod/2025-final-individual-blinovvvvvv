import SidebarLinks from '../sidebar-links/SidebarLinks'

function Sidebar() {
	return (
		<nav className='hidden flex-col gap-1 md:flex'>
			<SidebarLinks />
		</nav>
	)
}

export { Sidebar }
