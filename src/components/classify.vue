<template>
  <div id="classify_box" class="dd_bg">
    <a-layout-content>
      <a-row>
        <a-col :span="4">
          <span><i class="iconfont icon-dingwei"></i>地点选择：</span>
        </a-col>
        <a-col :span="20">
          <a-cascader :options="cityData" :showSearch="{filter}" @change="changeCity" placeholder="请选择地址"
            v-model="cityValue" />
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="4">
          <span><i class="iconfont icon-lishi"></i>时间选择：</span>
        </a-col>
        <a-col :span="20">
          <a-range-picker @change="datapickerOnChange" v-model="dataPickerValue" />
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="4">
          <span><i class="iconfont icon-fenlei"></i>分类选择：</span>
        </a-col>
        <a-col :span="20">
          <a-cascader :options="classifyData" @change="changeClass" placeholder="请选择分类" v-model="classValue" />
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="4">
          <span><i class="iconfont icon-chazhao"></i>已选分类：</span>
        </a-col>
        <a-col :span="20">
          <div>
            <a-tag closable @close="log" v-model="cityValue" :class="cityValue == '' ? 'domHidden' : 'domShow'">
              {{cityValue2}}</a-tag>
            <a-tag closable @close="log" v-model="dataPickerValue"
              :class="dataPickerValue == '' ? 'domHidden' : 'domShow'">{{dataPickerValue2}}</a-tag>
            <a-tag closable @close="log" v-model="classValue" :class="classValue == '' ? 'domHidden' : 'domShow'">
              {{classValue2}}</a-tag>
          </div>
        </a-col>
      </a-row>
    </a-layout-content>
  </div>
</template>


<script>
  import cityData from '../lib/city'
  import classifyData from '../lib/classifyData'

  

  export default {
    data() {
      return {
        //地点
        cityData,
        //分类
        classifyData,
        
        cityValue: '',
        cityValue2: '',
        classValue: '',
        classValue2: '',
        dataPickerValue: '',
        dataPickerValue2: '',
        //已选分类tags
        // tags: ['','','']

      }
    },
    computed: {

    },
    methods: {
      changeCity(value) {
        return this.cityValue2 = '地点：' + this.cityValue.join('/');
      },
      filter(inputValue, path) {
        return (path.some(option => (option.label).toLowerCase().indexOf(inputValue.toLowerCase()) > -1));
      },
      changeClass(value) {
        return this.classValue2 = '分类：' + this.classValue.join('/');
      },
      datapickerOnChange(date, dateString) {
        var dataPickerValue = dateString.join('~');
        // this.$set(this.tags,2,dataPickerValue);
        return this.dataPickerValue2 = '时间：' + dataPickerValue;
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
