<template>
  <div>
    Value: {{ count }}
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">Increment if odd</button>
    <button @click="incrementAsync">Increment async</button>
    <div>
      <div>Recent History (last 5 entries): {{ recentHistory }}</div>
    </div>
    <button @click="goBack">go back</button>
    <button @click="replace">replace</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters([
    'count',
    'recentHistory',
  ]),
  methods: {
    ...mapActions([
      'increment',
      'decrement',
      'incrementIfOdd',
      'incrementAsync',
    ]),
    goBack() {
      this.$cRouter().pop()
    },
    replace() {
      this.$cRouter().replace('/basic/temp')
    },
  },
}
</script>
