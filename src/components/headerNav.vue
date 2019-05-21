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
                        <router-link to="/login"><span>登录</span></router-link>&nbsp;&nbsp;/
                        <router-link to="/register"><span>注册</span></router-link>
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
                                        分类寻找<a-icon type="down" />
                                </span>
                                    <a-menu-item key="classify:1"><router-link to="/classifyPage">最新</router-link></a-menu-item>
                                    <a-menu-item key="classify:2"><router-link to="/classifyPage">附近</router-link></a-menu-item>
                                    <a-menu-item key="classify:3"><router-link to="/classifyPage">榜单</router-link></a-menu-item>
                                    <a-menu-item key="classify:4"><router-link to="/classifyPage">寻物</router-link></a-menu-item>
                                    <a-menu-item key="classify:5"><router-link to="/classifyPage">寻人</router-link></a-menu-item>
                                    <a-menu-item key="classify:6"><router-link to="/classifyPage">寻宠</router-link></a-menu-item>
                                    <a-menu-item key="classify:7"><router-link to="/classifyPage">赏金</router-link></a-menu-item>
                                    <a-menu-item key="classify:8"><router-link to="/classifyPage">招领</router-link></a-menu-item>
                            </a-sub-menu>
                            <a-menu-item key="release">
                                <router-link to="/release">我要发布</router-link>
                            </a-menu-item>
                            <a-menu-item key="news">
                                <router-link to="news">新闻资讯</router-link>
                            </a-menu-item>
                            <a-sub-menu key="about">
                                <span slot="title" class="submenu-title-wrapper">
                                        其他栏目<a-icon type="down" /></span>
                                    <a-menu-item key="about:1"><router-link to="/reply">我的发布/回复<a-badge count="8" /></router-link></a-menu-item>
                                    <a-menu-item key="about:2"><router-link to="/about">关于丢丢</router-link></a-menu-item>
                                    <a-menu-item key="about:3"><router-link to="/sponsor">赞助丢丢</router-link></a-menu-item>
                                    <a-menu-item key="about:4"><router-link to="/legal">版权说明</router-link></a-menu-item>
                            </a-sub-menu>
                        </a-menu>
                    </a-col>
                    <a-col :span="6" class="headerNav_info2">
                        <span class="fr">
                            <router-link to="/release">
                                <a-button type="primary" class="margin-xs">发布</a-button>
                            </router-link>
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
                current: ['classify']
            }
        },
        name: 'headerNav'
    }
</script>


<style lang="scss">
    @import '~@/assets/scss/_headerNav';
</style>