<template>
  <div id="news_box" class="cont">
    <a-layout-content>
      <breadCrumb></breadCrumb>
    </a-layout-content>
    <a-layout-content>
      <a-row type="flex" justify="space-between">
        <a-col :span="16">
          <newsList></newsList>
        </a-col>
        <a-col :span="7">
          <hotNewsList></hotNewsList>
          <ad class="margin-top-sm"></ad>
        </a-col>
      </a-row>
    </a-layout-content>
  </div>
</template>


<script>
  import newsList from "../components/newsList";
  import hotNewsList from "../components/hotNewsList";
  import ad from "../components/ad"
  import breadCrumb from "../components/breadCrumb"

  export default {
    data() {
      return {

      }
    },
    components: {
      newsList,
      hotNewsList,
      ad,
      breadCrumb
    }
  }

</script>


<style lang="scss">
  @import '~@/assets/scss/_news';

</style>
