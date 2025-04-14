import { ExerciseComplexity } from '../../model/types/exercise.types'

export function getBgByComplexity(complexity: ExerciseComplexity) {
	if (complexity === 'hard') {
		return 'red-gradient'
	}
	if (complexity === 'medium') {
		return 'yellow-gradient'
	}
	if (complexity === 'easy') {
		return 'lime-gradient'
	}
}
