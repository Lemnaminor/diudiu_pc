<template>
  <div id="newsList_box">
    
        <a-list itemLayout="vertical" size="large" :pagination="pagination" :dataSource="listData">
            <a-list-item slot="renderItem" slot-scope="item, index" key="item.id">
              <a-row type="flex" justify="space-between">
                <a-col :span="6" class="newsList_info1">
                  <img :src="item.newsImg" alt="">
                </a-col>
                <a-col :span="18" class="newsList_info2">
                  
                  <!-- <router-link :to="{ path:'detail', query: {objectId: item.objectId} }" target="_blank"> -->
                  <router-link to="/detail">
                    <strong>{{item.title}}</strong>
                    <p>{{item.describe}}</p>
                  </router-link>
                  
                  <div class="newsList_info3">
                    <span><i class="iconfont icon-lishi"></i>{{item.time}}</span>
                    <span><i class="iconfont icon-liulan"></i>{{item.browse}}</span>
                  </div>
                </a-col>
              </a-row>
            </a-list-item>
          </a-list>
  </div>
</template>
<script>
  // const listData = [
  //     {
          // "hrefUrl": "../detail/newsDetail",
          // "openType": "navigate",
          // "newsImg": "http://diudiuo.com/images/case1.jpg",
          // "title": "11锤子科技无限屏手机坚果 Pro 2S 发布，售价 1798 元起",
          // "describe": "2018 年 8 月 20 日，锤子科技 2018 夏季新品发布会在北京凯迪拉克中心(原五棵松体育馆)举办",
          // "source": "本网站",
          // "time": "2019-02-26 10:10",
          // "browse": "6515"
  //     },
  //     {
  //         "hrefUrl": "../detail/newsDetail",
  //         "openType": "navigate",
  //         "newsImg": "http://diudiuo.com/images/case2.jpg",
  //         "title": "111锤子科技鸟巢发布革命性产品坚果 TNT 工作站和旗舰坚果 R1",
  //         "describe": "2018 年 5 月 15 日，锤子科技 2018 鸟巢新品发布会在国家体育场（鸟巢）举办，正式发布了备受期待的革命性产品——坚果 TNT 工作站（显示器），同时也推出了“次世代旗舰手机”坚果 R1，以及坚果 Pro 2 特别版。",
  //         "source": "本网站",
  //         "time": "2019-02-26 10:10",
  //         "browse": "6515"
  //     },
  //     {
  //         "hrefUrl": "../detail/newsDetail",
  //         "openType": "navigate",
  //         "newsImg": "http://diudiuo.com/images/case3.jpg",
  //         "title": "11111锤子科技发布三面无边框全面屏手机坚果 3 售价 1299 元起",
  //         "describe": "【 4 月 9 日 北京】锤子科技 2018 春季新品发布会在北京工业大学奥林匹克体育馆举行",
  //         "source": "本网站",
  //         "time": "2019-02-26 10:10",
  //         "browse": "6515"
  //     },
  //     {
  //         "hrefUrl": "../detail/newsDetail",
  //         "openType": "navigate",
  //         "newsImg": "http://diudiuo.com/images/case4.jpg",
  //         "title": "1锤子科技无限屏手机坚果 Pro 2S 发布，售价 1798 元起",
  //         "describe": "2018 年 8 月 20 日，锤子科技 2018 夏季新品发布会在北京凯迪拉克中心(原五棵松体育馆)举办",
  //         "source": "本网站",
  //         "time": "2019-02-26 10:10",
  //         "browse": "6515"
  //     },
  //     {
  //         "hrefUrl": "../detail/newsDetail",
  //         "openType": "navigate",
  //         "newsImg": "http://diudiuo.com/images/case1.jpg",
  //         "title": "1锤子科技鸟巢发布革命性产品坚果 TNT 工作站和旗舰坚果 R1",
  //         "describe": "2018 年 5 月 15 日，锤子科技 2018 鸟巢新品发布会在国家体育场（鸟巢）举办，正式发布了备受期待的革命性产品——坚果 TNT 工作站（显示器），同时也推出了“次世代旗舰手机”坚果 R1，以及坚果 Pro 2 特别版。",
  //         "source": "本网站",
  //         "time": "2019-02-26 10:10",
  //         "browse": "6515"
  //     },
  //     {
  //         "hrefUrl": "../detail/newsDetail",
  //         "openType": "navigate",
  //         "newsImg": "http://diudiuo.com/images/case1.jpg",
  //         "title": "11锤子科技无限屏手机坚果 Pro 2S 发布，售价 1798 元起",
  //         "describe": "2018 年 8 月 20 日，锤子科技 2018 夏季新品发布会在北京凯迪拉克中心(原五棵松体育馆)举办",
  //         "source": "本网站",
  //         "time": "2019-02-26 10:10",
  //         "browse": "6515"
  //     },
  //     {
  //         "hrefUrl": "../detail/newsDetail",
  //         "openType": "navigate",
  //         "newsImg": "http://diudiuo.com/images/case2.jpg",
  //         "title": "111锤子科技鸟巢发布革命性产品坚果 TNT 工作站和旗舰坚果 R1",
  //         "describe": "2018 年 5 月 15 日，锤子科技 2018 鸟巢新品发布会在国家体育场（鸟巢）举办，正式发布了备受期待的革命性产品——坚果 TNT 工作站（显示器），同时也推出了“次世代旗舰手机”坚果 R1，以及坚果 Pro 2 特别版。",
  //         "source": "本网站",
  //         "time": "2019-02-26 10:10",
  //         "browse": "6515"
  //     },
  //     {
  //         "hrefUrl": "../detail/newsDetail",
  //         "openType": "navigate",
  //         "newsImg": "http://diudiuo.com/images/case3.jpg",
  //         "title": "11111锤子科技发布三面无边框全面屏手机坚果 3 售价 1299 元起",
  //         "describe": "【 4 月 9 日 北京】锤子科技 2018 春季新品发布会在北京工业大学奥林匹克体育馆举行",
  //         "source": "本网站",
  //         "time": "2019-02-26 10:10",
  //         "browse": "6515"
  //     },
  //     {
  //         "hrefUrl": "../detail/newsDetail",
  //         "openType": "navigate",
  //         "newsImg": "http://diudiuo.com/images/case4.jpg",
  //         "title": "1锤子科技无限屏手机坚果 Pro 2S 发布，售价 1798 元起",
  //         "describe": "2018 年 8 月 20 日，锤子科技 2018 夏季新品发布会在北京凯迪拉克中心(原五棵松体育馆)举办",
  //         "source": "本网站",
  //         "time": "2019-02-26 10:10",
  //         "browse": "6515"
  //     },
  //     {
  //         "hrefUrl": "../detail/newsDetail",
  //         "openType": "navigate",
  //         "newsImg": "http://diudiuo.com/images/case1.jpg",
  //         "title": "1锤子科技鸟巢发布革命性产品坚果 TNT 工作站和旗舰坚果 R1",
  //         "describe": "2018 年 5 月 15 日，锤子科技 2018 鸟巢新品发布会在国家体育场（鸟巢）举办，正式发布了备受期待的革命性产品——坚果 TNT 工作站（显示器），同时也推出了“次世代旗舰手机”坚果 R1，以及坚果 Pro 2 特别版。",
  //         "source": "本网站",
  //         "time": "2019-02-26 10:10",
  //         "browse": "6515"
  //     }
  // ]

  export default {
    data() {
      return {
        listData: [],
        pagination: {
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 5,
        },

      }
    },
    created() {
      console.log('created!!');

      // let addNewsList = {
      //   "hrefUrl": "../detail/newsDetail",
      //   "openType": "navigate",
      //   "newsImg": "http://diudiuo.com/images/case2.jpg",
      //   "title": "新增标题测试222新增标题测试666666",
      //   "describe": "2018 年 5 月 15 日，锤子科技 2018 鸟巢新品发布会在国家体育场（鸟巢）举办，正式发布了备受期待的革命性产品——坚果 TNT 工作站（显示器），同时也推出了“次世代旗舰手机”坚果 R1，以及坚果 Pro 2 特别版。",
      //   "content": "内容11锤子科技无限屏手机坚果 Pro 2S 发布，售价 1798 元起2018 年 8 月 20 日，锤子科技 2018 夏季新品发布会在北京凯迪拉克中心(原五棵松体育馆)举办2018 年 8 月 20 日，锤子科技 2018 夏季新品发布会在北京凯迪拉克中心(原五棵松体育馆)举办2018 年 8 月 20 日，锤子科技 2018 夏季新品发布会在北京凯迪拉克中心(原五棵松体育馆)举办2018 年 8 月 20 日，锤子科技 2018 夏季新品发布会在北京凯迪拉克中心(原五棵松体育馆)举办2018 年 8 月 20 日，锤子科技 2018 夏季新品发布会在北京凯迪拉克中心(原五棵松体育馆)举办2018 年 8 月 20 日，锤子科技 2018 夏季新品发布会在北京凯迪拉克中心(原五棵松体育馆)举办2018 年 8 月 20 日，锤子科技 2018 夏季新品发布会在北京凯迪拉克中心(原五棵松体育馆)举办2018 年 8 月 20 日，锤子科技 2018 夏季新品发布会在北京凯迪拉克中心(原五棵松体育馆)举办2018 年 8 月 20 日，锤子科技 2018 夏季新品发布会在北京凯迪拉克中心(原五棵松体育馆)举办2018 年 8 月 20 日，锤子科技 2018 夏季新品发布会在北京凯迪拉克中心(原五棵松体育馆)举办2018 年 8 月 20 日，锤子科技 2018 夏季新品发布会在北京凯迪拉克中心(原五棵松体育馆)举办2018 年 8 月 20 日，锤子科技 2018 夏季新品发布会在北京凯迪拉克中心(原五棵松体育馆)举办2018 年 8 月 20 日，锤子科技 2018 夏季新品发布会在北京凯迪拉克中心(原五棵松体育馆)举办2018 年 8 月 20 日，锤子科技 2018 夏季新品发布会在北京凯迪拉克中心(原五棵松体育馆)举办2018 年 8 月 20 日，锤子科技 2018 夏季新品发布会在北京凯迪拉克中心(原五棵松体育馆)举办2018 年 8 月 20 日，锤子科技 2018 夏季新品发布会在北京凯迪拉克中心(原五棵松体育馆)举办2018 年 8 月 20 日，锤子科技 2018 夏季新品发布会在北京凯迪拉克中心(原五棵松体育馆)举办2018 年 8 月 20 日，锤子科技 2018 夏季新品发布会在北京凯迪拉克中心(原五棵松体育馆)举办2018 年 8 月 20 日，锤子科技 2018 夏季新品发布会在北京凯迪拉克中心(原五棵松体育馆)举办2018 年 8 月 20 日，锤子科技 2018 夏季新品发布会在北京凯迪拉克中心(原五棵松体育馆)举办",
      //   "source": "本网站",
      //   "time": "2019-02-26 10:10",
      //   "browse": 66
      //   }

        const query = Bmob.Query('news');
        // query.save(addNewsList).then(res => {
        // console.log(res)
        // }).catch(err => {
        // console.log(err)
        // })

      query.find().then(res => {
        console.log(res);
        
        this.listData = res.reverse();

        console.log('ok');
        console.log(this.listData);
      }).catch(err => {
        console.log(err)
      })
      
    },
    mounted() {

      console.log('mounted!!');


    }
  }

</script>


<style lang="scss">
  @import "~@/assets/scss/_newsList";
</style>
