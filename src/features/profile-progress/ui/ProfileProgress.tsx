import { avatarsPath } from '../model/avatar/avatar'
import { parseCurrentLevel } from '../model/parse/parse-current-level'
import { useProfileStore } from '@/entities/profile'
import { Image } from '@/shared/components/ui/image'

function ProfileProgress() {
	const experience = useProfileStore(state => state.experience)

	const currentLevel = parseCurrentLevel(experience)
	const currentAvatar = avatarsPath[currentLevel]

	return (
		<Image
			width={60}
			height={60}
			src={currentAvatar.path}
			alt={currentAvatar.alt}
			className='h-15 w-15 rounded-full'
		/>
	)
}

export { ProfileProgress }
