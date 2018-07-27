<template>
  <div>
    <!--未读信息-->
    <ul>
      <li v-for="(item, index) in unreadList" :key="index" :class="item.from">
        <img :src="item.from_user[0].portrait_img_src || require('../images/single.svg')" />
        <div class="info">
          <label>{{item.from_user[0].nickname}}
            <span>[{{item.create_date |dateformat}}]</span>
          </label>
          <p>{{item.content}}</p>
        </div>
      </li>
    </ul>
    <div v-if="unreadList.length" class="line">以上是未读消息...</div>
    <!--历史信息-->
    <ul>
      <li v-for="(item, index) in historyList" :key="index" :class="item.from">
        <img :src="item.from_user[0].portrait_img_src || require('../images/single.svg')" />
        <div class="info">
          <label>{{item.from_user[0].nickname}}
            <span>[{{item.create_date |dateformat}}]</span>
          </label>
          <p>{{item.content}}</p>
        </div>
      </li>
    </ul>
    <div v-if="historyList.length" class="line">以上是历史消息...</div>
    <!--即时信息-->
    <ul>
      <li v-for="(item, index) in messageList" :key="index" :class="item.from">
        <img :src="item.from_user.portrait_img_src || require('../images/single.svg')" />
        <div class="info">
          <label>{{item.from_user.nickname}}
            <span>[{{item.create_date |dateformat}}]</span>
          </label>
          <p>{{item.content}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.chat {
  .msg {
    ul {
      overflow: hidden;
      li {
        width: 100%;
        min-height: 3rem;
        margin: 1.2rem 0;
        padding-top: 0.25rem;
        overflow: hidden;
        img {
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 5rem;
        }
        .info {
          label {
            height: 1.2rem;
            line-height: 1.4rem;
            display: block;
            color: #666;
            font-size: 0.8rem;
            span {
              color: #999;
              margin-left: 0.5rem;
            }
          }
          p {
            font-size: 0.8rem;
            min-height: 1.3rem;
            line-height: 1.5rem;
            display: block;
            max-width: 19rem;
            white-space: normal;
            word-break: break-all;
          }
        }
        &.other {
          img {
            float: left;
            margin-left: 0.5rem;
          }
          .info {
            float: left;
            margin-left: 0.6rem;
            label {
              text-align: left;
            }
            p {
              text-align: left;
            }
          }
        }
        &.my {
          img {
            float: right;
            margin-right: 0.5rem;
          }
          .info {
            float: right;
            margin-right: 0.5rem;
            label {
              text-align: right;
            }
            p {
              text-align: left;
            }
          }
        }
      }
    }
    .line {
      padding: 0 20px 0;
      margin: 0.5rem auto 1rem;
      line-height: 0.1rem;
      border-left: 7.5rem dashed #eee;
      border-right: 7.5rem dashed #eee;
      text-align: center;
      font-size: 0.7rem;
      color: #ccc;
      width: 92%;
    }
  }
}
</style>

<script>

import { Toast, MessageBox } from 'mint-ui';
import request from "@/utils/request"

export default {
  data() {
    return {
      messageList: [],//即时信息
      unreadList: [],//未读信息
      historyList: []//历史消息
    }
  },
  watch: {
    messageList() {
      this.setScrollTop();
    },
    unreadList() {
      this.setScrollTop();
    },
    historyList() {
      this.setScrollTop();
    }
  },
  created() {

    // 读取所有未读消息
    this.getAllUnreadList().then(e => {

      if (!e.length) {
        // 不存在未读消息则拉去最近五条信息
        this.getHistoryMessage();
      } else {
        //存在则更新所有未读消息状态为已读
        this.updateUnreadMessage();
      }
    });

  },
  methods: {

    receive: function (e) {
      this.messageList.push(e);
      e.msgId && this.updateMessageByMid(e.msgId);
    },

    setScrollTop: function () {
      setTimeout(function () {
        document.getElementById('msg').scrollTop = document.getElementById('msg').scrollHeight;
      }, 1);
    },
    // 根据消息ID更新读取状态
    updateMessageByMid: function (msgId) {
      request.post("/message/updateMessageByMid", {
        "_id": msgId
      }).then(e => {
        if (e.err) {
          Toast(e.err);
        }
      }).catch(error => {
        Toast(error);
      });
    },
    // 获取最近历史消息
    getHistoryMessage: function () {

      let query = this.$route.query,
        userId = query.userId;

      request.post("/message/getHistoryMessage", {
        "from_uid": userId
      }).then(e => {

        if (e.err) {
          Toast(e.err);
        } else {
          this.historyList = e.result;
        }

      }).catch(error => {
        Toast(error);
      });
    },

    // 更新未读消息读取状态
    updateUnreadMessage: function () {

      let query = this.$route.query,
        userId = query.userId;

      request.post("/message/updateUnreadMessage", {
        "from_uid": userId
      }).then(e => {
        if (e.err) {
          Toast(e.err);
        } else {
          let count = e.result,//更新成功条数
            unreadMessageCount = this.$store.getters.unreadMessageCount;
          this.$store.commit("changeUnreadMessageCount", unreadMessageCount - count);
        }
      }).catch(error => {
        Toast(error);
      });
    },

    // 拉取未读消息
    getAllUnreadList: function () {

      let _this = this;
      return new Promise(function (resolve, reject) {

        request.post("/message/getAllUnreadList", {
          from_uid: _this.$route.query.userId
        }).then(e => {
          if (e.err) {
            Toast(e.err);
          } else {
            let result = e.result;
            _this.unreadList = result;
            resolve(result);
          }
        }).catch(error => {
          Toast(error);
        });
      })
    }
  }
}

</script>