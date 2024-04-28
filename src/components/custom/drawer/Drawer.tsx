'use client'

import { Box } from '@/components/layout/box'
import { Stack } from '@/components/layout/stack'

import { drawer } from './Drawer.css'
import { BrandLogo } from '../brand-logo/BrandLogo'

export const Drawer = () => {
	// const [isOpen, setIsOpen] = useState(false)
	// const pathname = usePathname()
	// const { push } = useRouter()

	// const handleOpen = (route?: string) => {
	// 	if (route && !pathname.includes(route)) {
	// 		push(route)
	// 	} else if (!route) {
	// 		setIsOpen(!isOpen)
	// 	}
	// }

	return (
		<Box className={drawer}>
			<Stack gap={13}>
				<Box paddingLeft={6}>
					<BrandLogo addHomeLink />
				</Box>
				{/* <Stack gap={4}>
					{filtredDrawerItems.map(item => (
						<>
							<DrawerItem item={item} isOpen={isOpen} handleOpen={handleOpen} />
							{item?.subItems &&
								isOpen &&
								item?.subItems.map((subItem: Item) => (
									<DrawerItem item={subItem} isOpen={isOpen} handleOpen={handleOpen} />
								))}
						</>
					))}
				</Stack> */}
			</Stack>
		</Box>
	)
}
