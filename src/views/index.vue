<template>
    <div id="index_box">

        <!-- <carousel :imgs="imgs"></carousel> -->
        <classify></classify>

        <div class="cont list_box1">
            <list></list>
        </div>


    </div>
</template>


<script>
    import classify from '../components/classify'
    import list from '../components/list'


    export default{
        data(){
            return {
                // imgs: [
                //     {url:require('../assets/images/b1.jpg')},
                //     {url:require('../assets/images/b2.jpg')},
                //     {url:require('../assets/images/b3.jpg')}
                // ]
            }
        },
        components:{
            classify,
            list
        },
        created: function(){

        },
        methods: {

        }
    }
</script>


<style lang="scss">
@import '~@/assets/scss/_index';
</style>
