import Layout from './Layout'
import { AchievementProgressListener } from '@/features/achievement-progress'
import { ExercisesPage } from '@/pages/exercises'
import { HomePage } from '@/pages/home'
import { ProfilePage } from '@/pages/profile'
import { ShopPage } from '@/pages/shop'
import { TrainingByIdPage } from '@/pages/training-by-id'
import { TrainingsPage } from '@/pages/trainings'
import { Toaster } from '@/shared/components/ui/sonner'
import { routes } from '@/shared/routes/routes'
import { Route, Routes } from 'react-router'

function App() {
	return (
		<>
			<Routes>
				<Route index element={<HomePage />} />
				<Route element={<Layout />}>
					<Route path={routes.profile} element={<ProfilePage />} />
					<Route path={routes.shop} element={<ShopPage />} />
					<Route path={routes.exercises} element={<ExercisesPage />} />
					<Route path={routes.trainings} element={<TrainingsPage />} />
				</Route>
				<Route path={routes.trainingById} element={<TrainingByIdPage />} />
			</Routes>
			<Toaster />
			<AchievementProgressListener />
		</>
	)
}

export default App
