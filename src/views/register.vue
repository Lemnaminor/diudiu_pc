<template>
  <div>
    <div class="login-box register-box">

      <div class="login-cont1">
        <router-link to="/index"><img src="~images/logo.png" alt=""></router-link>
        <p>OneDay ID 会员注册</p>
      </div>

      <div class="login-cont2 register-cont2">
        <form action="">
          <div>
            <input type="text" placeholder="请输入用户名" v-model="registerData.username">
            <i class="iconfont icon-yonghu"></i>
          </div>
          <div>
            <input type="password" placeholder="请输入密码" v-model="registerData.password">
            <i class="iconfont icon-icomima"></i>
          </div>
          <div>
            <input type="password" placeholder="请重复输入密码" v-model="registerData.password_reply">
            <i class="iconfont icon-icomima"></i>
          </div>
          <label for="check-psw">
            <a-checkbox @change="isRead">我已阅读并同意<router-link to="path">《丢丢网条款声明》</router-link>。</a-checkbox>
          </label>
          <a-button @click="isSubmit" type="primary" size="large" block :loading="loading">注 册</a-button>
        </form>
      </div>

      <div class="register-cont3">
        <span>如果已注册OneDay ID，请点击此处</span>
        <router-link to="/login">登录</router-link>
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
        registerData: {
          username: '',
          password: '',
          password_reply: ''
        },
      }
    },
    methods: {
      info() {
        this.$message.info('This is a normal message');
      },
      isSubmit() {
        if (!this.registerData.username) {
          this.$message.error('用户名不能为空！');
          return false;
        } else if (!this.registerData.password) {
          this.$message.error('密码不能为空！');
          return false;
        } else if (!this.registerData.password_reply) {

          this.$message.error('确认密码不能为空！');
          return false;
        } else if (this.registerData.password !== this.registerData.password_reply) {
          this.$message.error('密码输入不一致！');
          return false;
        } else if (this.isReadBool != true) {
          this.$message.error('请阅读并同意条款！');
          return false;
        } else {
          this.isDisabled = false;
          this.loading = true;
          this.registerSubmit();
          //   this.$message.success('注册成功！');
        }

      },
      isRead() {
        this.isReadBool = !this.isReadBool
        console.log(this.isReadBool);
      },
      registerSubmit() {
        let params = {
          username: this.registerData.username,
          password: this.registerData.password
        }
        Bmob.User.register(params).then(res => {
          console.log(res);
          this.loading = true;
          if (res.objectId) {
            this.loading = false;
            this.$message.success('注册成功！');
            setTimeout(() => {
              this.$router.push({
                path: `/login`,
              })
            }, 1000)
          }
        }).catch(err => {
          console.log(err)
          this.loading = false;
          this.$message.error(err.error);
        });
      }
    }
  }

</script>


<style lang="scss">
  @import "~@/assets/scss/_login";
  @import "~@/assets/scss/_register";

</style>
