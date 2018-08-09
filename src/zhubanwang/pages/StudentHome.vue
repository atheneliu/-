<template>
  <div class="student-home">
    <Header userName="杨家路" userGrade="2014" userClass="5" userPic="https://www.xingshulin.com/img/vip_team.png"/>
    <div class="banner">
    </div>
    <!-- <section class="list">
      <section-header title="图文模块一" :icon="sectionHeaderIcon" />
      <div class="scroll-list">
        <div class="scroll-list-item">
          <SectionItemScroll v-for="(item,index) in firstList" :key="index" :itemInfo="item" />
        </div>
      </div>
    </section>  -->
    <section class="list-con mb20">
      <section-header title="图文咨询模块一" :icon="sectionHeaderIcon" />
      <div class="list">
        <div class="list-item" v-for="(item,index) in firstList" :key="index">
          <SectionItem :itemInfo="item" />
        </div>
      </div>
    </section>

    <section class="list-con mb180">
      <section-header title="图文咨询模块一" :icon="sectionHeaderIcon" />
      <div class="list">
        <div class="list-item" v-for="(item,index) in firstList" :key="index">
          <SectionItem :itemInfo="item" />
        </div>
      </div>
    </section>

    <Footer :index="1"/>
  </div>
</template>

<script>
  import Footer from '@/zhubanwang/components/Footer'
  import Header from '@/zhubanwang/components/Header'
  import SectionHeader from '@/zhubanwang/components/SectionHeader'
  import SectionItem from '@/zhubanwang/components/SectionItem'
  import SectionItemScroll from '@/zhubanwang/components/SectionItemScroll'
  import sectionHeaderIcon from '../images/news.png'

  export default {
    name: 'StudentHome',
    data() {
      return {
        sectionHeaderIcon,
        firstList: [
          {
            dateTime: '2017-05-06',
            readCount: '1189',
            title: '时间的八十多把精神病的萨达',
            subTitle: '那是你的事建安大叔大叔呢暗示可能打开是你',
            picUrl: 'https://www.xingshulin.com/img/vip_team.png',
          },
          {
            dateTime: '2017-05-06',
            readCount: '1189',
            title: '时间的八十多把精神病的萨达',
            subTitle: '那是你的事建安大叔大叔呢暗示可能打开是',
            picUrl: 'https://www.xingshulin.com/img/vip_team.png',
          },
          {
            dateTime: '2017-05-06',
            readCount: '1189',
            title: '时间的八十多把精神病的萨达',
            subTitle: '那是你的事建安大叔大叔呢暗示可能打开是你的',
            picUrl: 'https://www.xingshulin.com/img/vip_team.png',
          },
          {
            dateTime: '2017-05-06',
            readCount: '1189',
            title: '时间的八十多把精神病的萨达',
            subTitle: '那是你的事建安大叔大叔呢暗示可能打开是你的',
            picUrl: 'https://www.xingshulin.com/img/vip_team.png',
          },
        ],
      }
    },
    components: {
      Footer,
      Header,
      SectionHeader,
      SectionItem,
      SectionItemScroll,
    },
    methods: {
    },
  }
</script>

<style lang="scss" scoped>
  @import '../theme';

  .mb180 {
    margin-bottom: rem(180);
  }

  .mb20 {
    margin-bottom: rem(20);
  }

  .student-home {
    background-color: rgb(236,242,246);
  }

  .list-con {
    // display: flex;
    padding: rem(20) rem(25);
    background: #fff;
  }
  
  .list-item {
    width: 47.5%;
    margin-bottom: rem(20);
    margin-right: rem(20);
    box-shadow: 0px 0px 13px rgba(0, 0, 0, 0.1);
    border-radius: 7px;
    display: inline-block;
  }

</style>
