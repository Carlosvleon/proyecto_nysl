<template>
  <div class="home  container">
    <HomeContenido />
    <div class=" fixed-bottom mb-1">
    <BotonListado />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeContenido from "@/components/HomeContenido.vue"
import BotonListado from "@/components/BotonListado.vue"

export default {
  name: "Home",
  components: {
    HomeContenido,
    BotonListado
  }
}
</script>

<style lang="sass" scoped>
.home
  background: linear-gradient( #009688 40%, #ffffff 40%)
  position: absolute
  top: 0
  bottom: 0
  right: 0
  left: 0
  
</style>