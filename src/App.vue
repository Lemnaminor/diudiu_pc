<template>
  <div id="app">

    <headerNav v-if="isLogin"></headerNav>

    <router-view></router-view>

    <comFooter v-if="isLogin"></comFooter>
    <fixedNav v-if="isLogin"></fixedNav>

  </div>
</template>



<script type="text/javascript" id="bdshare_js" data="type=tools"></script>
<script type="text/javascript" id="bdshell_js"></script>
<script type="text/javascript">
  document.getElementById("bdshell_js").src = "http://bdimg.share.baidu.com/static/js/shell_v2.js?cdnversion=" + Math
    .ceil(new Date() / 3600000);

</script>
<script>
  import headerNav from './components/headerNav';
  import comFooter from './components/footer';
  import fixedNav from './components/fixedNav';

  export default {
    data() {
      return {
        path: '',
        isLogin: true
      }
    },
    name: 'App',
    components: {
      headerNav,
      comFooter,
      fixedNav
    },
    // 判断路由
    mounted() {
      this.path = this.$route.path;
      if (this.path == '/login' || this.path == '/register') {
        this.isLogin = false;
      }
    },
    watch: {
      $route(to, from) {
        this.path = to.path;
        if (this.path == '/login' || this.path == '/register') {
          this.isLogin = false;
        } else {
          this.isLogin = true;
        }
      }
    },

  }

</script>


<style>
  @import '//at.alicdn.com/t/font_1068405_5wbjut9perr.css';

</style>
<style lang="scss">
  @import '~@/assets/scss/main';

</style>
