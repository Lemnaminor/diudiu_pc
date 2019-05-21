<template>
  <div id="releaseForm_box">

    <p class="releaseForm_title1">信息发布</p>
    <a-layout-content class="releaseForm_cont1">
      <a-row>
        <a-col :span="12">
          <a-row>
            <a-col :span="6">
              <span><i class="iconfont icon-dingdan"></i>发布类别：</span>
            </a-col>
            <a-col :span="18">
              <a-select class="inputWidth1" labelInValue :defaultValue="{ key: '1' }" style="width: 120px"
                @change="handleChange">
                <a-select-option value="1">寻物启事</a-select-option>
                <a-select-option value="2">寻人启事</a-select-option>
                <a-select-option value="3">寻宠启事</a-select-option>
                <a-select-option value="4 ">招领启事</a-select-option>
              </a-select>
            </a-col>
          </a-row>
        </a-col>
        <a-col :span="12">
          <a-row>
            <a-col :span="6">
              <span><i class="iconfont icon-fenlei"></i>物品分类：</span>
            </a-col>
            <a-col :span="18">
              <a-cascader :options="classifyData" @change="changeClass" placeholder="请选择分类" />
            </a-col>
          </a-row>
        </a-col>
        <a-col :span="12">
          <a-row>
            <a-col :span="6">
              <span><i class="iconfont icon-lishi"></i>丢失时间：</span>
            </a-col>
            <a-col :span="18">
              <a-date-picker class="inputWidth1" showTime format="YYYY-MM-DD HH:mm:ss" placeholder="Select Time"
                @change="onChangeTime" @ok="onOkTime" />
            </a-col>
          </a-row>
        </a-col>
        <a-col :span="24">
          <a-row>
            <a-col :span="3">
              <span><i class="iconfont icon-dingwei"></i>丢失地点：</span>
            </a-col>
            <a-col :span="21">
              <a-input-group compact>
                <a-cascader :options="cityData" :showSearch="{filter}" @change="changeCity" placeholder="请选择地址"
                  style="width:35%;" />
                <a-input style="width: 65%" placeholder="请输入详细地址..." v-model="lose_address_info" />
              </a-input-group>
            </a-col>
          </a-row>
        </a-col>
        <a-col :span="24">
          <a-col :span="3">
            <span><i class="iconfont icon-bianji"></i>内容描述：</span>
          </a-col>
          <a-col :span="21">
            <a-textarea placeholder="请填写详细内容描述..." :rows="4" v-model="releaseData.content" />
          </a-col>
        </a-col>
        <a-col :span="24">
          <a-col :span="3">
            <span><i class="iconfont icon-shangchuan"></i>图片上传：</span>
          </a-col>
          <a-col :span="21">
            <div class="clearfix">
              <a-upload listType="picture-card" :fileList="releaseData.lose_img" @preview="handlePreviewUpload"
                @change="handleChangeUpload">
                <div v-if="releaseData.lose_img.length < 2">
                  <a-icon type="plus" />
                  <div class="ant-upload-text">选择上传</div>
                </div>
              </a-upload>
              <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancelUpload">
                <img alt="example" style="width: 100%" :src="previewImage" />
              </a-modal>

            </div>
          </a-col>
        </a-col>
        <a-col :span="12">
          <a-col :span="6">
            <span><i class="iconfont icon-wode"></i>联系人：</span>
          </a-col>
          <a-col :span="18">
            <a-input placeholder="请填写联系人姓名" class="inputWidth1" v-model="releaseData.username" />
          </a-col>
        </a-col>
        <a-col :span="12">
          <a-col :span="6">
            <span><i class="iconfont icon-dianhua"></i>联系电话：</span>
          </a-col>
          <a-col :span="18">
            <a-input placeholder="请填写联系电话" class="inputWidth1" v-model="releaseData.telphone" />
          </a-col>
        </a-col>
        <a-col :span="12">
          <a-col :span="6">
            <span><i class="iconfont icon-QQ"></i>联系QQ：</span>
          </a-col>
          <a-col :span="18">
            <a-input placeholder="请填写联系QQ" class="inputWidth1" v-model="releaseData.qq" />
          </a-col>
        </a-col>
        <a-col :span="12">
          <a-col :span="6">
            <span><i class="iconfont icon-email"></i>联系邮箱：</span>
          </a-col>
          <a-col :span="18">
            <a-auto-complete style="width: 200px" @search="handleSearchEmail" placeholder="请填写联系邮箱" class="inputWidth1"
              v-model="releaseData.email">
              <template slot="dataSource">
                <a-select-option v-for="email in result" :key="email">{{email}}</a-select-option>
              </template>
            </a-auto-complete>
          </a-col>
        </a-col>
        <a-col :span="24">
          <a-row>
            <a-col :span="3">
              <span><i class="iconfont icon-dizhi"></i>联系地址：</span>
            </a-col>
            <a-col :span="21">
              <a-input-group compact>
                <a-cascader :options="cityData" :showSearch="{filter}" @change="changeCityUser" placeholder="请选择地址"
                  style="width:35%;" />
                <a-input style="width: 65%" placeholder="请输入详细地址..." v-model="user_address_info" />
              </a-input-group>
            </a-col>
          </a-row>
        </a-col>
        <a-col :span="12">
          <a-col :span="6">
            <span><i class="iconfont icon-jine1"></i>悬赏金额：</span>
          </a-col>
          <a-col :span="18">
            <a-input placeholder="请填写悬赏金额" type="number" class="inputWidth1" v-model="releaseData.money" />
          </a-col>
        </a-col>
        <a-col :span="24">
          <a-row>
            <a-col :span="3">
              <span style="line-height:normal;"><i class="iconfont icon-jine2"></i>付费置顶：</span>
            </a-col>
            <a-col :span="21">
              <a-radio-group name="radioGroup" :defaultValue="2" @change="isTop">
                <a-radio :value="1">是</a-radio>
                <a-radio :value="2">否</a-radio>
              </a-radio-group>
              <span>（如需加急寻找请选择此功能，寻人类型默认免费置顶。15元/2个月）</span>
            </a-col>
          </a-row>
        </a-col>
        <a-col :span="24">
          <a-checkbox @change="isRead">我已阅读并同意<router-link to="path">《丢丢网条款声明》</router-link>。</a-checkbox>
        </a-col>

      </a-row>
    </a-layout-content>

    <a-layout-content class="more_box releaseForm_more">
      <a-button type="primary" :loading="loading" @click="isRelease">
        提交发布
      </a-button>
    </a-layout-content>
  </div>
