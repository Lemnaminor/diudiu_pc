<template>
    <div id="index_box">
        <headerNav></headerNav>
        <carousel :imgs="imgs"></carousel>
    </div>
</template>


<script>
    import headerNav from '../components/headerNav'
    import carousel from '../components/carousel'

    export default{
        data(){
            return {
                imgs: [
                    {url:require('../assets/images/b1.jpg')},
                    {url:require('../assets/images/b2.jpg')},
                    {url:require('../assets/images/b3.jpg')}
                ]
            }
        },
        components:{
            headerNav,
            carousel
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