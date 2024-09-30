<template>
    <div id="app">
        <Header />
          <main>
            <router-view />
          </main>
        <Footer />
    </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
export default {
  name: 'App',
  components: {
    Header , Footer
  }
}
</script>

<style>
#app {
  padding-bottom: 50px; /* Footer 공간 확보를 위한 패딩 */
}
main {
  padding: 20px;
  min-height: calc(100vh - 100px); /* Header와 Footer를 제외한 영역 */
}
</style>
