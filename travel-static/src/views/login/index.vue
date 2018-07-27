<template>
  <div>
    <form model="loginForm" class="login">
      <div class="logo">
        <img src="../../images/logo.png" />
      </div>
      <div class="login-mode">
        <a class="active">邮箱登录</a>
        <i></i>
        <a>手机号登录</a>
      </div>
      <div class="input-wrap">
        <input v-model="loginForm.email" name="email" v-validate="'required|email'" type="text" placeholder="您的邮箱地址" maxlength="28" />
        <span v-show="errors.has('email')">{{ errors.first('email') }}</span>
      </div>
      <div class="input-wrap">
        <input v-model="loginForm.password" name="password" v-validate="'required|alpha_num|min:6|max:32'" type="password" placeholder="您的密码" maxlength="32" @keyup.enter="login" />
        <span v-show="errors.has('password')">{{ errors.first('password') }}</span>
      </div>
      <div class="help">
        <a>忘记密码?</a>
      </div>
      <div class="btns">
        <a @click="login" v-bind:class="{ 'btn_disable' : loginLock }" class="login-btn">登录</a>
        <router-link class="register-btn" to="/register">快速注册</router-link>
      </div>
    </form>
  </div>
</template>
<style lang="scss" scoped>
.login {
  margin: 0 1rem;
  .logo {
    text-align: center;
    padding: 5rem 0;
  }
  .login-mode {
    overflow: hidden;
    margin-bottom: 2rem;
    height: 1.8rem;
    i {
      width: 1%;
      background: #eee;
      float: left;
      display: block;
      height: 100%;
    }
    a {
      width: 49.5%;
      display: block;
      float: left;
      text-align: center;
      font-size: 1.2rem;
      color: #999;
      &.active {
        font-weight: bold;
      }
    }
  }
  .input-wrap {
    margin: 1rem 0;
    input {
      background: #eee;
      line-height: 2.8rem;
      height: 2.6rem;
      border-radius: 0.5rem;
      width: 100%;
      font-size: 1.1rem;
      color: #666;
      text-align: center;
    }
    span {
      font-size: 0.8rem;
      text-align: right;
      width: 100%;
      display: block;
      color: #d19a66;
      line-height: 2rem;
      height: 1rem;
    }
  }
  .help {
    text-align: right;
    a {
      font-size: 0.9rem;
      color: #008b8b;
    }
  }
  .btns {
    a {
      display: block;
      width: 100%;
      text-align: center;
      height: 2.5rem;
      line-height: 2.6rem;
      font-weight: bold;
      border-radius: 1rem;
      margin: 1rem 0;
      &.login-btn {
        background: #008b8b;
        color: #fff;
      }
      &.register-btn {
        background: #fff;
        color: #008b8b;
        border: 1px solid #008b8b;
      }
      &.btn_disable {
        background: #999;
      }
    }
  }
}
</style>
<script>

import { Toast, MessageBox } from 'mint-ui';
import { setCookie } from '@/utils/cookie'
import request from "@/utils/request"
import md5 from "js-md5"
import '@/utils/validate.js'

export default {
  name: "carrousel",
  data() {
    return {
      loginLock: false,//登录锁
      loginForm: {
        email: '',
        password: ''
      }
    };
  },
  components: {
  },
  computed: {
    encryptPassword: function () {
      return md5(this.loginForm.password);
    }
  },
  mounted() {
  },
  methods: {

    login() {

      if (this.loginLock) {
        return;
      }

      this.$validator.validateAll().then((flag) => {

        if (!flag) {
          return;
        }

        this.loginLock = true;
        this.loginForm.password = this.encryptPassword;
        request.post("/user/login", this.loginForm).then(e => {
          if (e.err) {
            Toast(e.err);
            this.loginLock = false;
          } else {
            setCookie('token', e.result.token);

            let redirect = this.$route.query.redirect || "/mine";
            this.$router.push(redirect);
          }
        }).catch(error => {
          Toast(error);
          this.loginLock = false;
        });

      });

    }
  }
};
</script>