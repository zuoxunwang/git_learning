<template>
  <div id="app">
    {{ count }}
    <br>
    {{ doubleCount }}
    <button @click="$store.commit('increament')">count++</button>
    <button @click="$store.dispatch('increament')">count++</button>
  </div>
</template>

<script>

export default {
  name: 'App',
computed:{
  count(){
    return this.$store.state.count
  },
  doubleCount(){
    return this.$store.getters.doubleCount
  }
}
}
</script>

<style>
</style>
