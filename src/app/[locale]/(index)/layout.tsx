import { Metadata } from 'next'
import { ReactNode } from 'react'

import { Navbar } from '@/components/custom/navbar'
import { Box } from '@/components/layout/box'
import { Stack } from '@/components/layout/stack'

export const metadata: Metadata = {
	title: 'Journeys | Dashboard',
	description: 'Barnahus Journeys'
}

const DashboardLayout = async ({ children }: { children: ReactNode }) => {
	return (
		<Box flex="1" backgroundColor="neutral.800" overflow="auto">
			<Stack>
				<Navbar />
				<Box position="relative" display="flex" align="center" paddingY={16} paddingX={48} overflow="auto">
					{children}
				</Box>
			</Stack>
		</Box>
	)
}

export default DashboardLayout
