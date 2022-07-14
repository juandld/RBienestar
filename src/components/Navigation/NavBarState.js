import { ref, computed } from 'vue'

//Initializing collapse state.
export const collapsed = ref(true)
export const toggleSidebar = () => (collapsed.value = !collapsed.value)

export const SIDEBAR_HEIGHT = 500
export const SIDEBAR_HEIGHT_COLLAPSED = 100
export const sidebarHeight = computed(
  () => `${collapsed.value ? SIDEBAR_HEIGHT_COLLAPSED : SIDEBAR_HEIGHT}px`)

//Not final implementation, will use pinia in future.