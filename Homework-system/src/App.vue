<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
#app {
  width: 100%;
  height: 100%;
  color: black;
}

body {
  width: 100%;
  height: 100%;
  margin: 0%;
  position: absolute;
}
</style>
