<template>
    <div>
      <Header />
      <Category />
      <ShopList />
    </div>
</template>

<script>
import Header from './header';
import Category from './category';
import ShopList from './shoplist';

export default {
  name: 'Home',
  data() {
    return {
    };
  },
  components: {
    Header,
    Category,
    ShopList,
  },
};
</script>
<style>

</style>
