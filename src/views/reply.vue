<template>
    <div id="reply_box" class="cont">
        <breadCrumb></breadCrumb>
        <a-layout-content class="reply_cont1">
            <list></list>
        </a-layout-content>
    </div>
</template>


<script>
    import breadCrumb from "../components/breadCrumb"
    import list from "../components/list"

    export default {
        data(){
            return {

            }
        },
        components:{
            breadCrumb,
            list,
        }
    }
</script>


<style lang="scss">
    @import '~@/assets/scss/_reply';
</style>