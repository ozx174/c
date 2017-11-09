<template>
  <div class="content-wapper">
    <router-view :effect="effect" :showTabs="showTabs"></router-view>
  </div>
</template>

<script>
  export default{
    computed: {
      effect() {
        return this.$store.state.effect;
      },
      showTabs() {
        return this.$store.state.nav;
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .content-wapper {
    width: 100%;
    height: 100%;
  }
</style>
