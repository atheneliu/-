<template>
  <footer>
    <div class="foot_icon" v-for="(item,itemIndex) in footList" :key="itemIndex">
      <span>{{item.i,index,item.i+1 === index}}</span>
      <img class="icon" v-if="itemIndex+1 === index" :src="item.checkedImageUrl"/>
      <img class="icon" v-else :src="item.imgUrl"/>
      <span class="font blue" v-if="itemIndex+1 === index">{{item.font}}</span>
      <span class="font" v-else>{{item.font}}</span>
    </div>
  </footer>
</template>

<script>
  import home from '../images/home.png'
  import homeChecked from '../images/home2.png'
  import zxdt from '../images/zxdt.png'
  import zxdtChecked from '../images/zxdt2.png'
  import ckjg from '../images/ckjg.png'
  import ckjgChecked from '../images/ckjg2.png'
  import ctb from '../images/ctb.png'
  import ctbChecked from '../images/ctb2.png'
  import jtb from '../images/jtb.png'
  import jtbChecked from '../images/jtb2.png'
  import grxx from '../images/grxx.png'
  import grxxChecked from '../images/grxx2.png'

  export default {
    name: 'Footer',
    props: {
      index: { type: Number },
    },
    data() {
      return {
        footList: [
          {
            imgUrl: home,
            font: '首页',
            checkedImageUrl: homeChecked,
          },
          {
            imgUrl: zxdt,
            font: '在线答题',
            checkedImageUrl: zxdtChecked,
          },
          {
            imgUrl: ckjg,
            font: '查看结果',
            checkedImageUrl: ckjgChecked,
          },
          {
            imgUrl: ctb,
            font: '错题本',
            checkedImageUrl: ctbChecked,
          },
          {
            imgUrl: jtb,
            font: '精题本',
            checkedImageUrl: jtbChecked,
          },
          {
            imgUrl: grxx,
            font: '个人信息',
            checkedImageUrl: grxxChecked,
          },
        ],
      }
    },
    methods: {
    },
    mounted() {
      console.log('footer-->', this.props)
    },
  }
</script>

<style lang="scss" scoped>
  @import '../theme';

 footer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: #fff;
    padding: rem(8) 0;
    position: fixed;
    left: 0;
    bottom: 0;
    border-top: 0.5px solid rgba(0,0,0,0.2);

    .foot_icon {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }

    .blue {
      color: rgb(51,170,255) !important;
    }

    .icon {
      display: inline-block;
      width: rem(30);
      height: rem(30);
      margin-bottom: rem(7);
    }

    .font {
      color: rgb(161,170,178);
      font-size: 16px;
      letter-spacing: 1px;
    }
  }
</style>

