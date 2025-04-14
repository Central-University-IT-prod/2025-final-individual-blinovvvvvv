import { ShopItem } from '../types/shop.types'

export const shopItems: ShopItem[] = [
	{
		price: 250,
		type: 'status',
		value: '#СИГМА',
	},
	{
		price: 500,
		type: 'status',
		value: '#ПРОФИ',
	},
	{
		price: 1000,
		type: 'status',
		value: '#КАЧОК',
	},
	{
		price: 1500,
		type: 'status',
		value: '#ГИГАЧАД',
	},
	{
		price: 250,
		type: 'headwear',
		value: 'КЕПКА',
		path: '/shop/cap.svg',
		className: 'left-[45%] -translate-x-1/2 -top-4',
	},
	{
		price: 500,
		type: 'headwear',
		value: 'ШЛЯПА',
		path: '/shop/hat.svg',
		className: 'left-[60%] -translate-x-1/2 -top-4 rotate-[19deg]',
	},
	{
		price: 750,
		type: 'headwear',
		value: 'КОРОНА',
		path: '/shop/crown.svg',
		className: 'left-[60%] -translate-x-1/2 -top-4 rotate-[19deg]',
	},
	{
		price: 1000,
		type: 'headwear',
		value: 'СТУДЕНТ ЦУ',
		path: '/shop/cu-student.svg',
		className: 'left-[60%] -translate-x-1/2 -top-4 rotate-[19deg]',
	},
]
