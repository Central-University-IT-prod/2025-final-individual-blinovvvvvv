import { useProfileStore } from '@/entities/profile'
import { Button } from '@/shared/components/ui/button'

function CheatPanel() {
	const { addBalance, addExperience } = useProfileStore()
	return (
		<div className='absolute top-0 left-0 flex'>
			<div>
				<p>Сигмики</p>
				<Button onClick={() => addBalance(-100)}>-100</Button>
				<Button onClick={() => addBalance(100)}>+100</Button>
			</div>
			<div>
				<p>Опыт</p>
				<Button onClick={() => addExperience(-100)}>-100</Button>
				<Button onClick={() => addExperience(100)}>+100</Button>
			</div>
		</div>
	)
}

export { CheatPanel }
