<template>
  <div class="student-home">
    <header></header>
    <div class="banner"></div>
    <section class="list">
      <header>
        <div class="right">
          <img src="" alt="icon">
          <span class="font">图文咨询模块一</span>
        </div>
        <div class="left">
          <span class="font">更多</span>
          <img src="" alt="更多">
        </div>
      </header>
      <div class="con">
        <div class="list-item">
          <img src="" alt="" class="pic">
          <div class="font">
            <p class="title">当我还纳闷的时候，冥王星里打了</p>
            <div class="foot">
              <span class="date">2017-01-01</span>
              <div class="eye">
                <img src="" alt="" class="eye">
                <span class="num">1136</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="list">
      <header>
        <div class="right">
          <img src="" alt="icon">
          <span class="font">图文咨询模块一</span>
        </div>
        <div class="left">
          <span class="font">更多</span>
          <img src="" alt="更多">
        </div>
      </header>
      <div class="con">
        <div class="list-item">
          <img src="" alt="" class="pic">
          <div class="font">
            <p class="title">当我还纳闷的时候，冥王星里打了</p>
            <p class="subtitle">时候，冥王星里打了很多的防空炮打了我一个措手不及</p>
            <div class="foot">
              <span class="date">2017-01-01</span>
              <div class="eye">
                <img src="" alt="" class="eye">
                <span class="num">1136</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer :index="1"/>
  </div>
</template>

<script>
  import Footer from '@/zhubanwang/components/Footer'

  export default {
    name: 'StudentHome',
    data() {
      return {}
    },
    components: {
      Footer,
    },
    methods: {
    },
  }
</script>

<style lang="scss" scoped>
  @import '../theme';

</style>
