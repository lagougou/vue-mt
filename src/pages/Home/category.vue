<template>
    <div class="category-content">
      <div class="category-item" v-for="(item, index) in content" :key="index">
        <img class="item-icon" :src="item.url" alt="">
        <p class="item-name">{{ item.name }}</p>
      </div>
  </div>

</template>
<script>
import { getCategory } from './../../../api/category';

export default {
  name: 'category',
  data() {
    return {
      content: [],
    };
  },
  created() {
    getCategory().then((data) => {
      // console.log(data);
      this.content = data.primary_filter.slice(0, 8);
    });
    // .then((res) => {
    //   console.log(res);
    // });
  },

};
</script>

<style>

  .category-content{
    display: flex;
    flex-wrap: wrap;
  }

  .category-item {
    flex-basis: 25%;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
    margin-top: 0.32rem;

  }

  .category-content .item-icon{
    width: 1.653333rem;
    height: 1.653333rem;
  }

  .category-content .item-name{
    flex-basis: 100%;
    font-size: 0.346667rem;
    text-align: center;
    margin-top: 0.32rem;
  }

</style>
