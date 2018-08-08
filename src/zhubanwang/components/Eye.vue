<template>
  <div class="eye-con">
    <span class="date">2017-01-01</span>
    <div class="eye">
      <img src="../images/read.png" alt="阅读量" class="eye-icon">
      <span class="num">1136</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Eye',
  }
</script>

<style lang="scss" scoped>
  @import '../theme';

  .eye-con {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 12px;
    color: rgb(153,153,153);
  }

  .eye {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .eye-icon {
    width: rem(15);
    height: rem(10);
    margin-right: rem(3);
  }
</style>
