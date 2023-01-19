<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
// import {http} from '@/http/interceptor'
export default {
  name: 'App',
  watch: {
      '$route' (to, from) {
        // console.log(to)
        document.title = to.meta.title || 'Seu site'
      }
    },
    // mounted(){
    //   console.log(http)
    // }
}

</script>
<style>
</style>
