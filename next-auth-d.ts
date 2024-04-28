declare module 'next-auth/jwt' {
	interface JWT {
		accessToken: string
		accessTokenExpiresAt: string
		refreshToken: string
		user: any
	}
}

declare module 'next-auth' {
	interface Session {
		accessToken: string
		refreshToken: string
		user: any
	}

	interface User {
		accessToken: string
		accessTokenExpiresAt: string
		refreshToken: string
		data: any
	}
}
