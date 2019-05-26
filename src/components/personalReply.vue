<template>
  <div id="personalReply_box">
    <a-row>
      <a-col :span="24" class="personalReplay_cont1">
        <h2>我的发布/回复</h2>
        <a-col :span="12">
          <router-link to='/reply'>
            <span>2</span>
            <p>发布</p>
          </router-link>
        </a-col>
        <a-col :span="12">
          <router-link to='/reply'>
            <span v-if="replyCount == 0">{{replyCount}}</span>
            <a-badge v-else :count="replyCount" />
            <p>回复</p>
          </router-link>
        </a-col>
      </a-col>
    </a-row>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        replyCount: 1,
      }
    },
  }

</script>


<style lang="scss">
  @import '~@/assets/scss/_personalReply';

</style>
