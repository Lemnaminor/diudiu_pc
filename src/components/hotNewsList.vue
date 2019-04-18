<template>
    <div id="hotNewsList_box">
        <a-list itemLayout="vertical" size="small" :dataSource="hotNewsListData">
            <div slot="header">热门文章</div>
            <a-list-item slot="renderItem" slot-scope="item,index" key="item.title">
                <a-row>
                    <a-col :span="24" class="hotNewsList_cont1">
                        <strong>{{item.title}}</strong>
                        <p>{{item.describe}}</p>
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
    const hotNewsListData = [
        {
            "hrefUrl": "../detail/newsDetail",
            "openType": "navigate",
            "newsImg": "http://diudiuo.com/images/case1.jpg",
            "title": "11锤子科技无限屏手机坚果 Pro 2S 发布，售价 1798 元起",
            "describe": "2018 年 8 月 20 日，锤子科技 2018 夏季新品发布会在北京凯迪拉克中心(原五棵松体育馆)举办",
            "source": "本网站",
            "time": "2019-02-26 10:10",
            "browse": "6515"
        },
        {
            "hrefUrl": "../detail/newsDetail",
            "openType": "navigate",
            "newsImg": "http://diudiuo.com/images/case2.jpg",
            "title": "111锤子科技鸟巢发布革命性产品坚果 TNT 工作站和旗舰坚果 R1",
            "describe": "2018 年 5 月 15 日，锤子科技 2018 鸟巢新品发布会在国家体育场（鸟巢）举办，正式发布了备受期待的革命性产品——坚果 TNT 工作站（显示器），同时也推出了“次世代旗舰手机”坚果 R1，以及坚果 Pro 2 特别版。",
            "source": "本网站",
            "time": "2019-02-26 10:10",
            "browse": "6515"
        },
        {
            "hrefUrl": "../detail/newsDetail",
            "openType": "navigate",
            "newsImg": "http://diudiuo.com/images/case3.jpg",
            "title": "11111锤子科技发布三面无边框全面屏手机坚果 3 售价 1299 元起",
            "describe": "【 4 月 9 日 北京】锤子科技 2018 春季新品发布会在北京工业大学奥林匹克体育馆举行",
            "source": "本网站",
            "time": "2019-02-26 10:10",
            "browse": "6515"
        },
        {
            "hrefUrl": "../detail/newsDetail",
            "openType": "navigate",
            "newsImg": "http://diudiuo.com/images/case4.jpg",
            "title": "1锤子科技无限屏手机坚果 Pro 2S 发布，售价 1798 元起",
            "describe": "2018 年 8 月 20 日，锤子科技 2018 夏季新品发布会在北京凯迪拉克中心(原五棵松体育馆)举办",
            "source": "本网站",
            "time": "2019-02-26 10:10",
            "browse": "6515"
        }
    ]

    export default {
        data() {
            return {
                hotNewsListData,
            }
        },
    }
</script>


<style lang="scss">
    @import "~@/assets/scss/_hotNewsList";
</style>