<template>
  <div class="user">
    <img :src="userInfo.userPic" alt="头像" class="user-pic">
    <span class="name-font">{{userInfo.userName}}</span>
    <span class="font">{{`（${userInfo.userGrade}级 ${userInfo.userClass}班）`}}</span>
  </div>
</template>

<script>
  export default{
    name: 'UserInfo',
    props: {
      userInfo: {
        userName: { type: String },
        userPic: { type: String },
        userClass: { type: String },
        userGrade: { type: String },
      },
    },
  }
</script>

<style lang="scss" scoped>
  @import '../theme';

  .user {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .user-pic {
    width: rem(30);
    height: rem(30);
    border-radius: 50%;
    margin-right: rem(8);
  }

  .name-font {
    color: rgb(102,102,102);
  }

  .font {
    color: rgb(161,170,179);
    font-size: 16px;
  }

</style>