<script>
import NavBarLink from './NavBarLink.vue'
import { collapsed, toggleSidebar, sidebarHeight } from './NavBarState'

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
    <div class="navLogo">
      <img src="src\assets\logo.svg" alt="Relax y Bienestar logo">
    </div>
    <span
      class="collapse-icon"
      :class="{ 'rotate-180': collapsed }"
      @click="toggleSidebar"
    >
      <i class="fas fa-bars" />
    </span>  
    <nav v-if="!collapsed">
      <NavBarLink to="/" icon="fas fa-home">Home</NavBarLink>
      <NavBarLink to="/analytics" icon="fas fa-chart-bar">BLOG</NavBarLink>
      <NavBarLink to="/analytics" icon="fas fa-chart-bar">PRODUCTOS</NavBarLink>
      <NavBarLink to="/analytics" icon="fas fa-chart-bar">CURSOS</NavBarLink>
      <NavBarLink to="/analytics" icon="fas fa-chart-bar">LIBROS</NavBarLink>
      <NavBarLink to="/analytics" icon="fas fa-chart-bar">CATEGORIAS</NavBarLink>
      <NavBarLink to="/analytics" icon="fas fa-chart-bar">CONTACTO</NavBarLink>
    </nav>
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
img {
  margin: 10%;
  max-width: 200px;
}

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
  justify-content: space-between;
  align-items: center;

}

.collapse-icon {
  padding: 0.75em;
  color: rgba(0, 0, 0, 0.7);
  transition: 0.2s linear;
  font-size: 2em;
}

.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}

</style>
