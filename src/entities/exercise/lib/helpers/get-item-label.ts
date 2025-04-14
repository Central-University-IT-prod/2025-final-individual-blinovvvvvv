import { CategoryItem } from '../form-options/exercise-categories-items'
import { EquipmentItem } from '../form-options/exercise-equipment-items'

export function getItemLabel(
	items: CategoryItem[] | EquipmentItem[],
	id: string
) {
	return items.find(item => item.id === id)?.label
}
