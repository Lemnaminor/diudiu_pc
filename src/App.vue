<template>
  <div id="app">
    
    <headerNav></headerNav>
    <router-view/>

    <div class="index_footer">
      <div class="cont">
        <comFooter></comFooter>
      </div>
    </div>
    <fixedNav></fixedNav>

  </div>
</template>


<script type="text/javascript" id="bdshare_js" data="type=tools" ></script>
<script type="text/javascript" id="bdshell_js"></script>
<script type="text/javascript">
    document.getElementById("bdshell_js").src = "http://bdimg.share.baidu.com/static/js/shell_v2.js?cdnversion=" + Math.ceil(new Date()/3600000);
</script>
<script>

  import headerNav from './components/headerNav';
  import comFooter from './components/footer';
  import fixedNav from './components/fixedNav';

  export default {
    name: 'App',
    components: {
      headerNav,
      comFooter,
      fixedNav
    }
  }
</script>


<style>
  @import '//at.alicdn.com/t/font_1068405_j55t4i0zyg8.css';
</style>
<style lang="scss">
  @import '~@/assets/scss/main';
</style>