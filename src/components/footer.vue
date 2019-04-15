<template>
    <div id="footer_box">
        <a-layout-content class="footer_cont1">
            <a-row type="flex" justify="space-between">
                <a-col :span="7" class="footer_info1">
                    <router-link to="/"><img src="~images/logo1.png" alt=""></router-link>

                    <p>&emsp;&emsp;本网站是由OneDay一天工作室开发的旗下一个公益项目。网站的主要功能是发布及寻回丢失的物品。<br>&emsp;&emsp;本网站是全公益项目，不收取任何费用，初衷是借助互联网发动人们的力量，为人们寻回丢失的物品等。
                        如果本网站对你有所帮助，以及您愿意为此项目贡献一点力量，请在二维码捐赠页面赞助我们，您的一点支持将是我们前进的动力。</p>
                </a-col>
                <a-col :span="7" class="footer_info2">
                    <p>快速导航</p>
                    <a-row type="flex" justify="space-between">
                        <a-col :span="4">
                            <router-link to="/">网站首页</router-link>
                        </a-col>
                        <a-col :span="4">
                            <router-link to="/">寻物启事</router-link>
                        </a-col>
                        <a-col :span="4">
                            <router-link to="/">寻宠启事</router-link>
                        </a-col>
                        <a-col :span="4">
                            <router-link to="/">寻人启事</router-link>
                        </a-col>
                    </a-row>
                    <a-row type="flex" justify="space-between">
                        <a-col :span="4">
                            <router-link to="/">招领启事</router-link>
                        </a-col>
                        <a-col :span="4">
                            <router-link to="/">新闻资讯</router-link>
                        </a-col>
                        <a-col :span="4">
                            <router-link to="/">关于丢丢</router-link>
                        </a-col>
                        <a-col :span="4">
                        </a-col>
                    </a-row>
                </a-col>
                <a-col :span="7" class="footer_info3">
                    <p>联系方式</p>
                </a-col>
            </a-row>
        </a-layout-content>
        <a-layout-content class="copyright">
            <p>©2018 丢丢网 版权所有 蜀 ICP 备 17021456 号</p>
            <p><img src="~images/gongan.png" alt=""> 公安网备案号：2016090902497号</p>
        </a-layout-content>
    </div>
</template>


<script>
</script>


<style lang="scss">
    @import '~@/assets/scss/_footer';
</style>