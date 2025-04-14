import { formSchema } from '../../model/schema/form-schema'
import { selectFields } from '../../model/select-fields.data'
import { ProfileFormFieldCard, useProfileStore } from '@/entities/profile'
import { SelectHeadwear } from '@/features/select-headwear'
import { Button } from '@/shared/components/ui/button'
import {
	Form,
	FormField,
	FormItem,
	FormLabel,
} from '@/shared/components/ui/form'
import { Input } from '@/shared/components/ui/input'
import { PageTitle } from '@/shared/components/ui/page-title'
import { ProfileSelectItem } from '@/widgets/profile-select-item'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

function ProfileTab() {
	const profileState = useProfileStore()

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			weight: String(profileState.weight),
			height: String(profileState.height),
			goal: profileState.goal,
			name: profileState.name,
			status: profileState.status,
		},
	})

	function onSubmit(data: z.infer<typeof formSchema>) {
		profileState.setState({
			...data,
			weight: +data.weight,
			height: +data.height,
		})
		toast('Изменения сохранены')
	}

	return (
		<>
			<PageTitle>Профиль</PageTitle>
			<SelectHeadwear className='mb-10' />

			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className='space-y-3 md:space-y-6'
				>
					<ProfileFormFieldCard>
						{selectFields.map(
							({ label, name, options, placeholder, triggerClassName }) => (
								<FormField
									control={form.control}
									name={name}
									render={({ field }) => (
										<ProfileSelectItem
											label={label}
											placeholder={placeholder}
											onChange={field.onChange}
											value={String(field.value)}
											options={options}
											triggerClassName={triggerClassName}
										/>
									)}
									key={name}
								/>
							)
						)}
					</ProfileFormFieldCard>

					<ProfileFormFieldCard>
						<FormField
							control={form.control}
							name='name'
							render={({ field }) => (
								<FormItem className='flex flex-col gap-2'>
									<FormLabel htmlFor={field.name} className='text-base'>
										#ИМЯ
									</FormLabel>
									<Input
										id={field.name}
										onChange={field.onChange}
										defaultValue={field.value}
										placeholder='Введите ваше имя'
									/>
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='status'
							render={({ field }) => (
								<ProfileSelectItem
									label='#СТАТУС'
									placeholder='Выберите статус'
									onChange={field.onChange}
									value={field.value}
									options={profileState.availableStatuses}
								/>
							)}
						/>
					</ProfileFormFieldCard>

					<Button
						disabled={!form.formState.isDirty}
						className='block w-full rounded-xl py-2 text-lg'
						type='submit'
					>
						СОХРАНИТЬ
					</Button>
				</form>
			</Form>

			<Button
				onClick={() =>
					profileState.setCheatsEnabled(!profileState.cheatsEnabled)
				}
				className='mt-32'
			>
				Читы
			</Button>
		</>
	)
}

export { ProfileTab }
