<template>
    <div id="index_box">
        <headerNav></headerNav>
        <!-- <carousel :imgs="imgs"></carousel> -->
        <classify></classify>

        <div class="cont list_box1">
            <list></list>
        </div>

        <div class="index_footer">
            <div class="cont">
                <comFooter></comFooter>
            </div>
        </div>
    </div>
</template>


<script>
    import headerNav from '../components/headerNav'
    import classify from '../components/classify'
    import list from '../components/list'
    import comFooter from '../components/footer'

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
            headerNav,
            classify,
            list,
            comFooter
        },
        created: function(){

        },
        methods: {

        }
    }
</script>


<style>
@import '//at.alicdn.com/t/font_1068405_1uqcp57coy8.css';
</style>
<style lang="scss">
@import '~@/assets/scss/_index';
</style>
