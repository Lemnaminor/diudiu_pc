<template>
    <div id="classify_box" class="cont dd_bg">
        <a-layout-content>
            <a-row>
                <a-col :span="2">
                    <span><i class="iconfont icon-dingwei"></i>地点选择：</span>
                </a-col>
                <a-col :span="22">
                    <a-cascader :options="cityData" :showSearch="{filter}" @change="changeCity" placeholder="请选择地址" />
                </a-col>
            </a-row>
            <a-row>
                <a-col :span="2">
                    <span><i class="iconfont icon-fenlei"></i>分类选择：</span>
                </a-col>
                <a-col :span="22">
                    <a-cascader :options="classifyData" @change="changeClass" placeholder="请选择分类" />
                </a-col>
            </a-row>
            <a-row>
                <a-col :span="2">
                    <span><i class="iconfont icon-lishi"></i>时间选择：</span>
                </a-col>
                <a-col :span="22">
                    <a-range-picker @change="datapickerOnChange" />
                </a-col>
            </a-row>
            <a-row>
                <a-col :span="2">
                    <span><i class="iconfont icon-chazhao"></i>已选分类：</span>

                </a-col>
                <a-col :span="22">
                    <div>
                        <a-tag closable @close="log" v-for="tag in tags" :key="tag.id" :class="tag == '' ? 'domHidden' : 'domShow'">{{tag}}</a-tag>
                        <!-- <a-tag closable @close="log" :class="cityValue == '' ? 'domHidden' : 'domShow'">{{cityValue}}</a-tag>
                        <a-tag closable @close="log" :class="cityValue == '' ? 'domHidden' : 'domShow'">{{classValue}}</a-tag>
                        <a-tag closable @close="log" :class="cityValue == '' ? 'domHidden' : 'domShow'">{{dataPickerValue}}</a-tag> -->
                    </div>
                </a-col>
            </a-row>
        </a-layout-content>
    </div>
</template>


<script>
    import cityData from '../lib/city'
    import Vue from 'vue'

    const classifyData = [
        {
            value: '寻物启示',
            label: '寻物启示',
            children: [
                {
                    value: '卡包',
                    label: '卡包',
                },
                {
                    value: '钥匙',
                    label: '钥匙',
                },
                {
                    value: '数码电子',
                    label: '数码电子',
                },
                {
                    value: '金银首饰',
                    label: '金银首饰',
                },
                {
                    value: '其他',
                    label: '其他',
                }
            ],
        },
        {
            value: '寻人启示',
            label: '寻人启示',
            children: [
                {
                    value: '老人',
                    label: '老人',
                },
                {
                    value: '成年人',
                    label: '成年人',
                },
                {
                    value: '青少年',
                    label: '青少年',
                },
                {
                    value: '儿童',
                    label: '儿童',
                },
                {
                    value: '其他',
                    label: '其他',
                }
            ],
        },
        {
            value: '寻宠启示',
            label: '寻宠启示',
            children: [
                {
                    value: '狗',
                    label: '狗',
                },
                {
                    value: '猫',
                    label: '猫',
                },
                {
                    value: '其他',
                    label: '其他',
                }
            ],
        }
    ]

    export default {
        data() {
            return {
                //地点
                cityData,
                //分类
                classifyData,
                // cityValue: '',
                // classValue: '',
                // dataPickerValue: '',
                //已选分类tags
                tags: ['','','']

            }
        },
        methods: {
            changeCity(value) {
                var cityValue = value.join('/');
                this.$set(this.tags,0,cityValue);
            },
            filter(inputValue, path) {
                return (path.some(option => (option.label).toLowerCase().indexOf(inputValue.toLowerCase()) > -1));
            },
            changeClass(value) {
                var classValue = value.join('/');
                this.$set(this.tags,1,classValue);
            },
            datapickerOnChange(date, dateString) {
                var dataPickerValue = dateString.join('~');
                this.$set(this.tags,2,dataPickerValue);
            },
            log(e) {
                console.log(e)
            }
        }
    }
</script>


<style lang="scss">
    @import '~@/assets/scss/_classify';
</style>