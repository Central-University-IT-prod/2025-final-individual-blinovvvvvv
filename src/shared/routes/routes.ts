export const routes = {
	profile: '/profile',
	exercises: '/exercises',
	trainings: '/trainings',
	shop: '/shop',
	trainingById: '/trainings/:id',
	getTrainingById: (id: string) => `/trainings/${id}`,
}
