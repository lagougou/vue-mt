<template>
    <div class="content-list">
        <h4 class="list-title  text-center">
            <span class="title-line"></span>
            <span class="title-text">附近商家</span>
            <span class="title-line"></span>
        </h4>
        <div class="list-wrap">
            <div class="store-item" v-for="(item,index) in content" :key="index">
                <img class="item-pic" :src="item.pic_url" alt="">
                <div class="store-content">
                    <p class="store-name">{{item.name}}</p>
                    <div class="store-info">
                        <p class="store-rating">
                            <!-- <img src="../../assets/image/content/fullstar.png" alt="" v-for="i in rating" :key="i">
                             -->
                            <Star :score="item.wm_poi_score"></Star>
                            <span>&nbsp;月售{{item.month_sale_num}}</span>
                        </p>
                        <p class="delivery-info">
                            <span>{{item.mt_delivery_time}}</span>
                            &nbsp;|&nbsp;{{item.distance}}
                        </p>
                    </div>
                    <p class="delivery-price">
                        {{item.min_price_tip}}
                    </p>
                    <div class="store-discount" v-if="item.discounts2">
                        <p class="discount-info" v-for="(item_discount,index) in item.discounts2" :key="index">
                            <img class="discount-icon" :src="item_discount.icon_url" alt="">
                            {{item_discount.info}}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { getContentList } from './../../../api/shoplist';
import Star from './star';

export default {
  name: 'shoplist',
  data() {
    return {
      content: [],
      rating: 4,
      is_half: false,
      blankRating: 0,
    };
  },
  components: {
    Star,
  },
  created() {
    getContentList().then((data) => {
      this.content = data.data.poilist;
    //   console.log(this.content);
    });
  },
  methods: {
    getRating(item) {
      const score = item.wm_poi_score;
      // eslint-disable-next-line radix
      this.rating = parseInt(score);
      const decimal = score.split('.')[1];
      if (decimal > 0) {
        this.is_half = true;
      }
      this.blankRating = 5 - score >= 1 ? 1 : 0;
    },
  },
};
</script>
<style scoped>
    .content-list {
        padding-bottom: 1.44rem;
    }
    .content-list .list-title{
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 0.533333rem;
        padding-bottom: 0.266667rem;
    }

    .content-list .list-title .title-line{
        display: inline-block;
        width: 0.8rem;
        height: 0.026667rem;
        background-color: #949494;
    }

    .content-list .list-title .title-text{
        font-size: 0.48rem;
        margin: 0 0.16rem;
    }

    .list-wrap .store-item {
        padding: 0.32rem 0;
        margin: 0 0.266667rem;
        color: #656565;
        display: flex;
        flex-wrap: nowrap;
        font-size: 0.32rem;
        border-bottom: 1px solid #949494;
    }

    .list-wrap .item-pic{
        display: block;
        width: 2.5rem;
        height: 1.875rem;
        border: 0.026667rem solid #e4e4e4;
    }

    .list-wrap .store-content{
        flex-grow: 1;
        margin-left: 0.266667rem;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        margin-top: 0.053333rem;
    }

    .store-content .store-name{
        font-size: 0.426667rem;
        font-weight: bold;
        color: #131313;
    }
    .store-content .store-info{
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
    }

    .store-content .store-rating{
        margin: 0.4rem 0;
    }

    .store-content .store-discount{
        width: 6.666667rem;
    }
    .store-content .store-discount .discount-info{
        margin-top: 0.213333rem;
    }

    .store-content .store-discount .discount-icon {
    display: inline-block;
    width: 0.32rem;
    height: 0.32rem;
    vertical-align: top;
    /* margin-top: 0.053333rem; */
    margin-right: 0.08rem;
}
</style>
