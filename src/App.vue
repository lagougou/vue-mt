<template>
  <div id="app">
    <router-view></router-view>
    <div class="footer-bar"><tabbar></tabbar></div>
  </div>

</template>

<script>

import tabbar from './components/tarbar';

export default {
  name: 'App',
  components: {
    tabbar,
  },
};
</script>

<style>
  .footer-bar{
    position: fixed;
    bottom: 0;
    width: 100%;
  }


</style>

