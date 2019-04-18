<template>
    <div id="news_box" class="cont">
        <a-layout-content>
                <a-row type="flex" justify="space-between">
                <a-col :span="16">
                    <newsList></newsList>
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
import newsList from "../components/newsList";
import hotNewsList from "../components/hotNewsList";
import ad from "../components/ad"

export default {
    data(){
        return {

        }
    },
    components: {
        newsList,
        hotNewsList,
        ad
    }
}
</script>


<style lang="scss">
    @import '~@/assets/scss/_news';
</style>