<template>
    <div id="classifyPage_box">
        <a-layout-content class="classifyPage_cont1">
            <classify></classify>
        </a-layout-content>
        <a-layout-content class="classifyPage_cont2">
            <list></list>
        </a-layout-content>
    </div>
</template>


<script>
import classify from '../components/classify'
import list from '../components/list'

export default {
    data(){
        return {

        }
    },
    components: {
        classify,
        list
    }
}
</script>


<style lang="scss">
@import "~@/assets/scss/_classifyPage";
</style>