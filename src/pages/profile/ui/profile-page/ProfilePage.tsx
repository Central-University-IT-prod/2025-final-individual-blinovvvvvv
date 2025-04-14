import { AchievementsTab } from '../achievements-tab/AchievementsTab'
import { ProfileTab } from '../profile-tab/ProfileTab'
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from '@/shared/components/ui/tabs'

function ProfilePage() {
	return (
		<Tabs defaultValue='profile' className='w-full'>
			<TabsList className='mb-6 grid w-full grid-cols-2'>
				<TabsTrigger value='profile'>Профиль</TabsTrigger>
				<TabsTrigger value='achievements'>Достижения</TabsTrigger>
			</TabsList>
			<TabsContent value='profile'>
				<ProfileTab />
			</TabsContent>
			<TabsContent value='achievements'>
				<AchievementsTab />
			</TabsContent>
		</Tabs>
	)
}

export { ProfilePage }
