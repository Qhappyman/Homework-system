<template>
  <div>
    <IndexNav></IndexNav>
    <IndexBody></IndexBody>
  </div>
</template>

<script>
import IndexNav from './nav'
import IndexBody from './body'
export default {
  name:'Index',
  components:{
    IndexNav,
    IndexBody,
  }
}
</script>

<style scoped>
</style>
