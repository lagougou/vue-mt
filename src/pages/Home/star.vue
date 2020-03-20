<template>
    <span class="star">
        <img class="star" src="../../assets/image/content/fullstar.png" alt="" v-for="(i,index) in fullStar" :key="index">
        <img class="star" src="../../assets/image/content/halfstar.png" alt="" v-if="halfStar">
        <img class="star" src="../../assets/image/content/gray-star.png" alt="" v-for="(i,index) in blankStar" :key="index">
    </span>

</template>
<script>
export default {
  name: 'star',
  data() {
    return {
      fullStar: 0,
      halfStar: false,
      blankStar: 0,
    };
  },
  props: {
    score: {
      type: Number,
      default: 0,
    },
  },
  created() {
    // console.log(this.score);
  },
  mounted() {
    // eslint-disable-next-line radix
    this.fullStar = parseInt(this.score);
    this.halfStar = (this.score - this.fullStar) > 0;
    // eslint-disable-next-line radix
    this.blankStar = parseInt((5 - this.score));
    console.log(this.score, this.fullStar, this.halfStar, this.blankStar);
  },
};
</script>
<style scoped>
    .star {
        width: 0.32rem;
    }
</style>
