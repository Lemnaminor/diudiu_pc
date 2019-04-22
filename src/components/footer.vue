<template>
    <div id="footer_box">
        <a-layout-content class="footer_cont1">
            <a-row type="flex" justify="space-between">
                <a-col :span="7" class="footer_info1">
                    <router-link to="/"><img src="~images/logo1.png" alt=""></router-link>

                    <p>&emsp;&emsp;本网站是由OneDay一天工作室开发的旗下一个公益项目。网站的主要功能是发布及寻回丢失的物品。<br>&emsp;&emsp;本网站是全公益项目，不收取任何费用，初衷是借助互联网发动人们的力量，为人们寻回丢失的物品等。
                        如果本网站对你有所帮助，以及您愿意为此项目贡献一点力量，请在二维码捐赠页面赞助我们，您的一点支持将是我们前进的动力。
                    </p>
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
                    <a-layout-content>
                        <div id="bdshare" class="bdsharebuttonbox bdshare_t bds_tools get-codes-bdshare">
                            <a href="#" class="bds_more" data-cmd="more"></a>
                            <a href="#" class="bds_tsina" data-cmd="tsina" title="分享到新浪微博"></a>
                            <a href="#" class="bds_sqq" data-cmd="sqq" title="分享到QQ好友"></a>
                            <a href="#" class="bds_qzone" data-cmd="qzone" title="分享到QQ空间"></a>
                            <a href="#" class="bds_weixin" data-cmd="weixin" title="分享到微信"></a>
                        </div>
                    </a-layout-content>
                </a-col>
                <a-col :span="7" class="footer_info3">
                    <p>其他平台</p>
                    <a-row>
                        <a-col :span="8">
                            <a-popover title="安卓app扫码下载">
                                <template slot="content">
                                    <img src="~images/wx-pay.png" alt="" style="height:200px;">
                                </template>
                                <img src="~images/wx-pay.png" alt="">
                            </a-popover>
                            <p>安卓app扫码下载</p>
                        </a-col>
                        <a-col :span="8">
                            <a-popover title="苹果app扫码下载">
                                <template slot="content">
                                    <img src="~images/zfb-pay.jpg" alt="" style="height:200px;">
                                </template>
                                <img src="~images/zfb-pay.jpg" alt="">
                            </a-popover>
                            <p>苹果app扫码下载</p>
                        </a-col>
                        <a-col :span="8">
                            <a-popover title="微信小程序二维码">
                                <template slot="content">
                                    <img src="~images/zfb-pay.jpg" alt="" style="height:200px;">
                                </template>
                                <img src="~images/zfb-pay.jpg" alt="">
                            </a-popover>
                            <p>微信小程序二维码</p>
                        </a-col>
                    </a-row>

                    <p class="footer_p2">赞助我们</p>
                    <a-row>
                        <a-col :span="8">
                            <a-popover title="微信收款二维码">
                                <template slot="content">
                                    <img src="~images/wx-pay.png" alt="" style="height:200px;">
                                </template>
                                <img src="~images/wx-pay.png" alt="">
                            </a-popover>
                            <p>微信收款二维码</p>
                        </a-col>
                        <a-col :span="8">
                            <a-popover title="支付宝收款二维码">
                                <template slot="content">
                                    <img src="~images/zfb-pay.jpg" alt="" style="height:200px;">
                                </template>
                                <img src="~images/zfb-pay.jpg" alt="">
                            </a-popover>
                            <p>支付宝收款二维码</p>
                        </a-col>
                        <a-col :span="8"></a-col>
                    </a-row>
                </a-col>
            </a-row>
        </a-layout-content>
        <a-layout-content class="copyright">
            <p>©2018 丢丢网 版权所有 蜀ICP备19007965号</p>
            <p><img src="~images/gongan.png" alt=""> 公安网备案号：2016090902497号</p>
        </a-layout-content>
    </div>
</template>


<script>
    export default {
        data() {
            return {

            }
        },
        methods: {
            
            // setShare() {
            //     //分享相关代码
            //     window._bd_share_config = {
            //         "common": {
            //             "bdSnsKey": {}, 
            //             "bdText": "", 
            //             "bdMini": "2", 
            //             "bdMiniList": false, 
            //             "bdPic": "", 
            //             "bdStyle": "0", 
            //             "bdSize": "24"
            //         },
            //         "share": {},
            //         // "image": { "viewList": ["tsina", "sqq", "qzone", "weixin"], "viewText": "分享到：", "viewSize": "24" },
            //         // "selectShare": {
            //         //     "bdContainerClass": null,
            //         //     "bdSelectMiniList": ["tsina", "sqq", "qzone", "weixin"]
            //         // }
            //     };
            //     const s = document.createElement('script');
            //     s.type = 'text/javascript';
            //     s.src = 'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=' + ~(-new Date() / 36e5);
            //     document.body.appendChild(s);

            // },

        },
        created() {
            // const that = this;
            // setTimeout(() => {
            //     that.setShare()
            // }, 0)
        },

    }
</script>


<style lang="scss">
    @import '~@/assets/scss/_footer';
</style>