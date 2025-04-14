import { FieldValues, UseFormReturn } from 'react-hook-form'

export type ExerciseForm<T extends FieldValues = FieldValues> = UseFormReturn<T>
