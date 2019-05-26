<template>
  <div id="personal_box" class="cont">
    <a-layout-content>
      <breadCrumb></breadCrumb>
    </a-layout-content>
    <a-layout-content>
      <a-row type="flex" justify="space-between">
        <a-col :span="16" class="personal_cont1">
            <personalBasic></personalBasic>
        </a-col>
        <a-col :span="7">
            <personalReply></personalReply>
        </a-col>
      </a-row>
    </a-layout-content>
  </div>
</template>


<script>
  import breadCrumb from "../components/breadCrumb"
  import list from "../components/list"
  import personalBasic from "../components/personalBasic"
  import personalReply from "../components/personalReply"

  export default {
    data() {
      return {

      }
    },
    components: {
      breadCrumb,
      list,
      personalBasic,
      personalReply,
    }
  }

</script>


<style lang="scss">
  @import '~@/assets/scss/_personal';

</style>
