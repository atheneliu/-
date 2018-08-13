<template>
  <div class="pc-header">
    <img src="http://www.zhubanwang.com/Images/logo.png" alt="驻班网" class="icon">
    <div class="left">
      <div class="nav">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1">首页</el-menu-item>
          <el-submenu index="2">
            <template slot="title">组卷</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-submenu>
          <el-menu-item index="3">阅卷</el-menu-item>
          <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">班级学情</a></el-menu-item>
          <el-menu-item index="5">咨询管理</el-menu-item>
          <el-menu-item index="6">个人信息</el-menu-item>
        </el-menu>
        <!-- <div class="line"></div> -->
      </div>
      <user-info :userInfo="userInfo"/>
      <img src="./img/close.png" alt="退出登录" class="exit" @click="exit">
    </div>
  </div>
</template>

<script>
  import UserInfo from '@/zhubanwang/components/UserInfo'

  export default {
    name: 'PCHeader',
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
      }
    },
    props: {
      userInfo: {
        userName: { type: String },
        userPic: { type: String },
        userClass: { type: String },
        userGrade: { type: String },
      },
    },
    components: {
      UserInfo,
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath)
      },
      exit() {
        console.log('exit')
      },
    },
  }
</script>

<style lang="scss" scoped>
  @import '../theme';
  
  .pc-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 rem(53);
    background: #fff;
    font-size: 14px;
    min-width: 1024px;

    .icon {
      width: rem(98);
      height: rem(32);
    }

    .left {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .nav {
      margin-right: rem(38);
    }

    .exit {
      display: inline-block;
      width: rem(18);
      height: rem(18);
      margin-left: rem(10);
    }
  }
</style>

