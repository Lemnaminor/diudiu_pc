<template>

  <div>


    <div id="index_box">
      <a-layout-content class="carousel_box">
        <a-row type="flex" justify="space-between">
          <a-col :span="12" class="carousel_cont1">
            <carousel :imgs="imgs"></carousel>
          </a-col>
          <a-col :span="12" class="carousel_cont2">
            <notice></notice>
          </a-col>

        </a-row>
      </a-layout-content>

      <div class="cont list_box1">
        <list></list>
      </div>
    </div>




  </div>
</template>


<script>
  import headerNav from '../components/headerNav'
  import comFooter from '../components/footer'
  import fixedNav from '../components/fixedNav'
  import classify from '../components/classify'
  import list from '../components/list'
  import carousel from '../components/carousel'
  import indexNewsList from '../components/indexNewsList'
  import notice from '../components/notice'


  export default {
    data() {
      return {
        imgs: [{
            url: require('../assets/images/b1.jpg')
          },
          {
            url: require('../assets/images/b2.jpg')
          },
          {
            url: require('../assets/images/b3.jpg')
          },
        ]
      }
    },
    components: {
      headerNav,
      comFooter,
      fixedNav,
      classify,
      list,
      carousel,
      indexNewsList,
      notice
    },
    created: function () {

    },
    methods: {

    }
  }

</script>


<style lang="scss">
  @import '~@/assets/scss/_index';

</style>
