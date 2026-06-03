export {}

declare module 'vue' {
	interface ComponentCustomProperties {
		$t: (key: string, obj?: any) => string
	}
}
