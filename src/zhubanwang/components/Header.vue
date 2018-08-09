<template>
  <div>
    <header>
      <img src="https://www.xingshulin.com/common/images/logo.svg" alt="驻班网" class="icon">
      <div class="con">
        <div class="user">
          <img :src="userInfo.userPic" alt="头像" class="user-pic">
          <span class="name-font">{{userInfo.userName}}</span>
          <span class="font">{{`（${userInfo.userGrade}级 ${userInfo.userClass}班）`}}</span>
        </div>
        <div class="phone">
          <img src="../images/phone.png" alt="phone" class="phone-icon">
          <span class="font">0316-5551555</span>
        </div>
        <div class="wechat" @click="showToolTip = !showToolTip">
          <img src="../images/WeChat.png" alt="wechat" class="wechat-icon">
          <span class="font">微信公众号</span>
          <div class="tootip" v-if="showToolTip">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKwAAACsCAYAAADmMUfYAAAABmJLR0QA/wD/AP+gvaeTAAAEZElEQVR4nO3dQW4jIRAF0PEo97+yZxv1wghRBXzPe1vH3W3nC1VIAa/3+/3+AyH+nn4AmCGwRBFYoggsUQSWKAJLFIElisASRWCJIrBEEViiCCxRBJYoAksUgSWKwBJFYIkisEQRWKL8VF/w9XpVX/Kj2SVpz+cbvX/086PP271kbvb+t/9+RoywRBFYoggsUcpr2KfqGma2Bhv9/KhG7X7+6hpz9nlP/35mGWGJIrBEEViitNewT7M1zmqNtfr+1XnW2Zp19nrVdv9+ZhlhiSKwRBFYomyvYW83W3Punscdma2J0xhhiSKwRBFYonxdDds9T7la01b31+7ubz3NCEsUgSWKwBJlew3bPS+4usZr9PponnW1Bj3dO3H7vK0RligCSxSBJUp7Dbt7nrB6HrS65rzt+dLmcY2wRBFYoggsUV7v2yfeJt227n+keh5WPyxcRGCJIrBEuW5fgtPzhrP9rrPvn3W6v/a2GtgISxSBJYrAEqX9jIPV/tHTNdXq885ef6T7+6juTXDGAf81gSWKwBKlvZeguz9z9Xq79/ivPudrd43f3S88YoQlisASRWCJsv2s2dV52u5eg9WacvWcrN3Pv/o3w+41YUZYoggsUQSWKNet6apec7V7DVf38++edz7dy/FkhCWKwBJFYIly/IyD6r2qdvejzl5/tZ+2ut84jRGWKAJLFIElyvY1Xd3/Kx85vR/rbfOgaTWuEZYoAksUgSVK3Jqu29fNj+5Xbfd+srvXyD0ZYYkisEQRWKJsX9M1sro/6+h5Tv+vvbtGvL1mXmWEJYrAEkVgiVJew3bXiN3zrN1rwlZ7D7r3Hag+M6GaEZYoAksUgSXKded0PXX3DuyuEVf7ZXefaTDL/rDwi8ASRWCJcl0vweh6q/Oqs9fv/jwj3WvIuvdxqGaEJYrAEkVgidI+D9u9D8BI9xqx23oPqnsBur+/WUZYoggsUQSWKNftDzt6vXpesfr+p/tvZ++3+/2rjLBEEViiCCxR2td0jV6/bZ7vtnX/q/syPFXve7C7pjXCEkVgiSKwRGmfh11dU1V9xsDI6T3/qz9v9fdzem8yIyxRBJYoAkuU8jMO0vZjnVXd7zp7/d3zxLedeWCEJYrAEkVgiXK8l6DabH/rU3c/a/feXaPrjczOg6/eb5YRligCSxSBJcr1e2uNnO5fHTm9BuqpuibVDwsfCCxRBJYo2/fWWrX7nKrR9bvdtr/r6f1kjbBEEViiCCxR4s7pmtW9P+ru3oXqmrz6/XoJ4BeBJYrAEuX4/rDVTtdsp8/1etp9JkI3IyxRBJYoAkuUr6thR7rnZWfv3221Br2tn9cISxSBJYrAEmV7DdtdE63WnN1n487WlNV7W1XPUztrFj4QWKIILFG2n3Hw7brPwdrdXztbU+uHhV8EligCS5TyMw6gkxGWKAJLFIElisASRWCJIrBEEViiCCxRBJYoAksUgSWKwBJFYIkisEQRWKIILFEEligCSxSBJco/6R29idWJFXcAAAAASUVORK5CYII="
              alt="">
            <p>扫一扫关注驻班网</p>
          </div>
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
      userInfo: {
        userName: { type: String },
        userPic: { type: String },
        userClass: { type: String },
        userGrade: { type: String },
      },
    },
    data() {
      return {
        showToolTip: false,
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
      position: relative;
    }

    .tootip {
      position: absolute;
      top: rem(55);
      left: rem(1);
      text-align: center;
      box-shadow: 0px 0px 13px rgba(0, 0, 0, 0.1);
      opacity: 1;
      -webkit-transition: all 0.5s linear;
      -moz-transition: all 0.5s linear;
      transition: all 0.5s linear;
    }
    .tootip img {
      width: 2.48rem;
    }
    .tootip p {
      font-size: 0.23rem;
      color: black;
      line-height: 0.23rem;
      padding-bottom: 0.2rem;
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