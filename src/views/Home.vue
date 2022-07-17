<template>
<div class="HeadlineContainer">
    <img class="bgImage" src="src\assets\tea-tree.svg" alt="Arbol de te fondo">
    <div class="centered">
        <h2>En Toda Colombia</h2>
        <h1>NIKKEN</h1>
    </div>
</div>
  <div class="home">
    <Carousel
      :navigation="true"
      :pagination="true"
      :startAutoPlay="false"
      :timeout="5000"
      class="carousel"
      v-slot="{ currentSlide }"
    >
      <Slide v-for="(slide, index) in carouselSlides" :key="index">
        <div v-show="currentSlide === index + 1" class="slide-info">
          <img :src="`src/assets/placeholders/${slide}.jpg`" alt="" />
        </div>
      </Slide>
    </Carousel>
  </div>
</template>

<script>
import Carousel from "../components/imageView/Carousel.vue";
import Slide from "../components/imageView/Slide.vue";
export default {
  name: "Home",
  components: { Carousel, Slide },
  setup() {
    const carouselSlides = ["item1", "item2", "item3"];
    return { carouselSlides };
  },
};
</script>

<style lang="scss" scoped>
 .HeadlineContainer {
    justify-content: center;
    align-items: center;
    position: relative;
    position: relative;
 }

.centered {
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.carousel {
  position: relative;
  max-height: 100vh;
  height: 100vh;
  .slide-info {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    max-height: 100%;
    height: 100%;
    img {
      min-width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>