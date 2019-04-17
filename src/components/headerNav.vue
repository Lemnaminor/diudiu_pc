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
                <router-link to="/">网站首页</router-link>
                <router-link to="path">寻物启事</router-link>
                <router-link to="path">寻宠启事</router-link>
                <router-link to="path">寻人启事</router-link>
                <router-link to="path">招领启事</router-link>
                <router-link to="/news">新闻资讯</router-link>
                <router-link to="path">关于丢丢</router-link>
                
                <span class="fr">
                    <a-button type="primary" class="margin-xs">发布</a-button>
                    <a-input-search placeholder="请输入搜索内容..." style="width: 200px">

                    </a-input-search>
                </span>
            </a-layout-content>

        </div>

    </div>
</template>


<script>

</script>


<style lang="scss">
@import '~@/assets/scss/_headerNav';
</style>