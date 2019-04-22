<template>
  <div id="breadCrumb_box">
    <a-breadcrumb :routes="routes">
      <template slot="itemRender" slot-scope="{route, params, routes, paths}">
        <span v-if="routes.indexOf(route) === routes.length - 1">
          {{route.breadcrumbName}}
        </span>
        <router-link v-else-if="routes.indexOf(route) === 0" :to="`${paths}`">
          <a-icon type="home" />
          {{route.breadcrumbName}}
        </router-link>
        <router-link v-else :to="`${paths}`">
          {{route.breadcrumbName}}
        </router-link>
      </template>
    </a-breadcrumb>
  </div>
</template>


<script>
  export default {
    data() {
      //   const { lang } = this.$route.params
      return {
        // basePath: `/${lang}/`,
        routes: [{
          path: '/',
          breadcrumbName: '首页'
        }, {
          path: '/classifyPage',
          breadcrumbName: '分类寻找'
        }, {
          path: '/classifyPage:1',
          breadcrumbName: '最新'
        }],
      }
    },
  }

</script>


<style lang="scss">
  @import "~@/assets/scss/_breadCrumb";

</style>
