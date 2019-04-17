<template>
  <div id="app">
    <headerNav></headerNav>
    <router-view/>

    <div class="index_footer">
      <div class="cont">
        <comFooter></comFooter>
      </div>
    </div>
  </div>
</template>

<script>

  import headerNav from './components/headerNav';
  import comFooter from './components/footer';

  export default {
    name: 'App',
    components: {
      headerNav,
      comFooter
    }
  }
</script>


<style>
  @import '//at.alicdn.com/t/font_1068405_1uqcp57coy8.css';
</style>
<style lang="scss">
  @import '~@/assets/scss/main';
</style>