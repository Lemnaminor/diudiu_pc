<template>
  <div id="listFormDetail_box">

    <a-layout-content class="listFormDetail_cont1">
      <h2>标题文字标题文字标题文字标题文字标题文字标题文字标题文字</h2>
      <div class="listFormDetail_cont1_info">
        <span>发布时间：2019-05-21 00:00:00</span>
        <span>来源：丢丢网</span>
        <span>浏览量：666</span>
      </div>

      <div class="listFormDetail_cont1_content">
        <p>
          东西丢了东西丢了东西丢了东西丢了东西丢了东西丢了东西丢了东西丢了东西丢了东西丢了
          东西丢了东西丢了东西丢了东西丢了东西丢了东西丢了东西丢了东西丢了东西丢了东西丢了
          东西丢了东西丢了东西丢了东西丢了东西丢了东西丢了东西丢了东西丢了东西丢了东西丢了
          东西丢了东西丢了东西丢了东西丢了东西丢了东西丢了东西丢了东西丢了东西丢了东西丢了
          东西丢了东西丢了东西丢了东西丢了东西丢了东西丢了东西丢了东西丢了东西丢了东西丢了
          东西丢了东西丢了东西丢了东西丢了东西丢了东西丢了东西丢了东西丢了东西丢了东西丢了
          东西丢了东西丢了东西丢了东西丢了东西丢了东西丢了东西丢了东西丢了东西丢了东西丢了
          东西丢了东西丢了东西丢了东西丢了东西丢了东西丢了东西丢了东西丢了东西丢了东西丢了
        </p>
      </div>

      <a-row class="listFormDetail_cont1_img">
        <a-col :span="24">
          <img src="http://diudiuo.com/images/case1.jpg" alt="">
        </a-col>
      </a-row>

      <a-row class="listFormDetail_basic">
        <a-col :span="24">
          <a-col :span="3">
            <span><i class="iconfont icon-dingdan"></i>寻找状态：</span>
          </a-col>
          <a-col :span="21">
            <a-tag color="#2db7f5">正在寻找</a-tag>
            <a-tag color="#87d068">已找到</a-tag>
          </a-col>
        </a-col>
        <a-col :span="24">
          <a-col :span="3">
            <span><i class="iconfont icon-fenlei"></i>物品分类：</span>
          </a-col>
          <a-col :span="21">
            <p>寻物启事/钥匙</p>
          </a-col>
        </a-col>
        <a-col :span="24">
          <a-col :span="3">
            <span><i class="iconfont icon-lishi"></i>丢失时间：</span>
          </a-col>
          <a-col :span="21">
            <p>2019-05-21 00:00:00</p>
          </a-col>
        </a-col>
        <a-col :span="24">
          <a-col :span="3">
            <span><i class="iconfont icon-dingwei"></i>丢失地点：</span>
          </a-col>
          <a-col :span="21">
            <p>河南-郑州市-金水区 春熙路</p>
          </a-col>
        </a-col>
        <a-col :span="24">
          <a-col :span="3">
            <span><i class="iconfont icon-wode"></i>联系人：</span>
          </a-col>
          <a-col :span="21">
            <p>老王</p>
          </a-col>
        </a-col>
        <a-col :span="24">
          <a-col :span="3">
            <span><i class="iconfont icon-dianhua"></i>联系电话：</span>
          </a-col>
          <a-col :span="21">
            <p>13566668888</p>
          </a-col>
        </a-col>
        <a-col :span="24">
          <a-col :span="3">
            <span><i class="iconfont icon-QQ"></i>联系QQ：</span>
          </a-col>
          <a-col :span="21">
            <p>291294950</p>
          </a-col>
        </a-col>
        <a-col :span="24">
          <a-col :span="3">
            <span><i class="iconfont icon-email"></i>联系邮箱：</span>
          </a-col>
          <a-col :span="21">
            <p>291294950@qq.com</p>
          </a-col>
        </a-col>
        <a-col :span="24">
          <a-col :span="3">
            <span><i class="iconfont icon-dingwei"></i>联系地址：</span>
          </a-col>
          <a-col :span="21">
            <p>河南-郑州市-金水区 春熙路</p>
          </a-col>
        </a-col>
        <a-col :span="24">
          <p class="careful_p1"><span><i class="iconfont icon-jine2"></i>注意：</span>为保护用户信息，联系人部分详细信息请登录后查看！</p>
        </a-col>
      </a-row>

      <div class="listFormDetail_cont1_share">
        <a-row>
          <a-col :span="12">
            <span class="listFormDetail_cont1_span1">分享到：</span>
            <div id="bdshare" class="bdsharebuttonbox bdshare_t bds_tools get-codes-bdshare">
              <a href="#" class="bds_more" data-cmd="more"></a>
              <a href="#" class="bds_tsina" data-cmd="tsina" title="分享到新浪微博"></a>
              <a href="#" class="bds_sqq" data-cmd="sqq" title="分享到QQ好友"></a>
              <a href="#" class="bds_qzone" data-cmd="qzone" title="分享到QQ空间"></a>
              <a href="#" class="bds_weixin" data-cmd="weixin" title="分享到微信"></a>
            </div>
          </a-col>
          <a-col :span="12" class="listFormDetail_right">
            <a-button type="danger" size="small" ghost>举报此信息</a-button>
          </a-col>
        </a-row>
      </div>
    </a-layout-content>

    <!-- <a-row>
      <a-col :span="3">
1
      </a-col>
      <a-col :span="21">
2
      </a-col>
    </a-row> -->
  </div>
</template>


<script>
  export default {
    data() {
      return {

      }
    },
    components: {

    }
  }

</script>


<style lang="scss">
  @import '~@/assets/scss/_listFormDetail';

</style>
