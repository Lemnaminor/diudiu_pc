<template>
    <div id="headerNav_box">

        <div class="headerNav_box1">
            <a-layout-content class="cont headerNav_cont1">
                <a-row>
                    <a-col :span="12">
                        <img src="../assets/images/logo.png" alt="">
                        <span>丢丢网：找的回来算我输！</span>
                    </a-col>
                    <a-col :span="12" class="textRight">
                        <router-link to="#"><i class="iconfont icon-wode white"></i>&nbsp;<span>登录</span></router-link>
                    </a-col>
                </a-row>
            </a-layout-content>
        </div>

        <div class="headerNav_box2">
            <a-layout-content class="cont headerNav_cont2">
                <router-link to="path">首页</router-link>
                <router-link to="path">寻物</router-link>
                <router-link to="path">寻宠</router-link>
                <router-link to="path">寻人</router-link>
                <router-link to="path">招领</router-link>
                <router-link to="path">新闻</router-link>
                <router-link to="path">关于丢丢</router-link>
            </a-layout-content>
        </div>

    </div>
</template>


<script>

</script>


<style lang="scss">
/* @import '~@/assets/scss/_headerNav'; */
</style>