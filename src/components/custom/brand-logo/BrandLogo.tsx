import Image from 'next/image'

type BrandLogoProps = { addHomeLink?: boolean }

export const BrandLogo = ({ addHomeLink }: BrandLogoProps) => {
	const image = <Image src="/images/midas-initive-logo.svg" width={50} height={85} alt="logo" />

	if (addHomeLink) {
		return <a href="/">{image}</a>
	}

	return image
}
