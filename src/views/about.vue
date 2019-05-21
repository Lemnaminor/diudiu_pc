<template>
  <div id="legal_box" class="cont">
    <breadCrumb></breadCrumb>
    <a-layout-content class="legal_cont1">
      <h3>关于丢丢</h3>
      <p>
        &emsp;&emsp;本网站是全公益项目，不收取任何费用，初衷是借助互联网发动人们的力量，为人们寻回丢失的物品等。
        如果本网站对你有所帮助，以及您愿意为此项目贡献一点力量，请在二维码捐赠页面赞助我们，您的一点支持将是我们前进的动力。<br>
        &emsp;&emsp;网站底部有丢丢网小程序、app平台二维码。请扫码下载使用。
      </p>
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
  @import '~@/assets/scss/_legal';

</style>
