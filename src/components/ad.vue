<template>
    <div id="ad_box">
        <a-list itemLayout="vertical" size="large" :dataSource="adListData">
            <div slot="header">广告位</div>
            <a-list-item slot="renderItem" slot-scope="item,index" key="item.title">
                <a-layout-content>
                    <img :src="item.imgUrl" alt="">
                </a-layout-content>
            </a-list-item>
        </a-list>
    </div>
</template>


<script>
    const adListData = [
        { imgUrl: 'http://diudiuo.com/images/b1.jpg' },
        { imgUrl: 'http://diudiuo.com/images/b2.jpg' },
    ]

    export default {
        data(){
            return {
                adListData,
            }
        }
    }
</script>


<style lang="scss">
@import "~@/assets/scss/_ad";
</style>