<template>
  <div class="student-home">
    <yd-layout>
      <Header :userInfo="userInfo" slot="navbar" />
      <div class="banner">
      </div>
      <section class="list-con mb20">
        <section-header title="图文模块一" :icon="sectionHeaderIcon" />
        <vue-seamless-scroll :data="scrollList" :class-option="classOption5" class="seamless-warp">
          <div class="scroll-list clearfix">
            <div class="scroll-list-item" v-for="(item,index) in scrollList" :key="index">
              <SectionItemScroll :itemInfo="item" />
            </div>
          </div>
        </vue-seamless-scroll>
      </section> 

      <section class="list-con mb20">
        <section-header title="图文咨询模块一" :icon="sectionHeaderIcon" />
        <div class="list mt10">
          <div class="list-item-wrapper" v-for="(item,index) in firstList" :key="index">
            <SectionItem :itemInfo="item" />
          </div>
        </div>
      </section>

      <section class="list-con mb30">
        <section-header title="图文咨询模块一" :icon="sectionHeaderIcon" />
        <div class="list mt10">
          <div class="list-item-wrapper" v-for="(item,index) in firstList" :key="index">
            <SectionItem :itemInfo="item" />
          </div>
        </div>
      </section>

      <section class="blank"></section>

      <Footer :index="1" slot="tabbar" />
    </yd-layout>
  </div>
</template>

<script>
  import vueSeamlessScroll from 'vue-seamless-scroll'
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
        userInfo: {
          userName: '杨家路',
          userGrade: '2014',
          userClass: '5',
          userPic: 'https://www.xingshulin.com/img/vip_team.png',
        },
        firstList: [
          {
            dateTime: '2017-05-06',
            readCount: '1189',
            title: '时间的八十多把精神病的萨达1',
            subTitle: '那是你的事建安大叔大叔呢暗示可能打开是你',
            picUrl: 'https://www.xingshulin.com/img/vip_team.png',
          },
          {
            dateTime: '2017-05-06',
            readCount: '1189',
            title: '时间的八十多把精神病的萨达2',
            subTitle: '那是你的事建安大叔大叔呢暗示可能打开是',
            picUrl: 'https://www.xingshulin.com/img/vip_team.png',
          },
          {
            dateTime: '2017-05-06',
            readCount: '1189',
            title: '时间的八十多把精神病的萨达3',
            subTitle: '那是你的事建安大叔大叔呢暗示可能打开是你的',
            picUrl: 'https://www.xingshulin.com/img/vip_team.png',
          },
          {
            dateTime: '2017-05-06',
            readCount: '1189',
            title: '时间的八十多把精神病的萨达4',
            subTitle: '那是你的事建安大叔大叔呢暗示可能打开是你的',
            picUrl: 'https://www.xingshulin.com/img/vip_team.png',
          },
        ],
        scrollList: [
          {
            dateTime: '2017-05-06',
            readCount: '1189',
            title: '时间的八十多把精神病的萨达1',
            picUrl: 'https://www.xingshulin.com/img/vip_team.png',
          },
          {
            dateTime: '2017-05-06',
            readCount: '1189',
            title: '时间的八十多把精神病的萨达2',
            picUrl: 'https://www.xingshulin.com/img/vip_team.png',
          },
          {
            dateTime: '2017-05-06',
            readCount: '1189',
            title: '时间的八十多把精神病的萨达3',
            picUrl: 'https://www.xingshulin.com/img/vip_team.png',
          },
          {
            dateTime: '2017-05-06',
            readCount: '1189',
            title: '时间的八十多把精神病的萨达4',
            picUrl: 'https://www.xingshulin.com/img/vip_team.png',
          },
          {
            dateTime: '2017-05-06',
            readCount: '1189',
            title: '时间的八十多把精神病的萨达5',
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
      vueSeamlessScroll,
    },
    methods: {
    },
    computed: {
      classOption5() {
        return {
          direction: 2,
        }
      },
    },
  }
</script>

<style lang="scss" scoped>
  @import '../theme';

  .mt10 {
    margin-top: rem(10);
  }

  .yd-flexview{
    max-width: 100%;
  }

  #scrollView {
    background: pink;
  }

  .yd-scrollview {
    margin-bottom: rem(40) !important;
    padding-bottom: rem(50) !important;
  }

  .clearfix:after {
    visibility: hidden;
    display: block;
    font-size: 0;
    content: " ";
    clear: both;
    height: 0;
  }

  .scroll-list {
    width: rem(1300);
  }

  .scroll-list-item {
    width: rem(240);
    margin: rem(20) 0 rem(20) rem(20);
    float: left;
    box-shadow: 0px 0px 13px rgba(0, 0, 0, 0.1);
    border-radius: 7px;
  }

  .seamless-warp {
    overflow: hidden;
    width: 100%;
  }

  .mb30 {
    margin-bottom: rem(30);
  }

  .mb20 {
    margin-bottom: rem(10);
  }

  .student-home {
    background-color: rgb(236,242,246);
  }

  .list-con {
    padding: rem(20) rem(25);
    background: #fff;
  }
  
  .list-item-wrapper {
    width: rem(420);
    margin: rem(10) rem(0);
    box-shadow: 0px 0px 13px rgba(0, 0, 0, 0.1);
    border-radius: 7px;
    display: inline-block;
  }

  .list-item-wrapper:nth-of-type(odd) {
    margin-right: rem(20);
  }

  .blank{
    width: 100%;
    height: 1rem;
    background-color: #ecf2f6;
  }

</style>
