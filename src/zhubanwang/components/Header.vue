<template>
  <div>
    <header>
      <img src="https://www.xingshulin.com/common/images/logo.svg" alt="驻班网" class="icon">
      <div class="con">
        <div class="user">
          <img :src="userPic" alt="头像" class="user-pic">
          <span class="name-font">{{userName}}</span>
          <span class="font">{{`（${userGrade}级 ${userClass}班）`}}</span>
        </div>
        <div class="phone">
          <img src="../images/phone.png" alt="phone" class="phone-icon">
          <span class="font">0316-5551555</span>
        </div>
        <div class="wechat">
          <img src="../images/WeChat.png" alt="wechat" class="wechat-icon">
          <span class="font">微信公众号</span>
        </div>
        <img src="../images/close.png" alt="退出登录" class="exit" @click="exit">
      </div>
    </header>
    <section>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'Header',
    props: {
      userName: { type: String },
      userPic: { type: String },
      userClass: { type: String },
      userGrade: { type: String },
    },
    data() {
      return {
      }
    },
    methods: {
      exit() {
        console.log('exit')
      },
    },
  }
</script>


<style lang="scss" scoped>
  @import '../theme';

  header {
    display: flex;
    padding: rem(12) rem(15);
    justify-content: space-between;
    align-items: center;
    background: #fff;
  }

  .icon {
    width: rem(93);
    height: rem(30);
  }

  .con {
    display: flex;
    align-items: center;
    width: rem(500);
    justify-content: space-between;

    .user {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .wechat {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .phone {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .font {
      color: rgb(161,170,179);
      font-size: 16px;
    }

    .phone-icon {
      width: rem(18);
      height: rem(20);
      margin-right: rem(8);
    }

    .wechat-icon {
      width: rem(20);
      height: rem(17);
      margin-right: rem(8);
    }

    .exit {
      width: rem(18);
      height: rem(18);
    }

    .user-pic {
      width: rem(30);
      height: rem(30);
      border-radius: 50%;
      margin-right: rem(8);
    }

    .name-font {
      color: rgb(102,102,102);
    }
  }

</style>