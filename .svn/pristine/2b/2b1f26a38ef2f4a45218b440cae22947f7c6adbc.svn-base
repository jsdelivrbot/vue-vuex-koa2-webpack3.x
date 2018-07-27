<template>
  <div class="chat">
    <header>
      <router-link class="logo" to="/message">新消息（{{unreadMessageCount}}条）</router-link>
      <h6>{{targetName}}</h6>
      <!-- <i></i> -->
    </header>
    <div id="msg" class="msg" :style="{height:msgHeight}">
      <MsgListModule ref="msgList"></MsgListModule>
    </div>
    <div class="operation">
      <ul class="tool"></ul>
      <form class="focusing" action="#">
        <input class="content" v-model="msg" />
        <i class="emoticon"></i>
        <!-- <i class="media"></i> -->
        <i @click="sendMsg" class="send"></i>
      </form>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.chat {
  header {
    position: fixed;
    width: 100%;
    top: 0;
    height: 2.8rem;
    line-height: 2.8rem;
    text-align: center;
    background: #008b8b;
    overflow: hidden;
    a {
      width: 35%;
      display: block;
      float: left;
      font-size: 0.8rem;
      color: #fff;
      background: url("./images/towards-left.svg") top 1.05rem left 0.8rem
        no-repeat;
      background-size: 10%;
      text-indent: 0.4rem;
      line-height: 3.1rem;
    }
    h6 {
      width: 45%;
      padding-right: 15%;
      float: left;
      font-size: 1.2rem;
      color: #fff;
    }
    i {
      display: block;
      width: 20%;
      float: left;
      height: 100%;
      background: url("./images/more.svg") center right 0.5rem no-repeat;
      background-size: 40%;
    }
  }
  .msg {
    overflow: scroll;
    position: fixed;
    width: 100%;
    top: 2.8rem;
  }
  .operation {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 3.2rem;
    padding: 0.35rem 0;
    border-top: 1px solid #eee;
    background: #efefef;
    .focusing {
      margin: 0.25rem 0.6rem;
      height: 2rem;
      input {
        width: 20rem;
        height: 2rem;
        line-height: 2rem;
        border-radius: 0.2rem;
        border: 1px solid #ddd;
        float: left;
        margin-right: 0.4rem;
        text-indent: 0.5rem;
      }
      i {
        width: 1.9rem;
        margin: 0 0.1rem;
        height: 1.9rem;
        float: left;
        display: block;
        &.emoticon {
          background: url("./images/emoticon.svg") no-repeat center center;
          background-size: contain;
        }
        &.media {
          background: url("./images/media.svg") no-repeat center center;
          background-size: contain;
        }
        &.send {
          background: url("./images/send.svg") no-repeat center center;
          background-size: contain;
        }
      }
    }
  }
}
</style>

<script>

import { mapGetters } from 'vuex'
import { Navbar, TabItem } from 'mint-ui';
import { Toast, MessageBox } from 'mint-ui';
import request from "@/utils/request"
import MsgListModule from "./companions/msgListModule.vue";

export default {
  data() {
    return {
      selected: "artificial",
      msg: ''
    }
  },
  sockets: {
    receiveMsg: function (o) {

      let query = this.$route.query,
        userId = query.userId;

      // 当前消息来源自己或者当前对话用户
      if (o.from == "my" || userId == o["from_user"]._id) {
        this.$refs.msgList.receive(o);
      } else {

        let unreadMessageCount = this.$store.getters.unreadMessageCount;
        this.$store.commit("changeUnreadMessageCount", unreadMessageCount + 1);
      }
    }
  },
  computed: {

    ...mapGetters(['unreadMessageCount']),
    msgHeight: function () {
      return window.screen.height - 3.2 * 16 - 2.8 * 16;
    },
    targetName: function () {
      return this.$route.query.nickname;
    }
  },
  methods: {

    // 发送消息
    sendMsg: function () {

      let query = this.$route.query,
        userId = query.userId;

      this.$socket.emit('sendMsg', {
        toUserId: userId,
        msg: this.msg
      });

      this.$socket.emit('sendMsg', {
        toSocketId: this.$socket.id,
        msg: this.msg
      });

      this.msg = "";
    }
  },
  components: {
    MsgListModule
  }
}

</script>