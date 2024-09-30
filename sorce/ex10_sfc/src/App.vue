<template>
    <SiteHeader />
    <SiteMain />
    <SiteFooter />
</template>

<script>
import SiteHeader from  "./components/SiteHeader.vue"
import SiteFooter from  "./components/SiteFooter.vue"
import SiteMain from  "./components/SiteMain.vue"
export default {
  name: 'App',
  components : {SiteHeader , SiteFooter , SiteMain },  // {a:a , b:b}  > {a , b} 생략해서 

  setup() {
     return {

    }
  }
}
</script>

<style>

</style>
