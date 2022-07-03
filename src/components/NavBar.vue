<template>
  <header :class="{'scrolled-nav': scrollPosition}">
    <nav>
      <div>
        <img src="src\assets\logo.svg" alt="RBienestar Logo">
      </div>  
      <ul v-show="!mobile" class="navigation">
        <li class="link"><router-link :to="{name: 'home'}">Inicio</router-link></li>
        <li class="link"><router-link :to="{name: 'about'}">Sobre nosotros</router-link></li>
      </ul>
      <div class="icon">
        <i @click="toggleMobileNav" v-show="mobile" class="fa fa-bars" :class="{'icon-active' : mobileNav}"></i>
        <transition name="mobile-nav">
          <ul v-show="mobileNav" class="dropdown-nav">
            <li class="link"><router-link  :to="{name: 'home'}">Inicio</router-link></li>
            <li class="link"><router-link  :to="{name: 'about'}">Sobre nosotros</router-link></li>
          </ul>
        </transition>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      scrollPosition: null,
      mobile: false,
      mobileNav: null,
    }
  },
};
</script>

<style scoped>
header {
  background: rgba(252, 252, 252, 0.3);
  backdrop-filter: blur(14px);
  /* Note: backdrop-filter has minimal browser support */
  top: 0;
  border-radius: 0px 0px 20px 20px;
  position: fixed;
  z-index: 99;
  width: 100%;
  transition: .5s ease all;

}
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    padding: 12px;
    transition: .5s ease all;
    width: 90%;
    }

   @media(min-width: 1140px) {
      nav {
        max-width: 1140px;
      }
    }
  .link {
    text-decoration: none;
    color: #000;
    list-style-type: none;
  }

  .navigation {
    display: flex;
    
    flex-direction: row;
    padding: 12px;
    transition: .5s ease all;
    width: 90%;
  }

</style>
