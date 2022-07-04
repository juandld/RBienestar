import { ref, computed } from 'vue'

export const collapsed = ref(false)
export const toggleSidebar = () => (collapsed.value = !collapsed.value)

export const SIDEBAR_HEIGHT = 400
export const SIDEBAR_HEIGHT_COLLAPSED = 40
export const sidebarHeight = computed(
  () => `${collapsed.value ? SIDEBAR_HEIGHT_COLLAPSED : SIDEBAR_HEIGHT}px`)
