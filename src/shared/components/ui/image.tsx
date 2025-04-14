import { ImgHTMLAttributes } from 'react'

function Image(props: ImgHTMLAttributes<HTMLImageElement>) {
	return <img decoding='async' loading='lazy' fetchPriority='high' {...props} />
}

export { Image }
