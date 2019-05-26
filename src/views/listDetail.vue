<template>
        <div id="listDetail_box" class="cont">
            <a-layout-content>
                <breadCrumb></breadCrumb>
            </a-layout-content>
            <a-layout-content>
                <a-row type="flex" justify="space-between">
                    <a-col :span="16" class="listDetail_cont1">
                        <listFormDetail></listFormDetail>
                        <listFormComment></listFormComment>
                    </a-col>
                    <a-col :span="7">
                        <ad></ad>
                    </a-col>
                </a-row>
            </a-layout-content>
        </div>
    </template>
    
    
    <script>
        import ad from "../components/ad"
        import breadCrumb from "../components/breadCrumb"
        import listFormDetail from "../components/listFormDetail"
        import listFormComment from "../components/listFormComment"

    
        export default {
            data() {
                return {
    
                }
            },
            components: {
                ad,
                breadCrumb,
                listFormDetail,
                listFormComment,
            }
        }
    
    </script>
    
    
    <style lang="scss">
        @import '~@/assets/scss/_listDetail';
    </style>