import { exerciseCategoriesItems } from '../../lib/form-options/exercise-categories-items'
import { exerciseComplexityItems } from '../../lib/form-options/exercise-complexity-items'
import { exerciseEquipmentItems } from '../../lib/form-options/exercise-equipment-items'
import { exerciseTypeItems } from '../../lib/form-options/exercise-type-items'
import {
	ExerciseCategory,
	ExerciseComplexity,
	ExerciseEquipment,
	ExerciseType,
} from '../types/exercise.types'
import { z } from 'zod'

const categoriesEnum = exerciseCategoriesItems.map(item => item.id) as [
	ExerciseCategory,
	...ExerciseCategory[],
]
const equipmentEnum = exerciseEquipmentItems.map(item => item.id) as [
	ExerciseEquipment,
	...ExerciseEquipment[],
]
const complexityEnum = exerciseComplexityItems.map(item => item.id) as [
	ExerciseComplexity,
	...ExerciseComplexity[],
]
const typeEnum = exerciseTypeItems.map(item => item.id) as [
	ExerciseType,
	...ExerciseType[],
]

export const exerciseFormSchema = z.object({
	name: z
		.string({
			message: 'Укажите название упражнения',
		})
		.min(3, {
			message: 'Укажите название упражнения',
		}),
	complexity: z.enum(complexityEnum, {
		message: 'Укажите сложность упражнения',
	}),
	type: z.enum(typeEnum, {
		message: 'Укажите сложность упражнения',
	}),
	categories: z
		.array(z.enum(categoriesEnum), {
			message: 'Укажите категорию для упражнения',
		})
		.min(1, {
			message: 'Укажите категорию для упражнения',
		}),
	equipment: z.array(z.enum(equipmentEnum)).optional().default([]),
	description: z
		.string({
			message: 'Укажите инструкцию для упражнения',
		})
		.min(5, {
			message: 'Укажите инструкцию для упражнения',
		})
		.max(60, {
			message: 'Слишком много символов',
		}),
	links: z
		.string({
			message: 'Укажите валидную ссылку',
		})
		.max(60, {
			message: 'Слишком много ссылок',
		})
		.optional(),
})
