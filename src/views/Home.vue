<template>
<div class="HeadlineContainer">
    <img class="bgImage" src="src\assets\tea-tree.svg" alt="Arbol de te fondo">
    <div class="centered">
        <h2>En Toda Colombia</h2>
        <h1>NIKKEN</h1>
    </div>
    
</div>

</template>

<script>

export default {
    name: 'Home',
    components: {

    }
}
</script>

<style scoped lang="scss">
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


</style>