</template>


<script>
  import cityData from '../lib/city'
  import classifyData from '../lib/classifyData'
  import moment from 'moment';

  export default {
    data() {
      return {
        isReadBool: false,
        cityData,
        classifyData,
        moment,
        timeOpen: false,
        dataSource: [],
        //图片上传
        previewVisible: false,
        previewImage: '',
        fileList: [],
        //联系邮箱
        result: [],
        //按钮加载
        loading: false,
        iconLoading: false,

        lose_address_info: '',
        user_address_info: '',

        releaseData: {
          Release_type: 1,
          goods_class: [],
          lose_time: '',
          lose_address: '',
          content: '',
          lose_img: [],
          username: '',
          telphone: '',
          qq: '',
          email: '',
          user_address: '',
          money: 0,
          top: false
        }

      }
    },
    components: {

    },
    methods: {
      isTop(value) {
        if(value.target.value == 2){
            this.releaseData.top = false;
        }else {
            this.releaseData.top = true;
        }
      },
      isRead() {
        this.isReadBool = !this.isReadBool
        console.log(this.isReadBool);
      },

      changeCity(value) {
        console.log(value.join('-'));
        this.releaseData.lose_address = value.join('-');
      },
      changeCityUser(value) {
        console.log(value.join('-'));
        this.releaseData.user_address = value.join('-');
      },
      filter(inputValue, path) {
        return (path.some(option => (option.label).toLowerCase().indexOf(inputValue.toLowerCase()) > -1));
      },

      changeClass(value) {
        console.log('ok');
        console.log(value)
        this.releaseData.goods_class = value;
      },

      handleChange(value) {
        console.log(value);
        this.releaseData.Release_type = parseInt(value.key);
      },

      onChangeTime(value, dateString) {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
        this.releaseData.lose_time = dateString;
      },
      onOkTime(value) {
        console.log('onOk: ', value);
      },
      //图片上传
      handleCancelUpload() {
        this.previewVisible = false
      },
      handlePreviewUpload(file) {
        this.previewImage = file.url || file.thumbUrl
        this.previewVisible = true
      },
      handleChangeUpload({
        fileList
      }) {
        //   this.fileList = fileList;

        this.releaseData.lose_img = fileList;


      },
      //联系邮箱自动提示
      handleSearchEmail(value) {
        let result;
        if (!value || value.indexOf('@') >= 0) {
          result = [];
        } else {
          result = ['qq.com', '163.com', 'gmail.com'].map(domain => `${value}@${domain}`);
        }
        this.result = result
      },

      // 表单验证
      isRelease() {

        if (this.releaseData.goods_class == 0) {
          this.$message.error('物品分类不能为空！');
          return false;
        } else if (!this.releaseData.lose_time) {
          this.$message.error('丢失时间不能为空！');
          return false;
        } else if (!this.releaseData.lose_address) {
          this.$message.error('丢失地点不能为空！');
          return false;
        } else if (!this.releaseData.content) {
          this.$message.error('内容描述不能为空！');
          return false;
        } else if (!this.releaseData.username) {
          this.$message.error('联系人不能为空！');
          return false;
        } else if (!this.releaseData.telphone) {
          this.$message.error('联系电话不能为空！');
          return false;
        } else if (!this.releaseData.qq) {
          this.$message.error('联系QQ不能为空！');
          return false;
        } else if (!this.releaseData.email) {
          this.$message.error('联系邮箱不能为空！');
          return false;
        } else if (!this.releaseData.user_address) {
          this.$message.error('联系地址不能为空！');
          return false;
        } else if (this.isReadBool != true) {
          this.$message.error('请阅读并同意条款！');
          return false;
        } else if(this.releaseData.lose_img!='') {

          //图片上传
          const pic = this.releaseData.lose_img;
          console.log(pic);
          let file
          for (let item of pic) {
            file = Bmob.File(item.name, item);
          }
          file.save().then(res => {
            console.log(res.length);
            console.log(res);
          })

          
        }else {
            this.releaseData.lose_img.push('http://diudiuo.com/images/zhanwei.png');
          // 表单上传
          this.releaseSubmit();
        }

      },
      releaseSubmit() {
        let addList = {
          "header_img": "http://www.diudiuo.com/images/head" + Math.floor(Math.random() * 9 + 1) + ".jpg",
          "Release_type": this.releaseData.Release_type,
          "goods_class": this.releaseData.goods_class,
          "lose_time": this.releaseData.lose_time,
          "lose_address": this.releaseData.lose_address+this.lose_address_info,
          "content": this.releaseData.content,
          "lose_img": this.releaseData.lose_img,
          "username": this.releaseData.username,
          "telphone": this.releaseData.telphone,
          "qq": this.releaseData.qq,
          "email": this.releaseData.email,
          "user_address": this.releaseData.user_address+this.user_address_info,
          "money": parseInt(this.releaseData.money),
          "top": this.releaseData.top
        }

        const query = Bmob.Query('list');
        query.save(addList).then(res => {
          console.log(res)
          this.$message.success('提交成功！');
          this.$router.push({path: '/index'});
        }).catch(err => {
          console.log(err)
        })
      }

    },
  }

</script>


<style lang="scss">
  @import '~@/assets/scss/_releaseForm';

</style>
