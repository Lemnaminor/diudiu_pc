<template>
  <div id="hotNewsList_box">
    <a-list itemLayout="vertical" size="small" :dataSource="hotNewsListData">
      <div slot="header">热门文章</div>
      <a-list-item slot="renderItem" slot-scope="item,index" key="item.title" v-if="index < 3">
        <a-row>
          <a-col :span="24" class="hotNewsList_cont1">
            <router-link :to="{ path:'detail', query: {objectId: item.objectId} }" target="_blank">
              <strong>{{item.title}}</strong>
              <p>{{item.describe}}</p>
            </router-link>
            <div>
              <span><i class="iconfont icon-lishi"></i>{{item.time}}</span>
              <span><i class="iconfont icon-liulan"></i>{{item.browse}}</span>
            </div>
          </a-col>
          <!-- <a-col :span="8" class="hotNewsList_cont2">
                        <img :src="item.newsImg" alt="">
                    </a-col> -->
        </a-row>
      </a-list-item>
    </a-list>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        hotNewsListData: [],
      }
    },
    created() {
      const query = Bmob.Query('news');
      query.order("-browse");
      query.find().then(res => {

        console.log('hotNews');
        this.hotNewsListData = res;


      }).catch(err => {
        console.log(err)
      })
    },
  }

</script>


<style lang="scss">
  @import "~@/assets/scss/_hotNewsList";

</style>
