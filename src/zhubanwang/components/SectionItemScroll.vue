<template>
  <div class="list-item">
    <img :src="itemInfo.picUrl" alt="pic" class="pic">
    <div class="font">
      <p class="title">{{itemInfo.title}}</p>
      <Eye :dateTime="itemInfo.dateTime" :readCount="itemInfo.readCount"/>
    </div>
  </div>
</template>

<script>
import Eye from '@/zhubanwang/components/Eye'

export default {
  name: 'SectionItem',
  props: {
    itemInfo: {
      dateTime: { type: String },
      readCount: { type: Number },
      title: { type: String },
      picUrl: { type: String },
    },
  },
  components: {
    Eye,
  },
}
</script>

<style lang="scss" scoped>
  @import '../theme';
  // 是否添加阴影
  .list-item {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .pic {
    width: rem(240);
    height: rem(150);
    margin-bottom: rem(10);
  }

  .title {
    color: rgb(51,51,51);
    font-size: 16px;
    height: rem(36);
    margin-bottom: rem(15);
  }
</style>

