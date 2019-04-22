<template>
  <div id="carousel_box">
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
            imgs: Array
        },
    }
</script>


<style lang="scss">
@import '~@/assets/scss/carousel';
</style>
