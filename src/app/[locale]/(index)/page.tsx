'use client'

import { useTranslations } from 'next-intl'

import { Button } from '@/components/inputs/button'
import { Box } from '@/components/layout/box'
import { Inline } from '@/components/layout/inline'
import { Stack } from '@/components/layout/stack'
import { Text } from '@/components/typography/text'

const HomePage = async () => {
	const t = useTranslations()

	return (
		<Box width="100%">
			<Box paddingTop={32} paddingBottom={24}>
				<Inline justifyContent="space-between">
					<Box style={{ height: 'calc(100vh - 248px)' }}>
						<img src="/images/midas-initive-logo-large.png" alt="logo" style={{ height: '100%' }} />
					</Box>
					<Box style={{ maxWidth: '55%' }}>
						<Stack gap={12}>
							<Box style={{ maxWidth: '75%' }}>
								<Text color="shades.00" fontWeight="heavy" fontSize="xxlarge">
									{t('General.mainPageBigText')}
								</Text>
							</Box>
							<Box style={{ maxWidth: '45%' }}>
								<Text color="shades.00" fontSize="medium">
									{t('General.mainPageSubText')}
								</Text>
							</Box>
							<Box width="100%">
								<Button size="xlarge" href="/">
									{t('General.tradeToken')}
								</Button>
							</Box>
						</Stack>
					</Box>
				</Inline>
			</Box>
			<Box width="100%" position="absolute" backgroundColor="shades.100" style={{ height: '50px', left: '0' }} />
			<Box paddingTop={20} paddingBottom={24}>
				<Inline justifyContent="space-between">
					<Box paddingTop={48} style={{ maxWidth: '45%' }}>
						<Stack gap={10}>
							<Box style={{ maxWidth: '75%' }}>
								<Text color="shades.00" fontWeight="heavy" fontSize="xlarge2">
									{t('General.cryptoTradingRevolution')}
								</Text>
							</Box>
							<Box style={{ maxWidth: '45%' }}>
								<Text color="shades.00" fontSize="medium">
									{t('General.mainPageSubText')}
								</Text>
							</Box>
						</Stack>
					</Box>
					<Box style={{ height: 'calc(100vh - 248px)' }}>
						<img src="/images/chemistry.svg" alt="logo" style={{ height: '100%' }} />
					</Box>
				</Inline>
			</Box>
		</Box>
	)
}

export default HomePage
