<template>
  <div id="carousel_box" class="cont margin-top">
    <a-carousel autoplay>
            <img v-for="(item,index) in imgs" :key="index" class="imgAuto" :src="item.url" alt="">
    </a-carousel>
  </div>
</template>


<script>
    export default {
        data(){
            return {

            }
        },
        props: {
            imgs: Object
        },
    }
</script>


<style lang="scss">
@import '~@/assets/scss/carousel';
</style>
