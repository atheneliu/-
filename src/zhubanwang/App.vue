<template>
  <div id="app">
    <transition
      :enter-active-class="enterClass"
      :leave-active-class="leaveClass"
    >
      <router-view class="router-view"></router-view>
    </transition>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'app',
    computed: {
      ...mapGetters([
        'enterClass',
        'leaveClass',
      ]),
    },
    methods: {
      ...mapActions([
        'updateEnterType',
      ]),
    },
    watch: {
      $route() {
        this.updateEnterType({ enterType: this.$cRouter().getActionType() })
      },
    },
  }
</script>

<style lang="scss">
  @import './theme';

  html {
    height: 100%;
    margin: 0;
    padding: 0;
    width: 100%;
  }

  #app {
    color: #2c3e50;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-size: rem(16);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-overflow-scrolling: touch;
  }
</style>

<style lang="scss" scoped>
  .router-view {
    animation-duration: 0.5s;
    height: 100%;
    overflow: auto;
    overflow-x: hidden;
    position: fixed;
    top: 0;
    width: 100%;
  }
</style>
