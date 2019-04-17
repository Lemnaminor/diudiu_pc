<template>
    <div id="news_box" class="cont">
        <a-layout-content>
                <a-row type="flex" justify="space-between">
                <a-col :span="15">
                    <newsList></newsList>
                </a-col>
                <a-col :span="8">2

                </a-col>
            </a-row>
        </a-layout-content>
    </div>
</template>


<script>
import newsList from "../components/newsList";

export default {
    data(){
        return {

        }
    },
    components: {
        newsList
    }
}
</script>


<style lang="scss">
    @import '~@/assets/scss/_news';
</style>