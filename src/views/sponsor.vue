<template>
  <div id="sponsor_box" class="cont">
    <breadCrumb></breadCrumb>
    <a-layout-content class="sponsor_cont1">
        <p class="p1">您的一点点支持，将是我们前进的巨大动力！</p>
      <a-row>
        <a-col :span="12" class="sponsor_left">
          <div>
            <img src="~images/wx-pay.png" alt="">
            <p>微信收款二维码</p>
          </div>
        </a-col>
        <a-col :span="12" class="sponsor_right">
          <div>
            <img src="~images/zfb-pay.jpg" alt="">
            <p>支付宝收款二维码</p>
          </div>
        </a-col>
      </a-row>
    </a-layout-content>
  </div>
</template>


<script>
  import breadCrumb from "../components/breadCrumb"

  export default {
    data() {
      return {

      }
    },
    components: {
      breadCrumb,
    }
  }

</script>


<style lang="scss">
  @import '~@/assets/scss/_sponsor';

</style>
