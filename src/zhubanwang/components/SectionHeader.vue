<template>
  <header>
    <div class="right">
      <img :src="icon" alt="icon" class="news" :style="{ height: iconHeight, width: iconWidth }">
      <span class="title">{{title}}</span>
    </div>
    <div class="left">
      <span class="font">更多</span>
      <img src="../images/more.png" alt="更多" class="more">
    </div>
  </header>
</template>

<script>
  export default{
    name: 'SectionHeader',
    props: {
      title: { type: String },
      icon: { type: Object },
    },
  }
</script>

<style lang="scss" scoped>
  @import '../theme';

  header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .right {
    display: flex;
    align-items: center;
    justify-content: center;

    .news {
      width: rem(30);
      height: rem(30);
      margin-right: rem(8);
    }

    .title {
      color: rgb(51,51,51);
      font-size: 18px;
    }
  }

  .left {
    display: flex;
    align-items: center;
    justify-content: center;

    .font {
      color: rgb(153,153,153);
      font-size: 16px;
    }

    .more {
      margin-left: rem(8);
      width: 16px;
      height: 16px;
    }
  }
</style>

