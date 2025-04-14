import { exerciseCategoriesItems } from '../../lib/form-options/exercise-categories-items'
import { exerciseEquipmentItems } from '../../lib/form-options/exercise-equipment-items'
import { getItemLabel } from '../../lib/helpers/get-item-label'
import { Exercise } from '../../model/types/exercise.types'
import { transformLabel } from '@/shared/lib/label'
import { ReactNode } from 'react'

function TextEnumerationBox({ children }: { children: ReactNode }) {
	return <div className='flex flex-wrap gap-1'>{children}</div>
}

function ExerciseCardText({ exercise }: { exercise: Exercise }) {
	return (
		<div className='flex flex-col gap-2'>
			<TextEnumerationBox>
				{exercise.categories.map(categoryId => (
					<p className='text-black' key={categoryId}>
						{transformLabel(getItemLabel(exerciseCategoriesItems, categoryId))}
					</p>
				))}
			</TextEnumerationBox>
			<h3 className='max-w-36 text-2xl font-bold break-words text-black'>
				{exercise.name.toUpperCase()}
			</h3>
			{exercise.equipment.length > 0 && (
				<TextEnumerationBox>
					{exercise.equipment.map(equipmentId => (
						<p className='truncate text-black' key={equipmentId}>
							{transformLabel(
								getItemLabel(exerciseEquipmentItems, equipmentId)
							)}
						</p>
					))}
				</TextEnumerationBox>
			)}
		</div>
	)
}

export { ExerciseCardText }
