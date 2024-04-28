import { style } from '@vanilla-extract/css'

import { tokens } from '@/style/theme.css'

export const navbar = style({
	position: 'absolute',
	width: '100vw',
	zIndex: tokens.indices.over,
	display: 'flex',
	justifyContent: 'space-between',
	padding: ` ${tokens.spacing[4]} ${tokens.spacing[32]}`,
	backgroundColor: tokens.colors['shades.100'],
	boxShadow: tokens.shadows.small
})
