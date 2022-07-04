<script>
import NavBarLink from './NavBarLink.vue'
import { collapsed, toggleSidebar, sidebarHeight } from './state'

export default {
  props: {},
  components: { NavBarLink },
  setup() {
    return { collapsed, toggleSidebar, sidebarHeight }
  }
}
</script>

<template>
  <div class="sidebar" :style="{ height: sidebarHeight }">
    <h1>
      <div v-if="collapsed">
        <img src="src\assets\logo.svg" alt="Relax y Bienestar logo">
      </div>
      <div v-else>Bienestar y Relax</div>
    </h1>
    
    <nav v-if="!collapsed">
      <NavBarLink to="/" icon="fas fa-home">Home</NavBarLink>
      <NavBarLink to="/analytics" icon="fas fa-chart-bar">Analytics</NavBarLink>
    </nav>
    
    <span
      class="collapse-icon"
      :class="{ 'rotate-180': collapsed }"
      @click="toggleSidebar"
    >
      <i class="fas fa-bars" />
    </span>
  </div>
</template>

<style>
:root {
  --sidebar-bg-color: rgba(255, 255, 255, 0.3);
  --sidebar-item-hover: #38a169;
  --sidebar-item-active: #276749;
}
</style>

<style scoped>
.sidebar {
  color: rgb(8, 139, 25);
  background-color: var(--sidebar-bg-color);
  top: 0;
  left: 0;
  position: fixed;
  z-index: 1;
  padding: 0.5em;
  width: 97%;
  backdrop-filter: blur(14px);
/* Note: backdrop-filter has minimal browser support */

  border-radius: 0px 0px 20px 20px;
  transition: 0.3s ease;

  display: flex;
}

.sidebar h1 {
  height: 2.5em;
}

.collapse-icon {
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 0.75em;

  color: rgba(0, 0, 0, 0.7);

  transition: 0.2s linear;
}

.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}
</style>
