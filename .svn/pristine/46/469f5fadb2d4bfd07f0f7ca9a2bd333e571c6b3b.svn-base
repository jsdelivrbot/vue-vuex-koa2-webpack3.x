<template>
  <header>
    <router-link class="logo" to="/"></router-link>
    <div class="search">
      <input type="text" placeholder="搜索目的地/攻略/游记" />
      <i></i>
    </div>
  </header>
</template>
<style lang="scss" scoped>
header {
  height: 3.2rem;
  padding: 0.5rem;
  .logo {
    display: block;
    float: left;
    width: 6rem;
    height: 100%;
    background: url("../images/logo.png") no-repeat center center;
    background-size: contain;
  }
  .search {
    display: block;
    float: left;
    height: 100%;
    margin-left: 0.8rem;
    width: 18rem;
    border-radius: 0.5rem;
    background: #eee;
    input {
      height: 100%;
      margin-left: 0.8rem;
      width: 12rem;
      background: transparent;
    }
    i {
      float: right;
      width: 1.5rem;
      height: 100%;
      background: url("../images/btn_search.png") no-repeat center right;
      background-size: contain;
      margin-right: 0.5rem;
    }
  }
  .user {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    float: right;
    width: 2.5rem;
    .login {
      color: #008b8b;
    }
  }
}
</style>
<script>
import { mapGetters } from 'vuex'
import { getCookie } from '@/utils/cookie'
export default {
  computed: {
    ...mapGetters(['isLogin'])
  },
  created: function () {

    let token = getCookie('token');
    if (token) {
      this.$store.commit("changeIsLogin", true);
    } else {
      this.$store.commit("changeIsLogin", false);
    }

  }
}
</script>