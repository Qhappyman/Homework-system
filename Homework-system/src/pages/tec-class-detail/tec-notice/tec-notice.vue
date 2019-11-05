<template>
  <div>
      <router-view></router-view>
  </div>
</template>

<script>
import Notice from './notice-list'
import ReleaseNotice from './release-notice'
export default {
name:'TecNotice',
components:{
Notice,
ReleaseNotice
}
}
</script>

<style>

</style>