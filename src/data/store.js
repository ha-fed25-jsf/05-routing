import { create } from 'zustand'
import { vegetables } from './products.js'

const useStore = create(set => ({
	vegetables: vegetables,

	// Vi lägger till mutators när det behövs
}))

export { useStore }
