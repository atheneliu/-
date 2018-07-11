<template>
  <div>
    <button type="button" v-on:click="show = !show">
      Toggle
    </button>
    <transition name="fade">
      <p v-if="show">hello</p>
    </transition>
    <transition
      appear
      appear-active-class="animated tada"
      enter-active-class="animated tada"
      leave-active-class="animated bounceOutRight"
    >
      <p v-if="show">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis enim libero, at lacinia diam fermentum id. Pellentesque habitant morbi tristique senectus et netus.</p>
    </transition>
    <div id="list-demo" class="demo">
      <button v-on:click="add">Add</button>
      <button v-on:click="remove">Remove</button>
      <transition-group
        name="custom-classes-transition"
        tag="p"
        enter-active-class="animated tada"
        leave-active-class="animated tada"
        leave-to-class="test"
      >
        <span v-for="item in items" v-bind:key="item" class="list-item">
          {{ item }}
        </span>
      </transition-group>
    </div>
    <yd-button
      size="large"
      @click.native="goCounter"
    >go counter</yd-button>
    <yd-cell-group>
      <yd-cell-item arrow type="a" @click.native="goCounter">
        <span slot="left">这里是一个A链接</span>
        <span slot="right">href不会解析</span>
      </yd-cell-item>
      <yd-cell-item arrow type="link" href="/basic/counter">
        <span slot="left">这里是一个Router-Link链接</span>
        <span slot="right">href会解析为路由</span>
      </yd-cell-item>
      <yd-cell-item arrow type="label" @click.native="goCounter">
        <span slot="left">这里是一个Label</span>
      </yd-cell-item>
      <yd-cell-item arrow>
        <span slot="left">这里是一个普通DIV</span>
      </yd-cell-item>
    </yd-cell-group>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        show: true,
        items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        nextNum: 10,
      }
    },
    methods: {
      randomIndex() {
        return Math.floor(Math.random() * this.items.length)
      },
      add() {
        this.items.splice(this.randomIndex(), 0, this.nextNum)
        this.nextNum += 1
      },
      remove() {
        this.items.splice(this.randomIndex(), 1)
      },
      goCounter() {
        this.$cRouter().push('/basic/counter')
      },
    },
  }
</script>

<style lang="scss" scoped>
  @import '../theme';

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 10s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  .list-item {
    color: $baseColor;
    display: inline-block;
    margin-right: 10px;
    transition: all 1s;
  }

  .test {
    opacity: 0;
  }
</style>
