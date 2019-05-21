<template>
  <div id="detail_box" class="cont">

    <a-layout-content>
      <breadCrumb></breadCrumb>
    </a-layout-content>
    <a-layout-content>
      <a-row type="flex" justify="space-between">
        <a-col :span="16">
          <div class="detail_cont">
            <div class="detail_info">
              <h2>{{title}}</h2>
              <p>
                <span>文章来源：{{source}}</span>
                <span>点击量：{{browse}}</span>
                <span>发布时间：{{time}}</span>
              </p>
              <div>
                <p>
                  <em>摘要：</em>
                  {{describe}}
                </p>
              </div>
            </div>
            <div class="detail_content">
              <img :src="newsImg" alt="">
              <p>
                {{content}}
              </p>

            </div>
          </div>
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
  import hotNewsList from "../components/hotNewsList";
  import ad from "../components/ad"
  import breadCrumb from "../components/breadCrumb"

  export default {
    data() {
      return {
        objectId: '',
        newsImg: '',
        title: '',
        describe: '',
        content: '',
        source: '',
        time: '',
        browse: ''
      }
    },
    components: {
      hotNewsList,
      ad,
      breadCrumb
    },
    created() {
      this.objectId = this.$route.query.objectId;
      const query = Bmob.Query('news');
      query.get(this.objectId).then(res => {
        console.log(this.objectId)
        console.log(res)
        if(res){
            this.title = res.title;
            this.describe = res.describe;
            this.content = res.content;
            this.source = res.source;
            this.time = res.time;
            this.browse = res.browse;
            this.newsImg = res.newsImg;
        }
      }).catch(err => {
        console.log(err)
      })
    },

  }

</script>


<style lang="scss">
  @import "~@/assets/scss/_detail";

</style>
