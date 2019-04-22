<template>
    <div id="classifyPage_box">
        <a-layout-content>
            <breadCrumb></breadCrumb>
        </a-layout-content>
        <a-layout-content class="classifyPage_cont1">
            <a-row>
                <a-col :span="12" class="classifyPage_info1">
                    <classify></classify>
                </a-col>
                <a-col :span="12" class="classifyPage_info2">
                    <notice></notice>
                </a-col>
            </a-row>
        </a-layout-content>
        <a-layout-content class="classifyPage_cont2">
            <list></list>
        </a-layout-content>
    </div>
</template>


<script>
import classify from '../components/classify'
import list from '../components/list'
import notice from '../components/notice'
import breadCrumb from '../components/breadCrumb'

export default {
    data(){
        return {

        }
    },
    components: {
        classify,
        list,
        notice,
        breadCrumb
    }
}
</script>


<style lang="scss">
@import "~@/assets/scss/_classifyPage";
</style>