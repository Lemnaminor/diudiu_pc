<template>
  <div id="classify_box" class="dd_bg">
    <a-layout-content>
      <a-row>
        <a-col :span="4">
          <span><i class="iconfont icon-fenlei"></i>分类选择：</span>
        </a-col>
        <a-col :span="20">
          <a-select style="width: 150px" @change="changeClass" v-model="classValue" placeholder="请选择分类">
            <a-select-option v-for="province in provinceData" :key="province">{{province}}</a-select-option>
          </a-select>
          <a-select style="width: 150px" @change="changeClassInfo" v-model="classInfoValue" placeholder="子分类"
            :disabled="classDisabled">
            <a-select-option v-for="classInfo in classInfoData" :key="classInfo">{{classInfo}}</a-select-option>
          </a-select>
        </a-col>
      </a-row>
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
          <span><i class="iconfont icon-chazhao"></i>已选分类：</span>
        </a-col>
        <a-col :span="20">
          <div>
            <a-tag closable @close="log" v-model="cityValue" :class="cityValue == '' ? 'domHidden' : 'domShow'">
              {{cityValue2}}</a-tag>
            <a-tag closable @close="log" v-model="dataPickerValue"
              :class="dataPickerValue == '' ? 'domHidden' : 'domShow'">{{dataPickerValue2}}</a-tag>
            <a-tag closable @close="watchClass" v-model="classValue"
              :class="classValue == '' ? 'domHidden' : 'domShow'">
              {{classValue2}}</a-tag>
            <a-tag closable @close="log" v-model="classInfoValue"
              :class="classInfoValue == '' ? 'domHidden' : 'domShow'">
              {{classInfoValue2}}</a-tag>
          </div>
        </a-col>
      </a-row>
    </a-layout-content>
  </div>
</template>


<script>
  import cityData from '../lib/city'

  const provinceData = ['寻物启事', '寻人启事', '寻宠启事', '招领启事', '赏金启事'];

  const classInfoData = [];

  const classInfoData1 = ['卡包', '钥匙', '数码电子', '金银首饰', '其他'];
  const classInfoData2 = ['老人', '成年人', '青少年', '儿童', '其他'];
  const classInfoData3 = ['狗', '猫', '其他'];
  const classInfoData4 = ['寻物', '寻人', '寻宠'];
  const classInfoData5 = ['寻物', '寻人', '寻宠'];

  // const classInfoData = {
  //   寻物启事: ['卡包', '钥匙', '数码电子', '金银首饰', '其他'],
  //   寻人启事: ['老人', '成年人', '青少年', '儿童', '其他'],
  //   寻宠启事: ['狗', '猫', '其他'],
  //   招领启事: ['寻物', '寻人', '寻宠'],
  // };


  export default {
    data() {
      return {
        //地点
        cityData,
        //分类
        provinceData,
        classInfoData,
        classInfoData1,
        classInfoData2,
        classInfoData3,
        classInfoData4,
        classInfoData5,

        classDisabled: true,

        cityValue: '',
        cityValue2: '',
        dataPickerValue: '',
        dataPickerValue2: '',
        classValue: [],
        classValue2: '',
        classInfoValue: [],
        classInfoValue2: '',
        //已选分类tags
        // tags: ['','','']

      }
    },
    computed: {

    },
    methods: {
      changeCity(value) {
        console.log(value);
        return this.cityValue2 = '地点：' + this.cityValue.join('/');
      },
      filter(inputValue, path) {
        return (path.some(option => (option.label).toLowerCase().indexOf(inputValue.toLowerCase()) > -1));
      },
      datapickerOnChange(date, dateString) {
        var dataPickerValue = dateString.join('~');
        // this.$set(this.tags,2,dataPickerValue);
        return this.dataPickerValue2 = '时间：' + dataPickerValue;
      },
      log(e) {
        console.log(e)
      },
      changeClass(value) {

        if (value) {
          this.classDisabled = false;
          this.classInfoValue = '';
        } else {
          this.classDisabled = true;
        }
        if (value == '寻物启事') {
          this.classInfoData = this.classInfoData1;
        } else if (value == '寻人启事') {
          this.classInfoData = this.classInfoData2;
        } else if (value == '寻宠启事') {
          this.classInfoData = this.classInfoData3;
        } else if (value == '招领启事') {
          this.classInfoData = this.classInfoData4;
        } else if (value == '赏金启事') {
          this.classInfoData = this.classInfoData5;
        }
        this.classValue2 = '分类：' + value;

      },
      changeClassInfo(value) {
        this.classInfoValue2 = '子分类：' + value;
      },
      watchClass(value) {
        this.classDisabled = true;
        this.classInfoValue = [];
        this.classInfoValue2 = '';
        this.$nextTick(function () {
          this.classValue = [];
        })
      }
    }
  }

</script>


<style lang="scss">
  @import '~@/assets/scss/_classify';

</style>
