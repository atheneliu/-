<template>
  <div class="student-home">
    <Header userName="杨家路" userGrade="2014" userClass="5" userPic="https://www.xingshulin.com/images/expert/zq.png"/>
    <div class="banner"></div>
    <section class="list">
      <section-header title="图文模块一" :icon="sectionHeaderIcon" />
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
    <section class="list-con">
      <section-header title="图文咨询模块一" :icon="sectionHeaderIcon" />
      <div class="list">
        <div class="list-item">
          <SectionItem v-for="(item,index) in firstList" :key="index" :itemInfo="item" />
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
            subTitle: '那是你的事建安大叔大叔呢暗示可能打开是你的蓝色阿森纳迪士尼打算考到哪蓝色的三大神三大开始打',
            picUrl: 'https://www.xingshulin.com/images/expert/lxg.png',
          },
          {
            dateTime: '2017-05-06',
            readCount: '1189',
            title: '时间的八十多把精神病的萨达',
            subTitle: '那是你的事建安大叔大叔呢暗示可能打开是你的蓝色阿森纳迪士尼打算考到哪蓝色的三大神三大开始打',
            picUrl: 'https://www.xingshulin.com/images/expert/lxg.png',
          },
          {
            dateTime: '2017-05-06',
            readCount: '1189',
            title: '时间的八十多把精神病的萨达',
            subTitle: '那是你的事建安大叔大叔呢暗示可能打开是你的蓝色阿森纳迪士尼打算考到哪蓝色的三大神三大开始打',
            picUrl: 'https://www.xingshulin.com/images/expert/lxg.png',
          },
          {
            dateTime: '2017-05-06',
            readCount: '1189',
            title: '时间的八十多把精神病的萨达',
            subTitle: '那是你的事建安大叔大叔呢暗示可能打开是你的蓝色阿森纳迪士尼打算考到哪蓝色的三大神三大开始打',
            picUrl: 'https://www.xingshulin.com/images/expert/lxg.png',
          },
        ],
      }
    },
    components: {
      Footer,
      Header,
      SectionHeader,
      SectionItem,
    },
    methods: {
    },
  }
</script>

<style lang="scss" scoped>
  @import '../theme';

  .list {
    display: flex;
  }
  
  .list-item {
    width: 50%;
  }

</style>
