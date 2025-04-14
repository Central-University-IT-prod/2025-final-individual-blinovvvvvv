import { selectFields } from '../model/form/select-fields'
import { formSchema } from '../model/schema/form-schema'
import { ProfileFormFieldCard, useProfileStore } from '@/entities/profile'
import { Button } from '@/shared/components/ui/button'
import { Form, FormField } from '@/shared/components/ui/form'
import { PageTitle } from '@/shared/components/ui/page-title'
import { routes } from '@/shared/routes/routes'
import { ProfileSelectItem } from '@/widgets/profile-select-item'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { toast } from 'sonner'
import { z } from 'zod'

function HomePage() {
	const navigate = useNavigate()

	const isInit = useProfileStore(state => state.isInit)
	const setIsInit = useProfileStore(state => state.setIsInit)

	const setProfileState = useProfileStore(state => state.setState)

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			weight: '',
			height: '',
		},
	})

	function onSubmit(data: z.infer<typeof formSchema>) {
		if (form.formState.isValid) {
			setProfileState({
				weight: +data.weight,
				height: +data.height,
			})
			setIsInit(true)
			toast('Данные сохранены')
			navigate(routes.profile)
		}
	}

	useEffect(() => {
		if (isInit) {
			navigate('/profile')
			return
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<div className='flex h-screen w-screen items-center justify-center'>
			<div className='w-sm'>
				<PageTitle className='text-center'>Привет!</PageTitle>
				<p className='mx-auto mb-6 max-w-2xs text-center font-medium text-[#CACACA]'>
					Давайте заполним данные о Вас, нам это очень нужно
				</p>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className='space-y-3 md:space-y-6'
					>
						<ProfileFormFieldCard>
							{selectFields.map(({ label, name, options, placeholder }) => (
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
										/>
									)}
									key={name}
								/>
							))}
						</ProfileFormFieldCard>

						<Button
							disabled={!form.formState.isValid}
							className='w-full rounded-xl py-2 text-lg'
							type='submit'
						>
							ПРОДОЛЖИТЬ
						</Button>
					</form>
				</Form>
			</div>
		</div>
	)
}

export { HomePage }
