<template>
  <div class="pc-footer">
    <div class="con">
      <section class="contact">
        <p class="title">联系我们</p>
        <ul>
          <li>
            <img src="./img/icon_ad.png" alt="地址">
            <span class="font">北京市朝阳 广渠路首城国际大厦</span>
          </li>
          <li>
            <img src="./img/icon_tel.png" alt="联系方式">
            <span class="font">0100-29999304</span>
          </li>
          <li>
            <img src="" alt="">
            <span class="font">0910-33948400</span>
          </li>
          <li>
            <img src="./img/icon_mail.png" alt="邮箱">
            <span class="font">1233@qq.com</span>
          </li>
        </ul>
      </section>
      <section class="link">
        <p class="title">快速导航</p>
        <div class="link-con">
            <ul>
              <li>首页</li>
              <li>组卷</li>
              <li>阅卷</li>
            </ul>
            <ul>
              <li>班级学情</li>
              <li>资讯管理</li>
              <li>个人信息</li>
            </ul>
        </div>
      </section>
      <section class="wechat">
        <p class="title">微信公众号</p>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKwAAACsCAYAAADmMUfYAAAABmJLR0QA/wD/AP+gvaeTAAAEZElEQVR4nO3dQW4jIRAF0PEo97+yZxv1wghRBXzPe1vH3W3nC1VIAa/3+/3+AyH+nn4AmCGwRBFYoggsUQSWKAJLFIElisASRWCJIrBEEViiCCxRBJYoAksUgSWKwBJFYIkisEQRWKL8VF/w9XpVX/Kj2SVpz+cbvX/086PP271kbvb+t/9+RoywRBFYoggsUcpr2KfqGma2Bhv9/KhG7X7+6hpz9nlP/35mGWGJIrBEEViitNewT7M1zmqNtfr+1XnW2Zp19nrVdv9+ZhlhiSKwRBFYomyvYW83W3Punscdma2J0xhhiSKwRBFYonxdDds9T7la01b31+7ubz3NCEsUgSWKwBJlew3bPS+4usZr9PponnW1Bj3dO3H7vK0RligCSxSBJUp7Dbt7nrB6HrS65rzt+dLmcY2wRBFYoggsUV7v2yfeJt227n+keh5WPyxcRGCJIrBEuW5fgtPzhrP9rrPvn3W6v/a2GtgISxSBJYrAEqX9jIPV/tHTNdXq885ef6T7+6juTXDGAf81gSWKwBKlvZeguz9z9Xq79/ivPudrd43f3S88YoQlisASRWCJsv2s2dV52u5eg9WacvWcrN3Pv/o3w+41YUZYoggsUQSWKNet6apec7V7DVf38++edz7dy/FkhCWKwBJFYIly/IyD6r2qdvejzl5/tZ+2ut84jRGWKAJLFIElyvY1Xd3/Kx85vR/rbfOgaTWuEZYoAksUgSVK3Jqu29fNj+5Xbfd+srvXyD0ZYYkisEQRWKJsX9M1sro/6+h5Tv+vvbtGvL1mXmWEJYrAEkVgiVJew3bXiN3zrN1rwlZ7D7r3Hag+M6GaEZYoAksUgSXKded0PXX3DuyuEVf7ZXefaTDL/rDwi8ASRWCJcl0vweh6q/Oqs9fv/jwj3WvIuvdxqGaEJYrAEkVgidI+D9u9D8BI9xqx23oPqnsBur+/WUZYoggsUQSWKNftDzt6vXpesfr+p/tvZ++3+/2rjLBEEViiCCxR2td0jV6/bZ7vtnX/q/syPFXve7C7pjXCEkVgiSKwRGmfh11dU1V9xsDI6T3/qz9v9fdzem8yIyxRBJYoAkuU8jMO0vZjnVXd7zp7/d3zxLedeWCEJYrAEkVgiXK8l6DabH/rU3c/a/feXaPrjczOg6/eb5YRligCSxSBJcr1e2uNnO5fHTm9BuqpuibVDwsfCCxRBJYo2/fWWrX7nKrR9bvdtr/r6f1kjbBEEViiCCxR4s7pmtW9P+ru3oXqmrz6/XoJ4BeBJYrAEuX4/rDVTtdsp8/1etp9JkI3IyxRBJYoAkuUr6thR7rnZWfv3221Br2tn9cISxSBJYrAEmV7DdtdE63WnN1n487WlNV7W1XPUztrFj4QWKIILFG2n3Hw7brPwdrdXztbU+uHhV8EligCS5TyMw6gkxGWKAJLFIElisASRWCJIrBEEViiCCxRBJYoAksUgSWKwBJFYIkisEQRWKIILFEEligCSxSBJco/6R29idWJFXcAAAAASUVORK5CYII=" alt="code" class="wechat-pic">
        <p class="font">zhubanwang001</p>
      </section>
    </div>
    <div class="copyright">备案号备案号备案号备案号备案号备案号备案号备案号备案号备案号备案号备案号备案号备案号备案号备案号备案号</div>
  </div>
</template>

<script>
  
</script>

<style lang="scss" scoped>
  @import '../theme';

  .pc-footer {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgb(37,43,46);
  }
  .con {
    width: rem(800);
    // border: 1px solid;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
     // padding-top: rem(38);
    padding: rem(38) 0;
  }

  .contact {
    img {
      width: rem(8);
      height: rem(8);
      margin-right: rem(8);
      display: inline-block;
    }

    span {
      font-size: 13px;
      color: rgba(255,255,255,0.5)
    }
  }

  .link {
    font-size: 13px;
    color: rgba(255,255,255,0.5);
    // display: flex;
    .link-con {
      display: flex;
    }

    li {
      margin-bottom: 0.3rem;
      margin-right: 1rem;
      list-style: square;
      margin-left: 0.3rem;
    }
  }
  
  .mr50 {
    margin-right: rem(50);
  }

  .wechat {
    font-size: 13px;
    color: rgba(255,255,255,0.5)
  }

  .wechat-pic {
    width: rem(78);
    height: rem(78);
    margin-bottom: rem(7);
  }

  .title {
    font-size: 16px;
    color: #fff;
    margin-bottom: rem(20);
  }

  .copyright {
    width: 100%;
    height: rem(34);
    background: rgb(23,25,26);
    color: rgba(255,255,255,0.3);
    font-size: 13px;
    line-height: rem(32);
    text-align: center;
  }

  .font {
    text-align: center;
  }
</style>
