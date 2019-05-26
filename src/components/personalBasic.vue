<template>
  <div id="personalBasic_box">
    <a-row>
      <a-col :span="24" class="header_box">
        <!-- <a-avatar :size="100" icon="user" /> -->
        <a-upload
        name="avatar"
        listType="picture-card"
        class="avatar-uploader"
        :showUploadList="false"
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        :beforeUpload="beforeUpload"
        @change="handleChange"
      >
        <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
        <div v-else>
            <a-icon :type="loading ? 'loading' : 'user'" />
            <div class="ant-upload-text">上传头像</div>
        </div>
      </a-upload>
        <p>{{personalData.username}}</p>
      </a-col>
      <a-col :span="24" class="personalBasic_info">
        <a-col :span="24">
          <a-col :span="3">
            <span><i class="iconfont icon-wode"></i>昵称：</span>
          </a-col>
          <a-col :span="21">
            <a-input placeholder="请填写联系人姓名" class="inputWidth1" v-model="personalData.username" :disabled="disabled" />
          </a-col>
        </a-col>
        <a-col :span="24">
          <a-col :span="3">
            <span><i class="iconfont icon-wode"></i>性别：</span>
          </a-col>
          <a-col :span="21">
            <a-radio-group name="sexGroup" :defaultValue="1" :disabled="disabled">
              <a-radio :value="1">男</a-radio>
              <a-radio :value="2">女</a-radio>
            </a-radio-group>
          </a-col>
        </a-col>
        <a-col :span="24">
          <a-col :span="3">
            <span><i class="iconfont icon-dianhua"></i>联系电话：</span>
          </a-col>
          <a-col :span="21">
            <a-input placeholder="请填写联系电话" class="inputWidth1" v-model="personalData.telphone" :disabled="disabled" />
          </a-col>
        </a-col>
        <a-col :span="24">
          <a-col :span="3">
            <span><i class="iconfont icon-QQ"></i>联系QQ：</span>
          </a-col>
          <a-col :span="21">
            <a-input placeholder="请填写联系QQ" class="inputWidth1" v-model="personalData.qq" :disabled="disabled" />
          </a-col>
        </a-col>
        <a-col :span="24">
          <a-col :span="3">
            <span><i class="iconfont icon-email"></i>联系邮箱：</span>
          </a-col>
          <a-col :span="21">
            <a-auto-complete @search="handleSearchEmail" placeholder="请填写联系邮箱" class="inputWidth1"
              v-model="personalData.email" :disabled="disabled">
              <template slot="dataSource">
                <a-select-option v-for="email in result" :key="email">{{email}}</a-select-option>
              </template>
            </a-auto-complete>
          </a-col>
        </a-col>
        <a-col :span="24">
          <a-col :span="3">
            <span><i class="iconfont icon-dizhi"></i>联系地址：</span>
          </a-col>
          <a-col :span="21">
            <a-input-group compact>
              <a-cascader :options="cityData" :showSearch="{filter}" @change="changeCityUser" :defaultValue="personalData.address" placeholder="请选择地址"
                style="width:35%;" v-model="personalData.address" :disabled="disabled" />
              <a-input style="width: 65%" placeholder="请输入街道地址..." v-model="personalData.addressInfo" :disabled="disabled" />
            </a-input-group>
          </a-col>
        </a-col>
        <a-col :span="24" class="btn_box">
            <a-button type="primary" @click="bianji">编辑</a-button>
            <a-button type="primary" :loading="iconLoading" @click="enterIconLoading">保存</a-button>
        </a-col>
      </a-col>
    </a-row>
  </div>
</template>


<script>
  import cityData from '../lib/city'

function getBase64 (img, callback) {
  const reader = new FileReader()
  reader.addEventListener('load', () => callback(reader.result))
  reader.readAsDataURL(img)
}

  export default {
    data() {
      return {
        disabled: true,
        loading: false,
      iconLoading: false,
        //联系邮箱
        result: [],
        //联系地址
        cityData,

        personalData: {
          username: '梁先生',
          telphone: '18422226666',
          qq: '291294950',
          email: '291294950@qq.com',
          address: ['四川省', '成都市', '青羊区'],
          addressInfo: '红星路一段',
        }
      }
    },
    methods: {
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
      //联系地址
      changeCityUser(value) {
        console.log(value.join('/'));
        this.releaseData.user_address = value.join('/');
      },
      filter(inputValue, path) {
        return (path.some(option => (option.label).toLowerCase().indexOf(inputValue.toLowerCase()) > -1));
      },

      //点击保存
      enterIconLoading () {
        if(this.disabled == true){
            this.$message.error('请编辑后保存！');
        }else {
            this.iconLoading = true;
        setTimeout(()=>{
            this.$message.success('提交成功！');
            this.iconLoading = false;
            this.disabled = true;
        },1500)
        }
    },

    bianji(){
        this.disabled = false;
    },

    //头像上传
    handleChange (info) {
      if (info.file.status === 'uploading') {
        this.loading = true
        return
      }
      if (info.file.status === 'done') {
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, (imageUrl) => {
          this.imageUrl = imageUrl
          this.loading = false
        })
      }
    },
    beforeUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      if (!isJPG) {
        this.$message.error('You can only upload JPG file!')
      }
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isLt2M) {
        this.$message.error('Image must smaller than 2MB!')
      }
      return isJPG && isLt2M
    },


    },
  }

</script>


<style lang="scss">
  @import '~@/assets/scss/_personalBasic';

</style>
