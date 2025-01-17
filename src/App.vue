<template>
<!--   <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/GameInfo">About</router-link>
  </div> -->
  <router-view />
</template>

<!--se integra sass en style y luego se traduce contenido a sass-->
<style lang="sass">

#app 
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50


#nav 
  padding: 0px


#nav a 
  font-weight: bold
  color: #2c3e50


#nav a.router-link-exact-active 
  color: #42b983

</style>
