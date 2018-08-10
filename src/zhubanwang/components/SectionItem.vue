<template>
  <div class="list-item">
    <img :src="itemInfo.picUrl" alt="pic" class="pic">
    <div class="font">
      <p class="title">{{itemInfo.title}}</p>
      <p class="subtitle">{{itemInfo.subTitle}}</p>
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
      subTitle: { type: String },
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
    align-items: center;
    justify-content: flex-start;
  }

  .pic {
    width: rem(130);
    height: rem(120);
  }

  .font {
    height: rem(120);
    padding: rem(14);
    width: 100%;
  }

  .title {
    color: rgb(51,51,51);
    font-size: 16px;
    margin-bottom: rem(15);
  }

  .subtitle {
    color: rgb(153,153,153);
    font-size: 14px;
    height: rem(32);
    margin-bottom: rem(10);
  }
</style>

