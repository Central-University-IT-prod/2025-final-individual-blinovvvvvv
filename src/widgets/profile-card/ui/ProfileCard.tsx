import { useProfileStore } from '@/entities/profile'
import { ProfileProgress } from '@/features/profile-progress'
import { Image } from '@/shared/components/ui/image'
import { cn } from '@/shared/lib/utils'

function ProfileCard({ className }: { className?: string }) {
	const name = useProfileStore(state => state.name)
	const status = useProfileStore(state => state.status)
	const balance = useProfileStore(state => state.balance)
	const headwear = useProfileStore(state => state.headwear)

	return (
		<div
			className={cn(
				'flex flex-col items-start gap-6 rounded-3xl p-6 dark-gradient',
				className
			)}
		>
			<div className='flex gap-4'>
				<div className='relative flex-shrink-0'>
					{headwear && (
						<Image
							src={headwear.path}
							alt={headwear.value}
							className={cn('absolute', headwear.className)}
							width={35}
							height={35}
						/>
					)}
					<ProfileProgress />
				</div>
				<div>
					<p className='text-xl'>{name}</p>
					<p className='text-[#CACACA]'>{status}</p>
				</div>
			</div>
			<div className='max-w-full space-y-2'>
				<p className='text-right font-medium text-[#636363] md:text-left'>
					#СИГМИКИ
				</p>
				<div className='truncate rounded-3xl px-6 py-2 text-center font-inter text-3xl font-extrabold text-black green-gradient md:rounded-4xl md:text-4xl'>
					{balance}
				</div>
			</div>
		</div>
	)
}

export { ProfileCard }
