<template>
<div id="classify_box" class="cont dd_bg">
    <a-layout-content>
        <a-row>
            <a-col :span="2">
                <span><i class="iconfont icon-dingwei"></i>地点选择：</span>
            </a-col>
            <a-col :span="22">
                <a-cascader :options="options" @change="onChange" placeholder="请选择地址" />
            </a-col>
        </a-row>
        <a-row>
            <a-col :span="2">
                <span><i class="iconfont icon-fenlei"></i>分类选择：</span>
            </a-col>
            <a-col :span="22">
                <a-select defaultValue="寻物分类" style="width: 120px">
                    <a-select-option value="1">卡包</a-select-option>
                    <a-select-option value="2">钥匙</a-select-option>
                    <a-select-option value="3">数码电子</a-select-option>
                    <a-select-option value="4">金银首饰</a-select-option>
                    <a-select-option value="5">其他</a-select-option>
                </a-select>
                <a-select defaultValue="寻宠分类" style="width: 120px">
                    <a-select-option value="1">狗</a-select-option>
                    <a-select-option value="2">猫</a-select-option>
                    <a-select-option value="3">其他</a-select-option>
                </a-select>
                <a-select defaultValue="寻人分类" style="width: 120px">
                    <a-select-option value="1">老人</a-select-option>
                    <a-select-option value="2">成年人</a-select-option>
                    <a-select-option value="3">青少年</a-select-option>
                    <a-select-option value="4">儿童</a-select-option>
                    <a-select-option value="5">其他</a-select-option>
                </a-select>
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
                    <a-tag closable @close="log">浙江/杭州/西湖</a-tag>
                    <a-tag closable @close="log">卡包</a-tag>
                    <a-tag closable @close="log">2019-04-11 ~ 2019-04-12</a-tag>
                </div>
            </a-col>
        </a-row>
    </a-layout-content>
</div>
</template>


<script>

    export default {
  data() {
    return {
        //地点
      options: [{
        value: '浙江',
        label: '浙江',
        children: [{
          value: '杭州',
          label: '杭州',
          children: [{
            value: '西湖',
            label: '西湖',
          }],
        }],
      }, {
        value: '江苏',
        label: 'Jiangsu',
        children: [{
          value: '南京',
          label: 'Nanjing',
          children: [{
            value: '中华门',
            label: 'Zhong Hua Men',
          }],
        }],
      }],


    }
  },
  methods: {
    onChange(value) {
      console.log(value);
    },
    datapickerOnChange(date, dateString) {
      console.log(date, dateString);
    },
    log (e) {
      console.log(e)
    }
  }
}
</script>


<style lang="scss">
@import '~@/assets/scss/_classify';
</style>