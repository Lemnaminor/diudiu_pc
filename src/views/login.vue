<template>
  <div id="login-box">
    <div class="login-box">

      <div class="login-cont1">
        <router-link to="/">
          <img src="~images/logo.png" alt="">
        </router-link>
        <p>OneDay ID 会员登录</p>
      </div>

      <div class="login-cont2">
        <form action="">
          <div>
            <input type="text" placeholder="请输入用户名" v-model="loginData.username">
            <i class="iconfont icon-yonghu"></i>
          </div>
          <div>
            <input type="password" placeholder="请输入密码" v-model="loginData.password">
            <i class="iconfont icon-icomima"></i>
          </div>
          <label for="check-psw">
            <!-- <input id="check-psw" type="checkbox">
            <span>记住密码</span> -->
            <a-checkbox @change="isRead">记住密码</a-checkbox>
          </label>
          <!-- <a href="password.html">忘记密码？</a> -->
          <!-- <input class="login-btn" type="button" value="登&emsp;录"> -->
          <a-button @click="isLogin" type="primary" size="large" block :loading="loading">登 录</a-button>
        </form>
      </div>

      <div class="login-cont3">
        <span>其他登录方式：</span>
        <div class="other-login">
          <a href="javascript:;">
            <i class="iconfont icon-weixin"></i>
          </a>
          <a href="javascript:;">
            <i class="iconfont icon-qq1"></i>
          </a>
          <a href="javascript:;">
            <i class="iconfont icon-weibo"></i>
          </a>
          <a href="javascript:;">
            <i class="iconfont icon-iconfontrectangle390"></i>
          </a>
        </div>
        <router-link to="/register">注册OneDay ID</router-link>
      </div>

    </div>

    <!-- Copyright -->
    <div class="login-copyright">
      <p>©2018 丢丢网 版权所有 蜀ICP备19007965号</p>
    </div>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        isReadBool: false,
        loading: false,
        loginData: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      isLogin() {

        if (!this.loginData.username) {
          this.$message.error('用户名不能为空！');
          return false;
        } else if (!this.loginData.password) {
          this.$message.error('密码不能为空！');
          return false;
        } else {
          this.loginSubmit();
        }

      },
      isRead() {
        this.isReadBool = !this.isReadBool
        console.log(this.isReadBool);
      },
      loginSubmit() {
        Bmob.User.login(this.loginData.username, this.loginData.password).then(res => {
          console.log(res)
          this.loading = true;
          if(res.objectId){
            this.loading = false;
            this.$message.success('登录成功！');
            setTimeout(() => {
              this.$router.push({
                path: `/index`,
              })
            }, 1000)
          }
        }).catch(err => {
          console.log(err)
          this.loading = false;
          this.$message.error(err.error);
        });
      }
    },
  }

</script>

<style lang="scss" scoped>
  @import "~@/assets/scss/_login";

</style>
