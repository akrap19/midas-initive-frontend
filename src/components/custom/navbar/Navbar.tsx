'use client'

import { Button } from '@/components/inputs/button'
import { Box } from '@/components/layout/box'
import { Inline } from '@/components/layout/inline'
import { Text } from '@/components/typography/text'
import { useTranslations } from 'next-intl'
import { BrandLogo } from '../brand-logo/BrandLogo'
import { navbarData } from './data'

import * as styles from './Navbar.css'

export const Navbar = () => {
	const t = useTranslations()

	return (
		<Box className={styles.navbar}>
			<BrandLogo />
			<Inline alignItems="center" gap={4}>
				{navbarData.map(item => (
					<Button variant="adaptive">
						<Text fontWeight="semibold" fontSize="xbig" color="primary.400">
							{t(item.title)}
						</Text>
					</Button>
				))}
			</Inline>
		</Box>
	)
}
