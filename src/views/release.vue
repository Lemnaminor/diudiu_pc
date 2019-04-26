<template>
    <div id="release_box" class="cont">
        <a-layout-content>
            <breadCrumb></breadCrumb>
        </a-layout-content>
        <a-layout-content>
            <a-row type="flex" justify="space-between">
                <a-col :span="16" class="release_cont1">
                    <releaseForm></releaseForm>
                </a-col>
                <a-col :span="7">
                    <ad></ad>
                </a-col>
            </a-row>
        </a-layout-content>
    </div>
</template>


<script>
    import newsList from "../components/newsList";
    import notice from "../components/notice";
    import ad from "../components/ad"
    import breadCrumb from "../components/breadCrumb"
    import releaseForm from "../components/releaseForm"

    export default {
        data() {
            return {

            }
        },
        components: {
            newsList,
            notice,
            ad,
            breadCrumb,
            releaseForm,
        }
    }

</script>


<style lang="scss">
    @import '~@/assets/scss/_release';
</style>