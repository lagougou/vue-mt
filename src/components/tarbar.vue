<template>
    <div>
        <mt-tabbar v-model="selected" class="bottom-bar">
            <mt-tab-item id="外卖" class="tab-item" @click.native="gotoHome">
                <img class="item-icon" slot="icon" src="../assets/image/bottom/homeIconActive.png" v-if="this.name==='Home'">
                 <img class="item-icon" slot="icon" src="../assets/image/bottom/homeIcon.png" v-else>
                首页
            </mt-tab-item>
            <mt-tab-item id="订单" class="tab-item" @click.native="gotoOrder">
                <img slot="icon" class="item-icon" src="../assets/image/bottom/OrderIconActive.png" v-if="this.name==='Order'">
                <img slot="icon" class="item-icon" src="../assets/image/bottom/orderIcon.png" v-else>
                订单
            </mt-tab-item>
            <mt-tab-item id="我的" class="tab-item" @click.native='gotoMy'>
                <img slot="icon" class="item-icon" src="../assets/image/bottom/MyIconActive.png" v-if="this.name==='My'">
                <img slot="icon" class="item-icon" src="../assets/image/bottom/myIcon.png" v-else>
                我的
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>
<script>
// import func from '../../vue-temp/vue-editor-bridge';
// import { Tabbar, TabItem } from 'mint-ui';

export default {
  name: 'tarbar',

  data() {
    return {
      selected: true,
      name: '',
    };
  },
  mounted() {
    this.name = this.$route.name;
    // console.log(this.name);
    // console.log(this.$router);
  },
  methods: {
    gotoHome() {
      if (this.name === 'Home') {
        return;
      }
      this.$router.push({ path: '/home' });
      this.name = 'Home';
    },
    gotoOrder() {
      if (this.name === 'Order') {
        return;
      }
      this.$router.push({ path: '/order' });
      this.name = 'Order';
    },

    gotoMy() {
      if (this.name === 'My') {
        return;
      }
      this.$router.push({ path: '/my' });
      this.name = 'My';
    },
  },
};
</script>
<style >
    .bottom-bar{
        height: 1.44rem;
        position: static;
    }

    .bottom-bar .tab-item{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .bottom-bar .mint-tab-item-icon {
        width: 0.64rem;
        height: 0.64rem;
    }

    .bottom-bar .mint-tab-item-label{
        margin-top: 0.1066667rem;
        font-size: 0.346666rem;
        color: #747474;
    }
    .bottom-bar .tab-item.is-selected .mint-tab-item-label{
        color: #434343;
    }
</style>
