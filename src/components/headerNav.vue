<template>
    <div id="headerNav_box">

        <div class="headerNav_box1">
            <a-layout-content class="cont headerNav_cont1">
                <a-row>
                    <a-col :span="12">
                        <img src="../assets/images/logo.png" alt="">
                    </a-col>
                    <a-col :span="12" class="textRight">
                        <i class="iconfont icon-wode white"></i>
                        <router-link to="#"><span>登录</span></router-link>&nbsp;&nbsp;/
                        <router-link to="#"><span>注册</span></router-link>
                    </a-col>
                </a-row>
            </a-layout-content>
        </div>

        <div class="headerNav_box2">
            <a-layout-content class="cont headerNav_cont2">

                <a-row>
                    <a-col :span="18" class="headerNav_info1">
                        <a-menu v-model="current" mode="horizontal">
                            <a-menu-item key="home">
                                <router-link to="/">网站首页</router-link>
                            </a-menu-item>
                            <a-sub-menu key="classify">
                                <span slot="title" class="submenu-title-wrapper">
                                    分类寻找<a-icon type="down" /></span>
                                    <a-menu-item key="classify:1">最新</a-menu-item>
                                    <a-menu-item key="classify:2">附近</a-menu-item>
                                    <a-menu-item key="classify:3">榜单</a-menu-item>
                                    <a-menu-item key="classify:4">寻物</a-menu-item>
                                    <a-menu-item key="classify:5">寻人</a-menu-item>
                                    <a-menu-item key="classify:6">寻宠</a-menu-item>
                                    <a-menu-item key="classify:7">赏金</a-menu-item>
                                    <a-menu-item key="classify:8">招领</a-menu-item>
                            </a-sub-menu>
                            <a-menu-item key="release">
                                我要发布
                            </a-menu-item>
                            <a-menu-item key="news">
                                <router-link to="/news">新闻资讯</router-link>
                            </a-menu-item>
                            <a-sub-menu key="about">
                                <span slot="title" class="submenu-title-wrapper">
                                        其他栏目<a-icon type="down" /></span>
                                    <a-menu-item key="about:1">我的发布/回复</a-menu-item>
                                    <a-menu-item key="about:2">关于丢丢</a-menu-item>
                                    <a-menu-item key="about:3">赞助丢丢</a-menu-item>
                                    <a-menu-item key="about:4">版权说明</a-menu-item>
                            </a-sub-menu>
                        </a-menu>
                    </a-col>
                    <a-col :span="6" class="headerNav_info2">
                        <span class="fr">
                            <a-button type="primary" class="margin-xs">发布</a-button>
                            <a-input-search placeholder="请输入搜索内容..." style="width: 200px">

                            </a-input-search>
                        </span>
                    </a-col>
                </a-row>


            </a-layout-content>

        </div>

    </div>
</template>


<script>
    export default {
        data() {
            return {
                current: ['home']
            }
        }
    }
</script>


<style lang="scss">
    @import '~@/assets/scss/_headerNav';
</style>