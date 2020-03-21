<template>
    <div class="order-list">
        <div class="order-item" v-for="(item, index) in list" :key="index">
            <div class="order-item-inner">
                <img class="order-img" :src="item.poi_pic" alt="">
                <div class="item-right">
                    <div class="item-top">
                         <p class="order-name text-ellipse">{{item.poi_name}}</p>
                        <div class="arrow"></div>
                        <div class="order-state">{{ item.status_description }}</div>
                    </div>
                    <div class="item-bottom">
                        <div class="product-item" v-for="(item2, index) in item.product_list" :key="index">
                            {{item2.product_name}}
                            <div class="p-conut">x{{item2.product_count}}</div>
                        </div>
                        <div class="p-price">
                            <span>...</span>
                            <div class="p-total-count">总计{{item.product_count}}个菜, 实付<span class="total-price">￥{{item.total}}</span></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="comment">
                <div class="comment-btn">
                    评价
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getOrderList } from './../../../api/orderlist';

export default {
    name: 'List',
    data() {
        return {
            list: []
        }
    },
    created() {
        getOrderList().then((data) => {
            this.list = data.digestlist;
    });
    },
}
</script>

<style>
    .order-item {
        border-top: 0.346667rem solid #efefef;
    }

    .order-item-inner{
        display: flex;
        border-bottom: 1px solid #e0e0e0;
        margin-top: 0.213333rem;
        padding-bottom: 0.48rem;
    }

    .order-item-inner .order-img{
        display: block;
        width: 1.066667rem;
        height: 1.066667rem;
        border-radius: 50%;
        margin-left: 0.426667rem;
    }

    .order-item-inner .item-right{
        flex-grow: 1;
        font-size: 0.373333rem;
        margin-left: 0.4rem;
    }

    .item-top {
        height: 1.2rem;
        border-bottom: 0.026667rem solid #e0e0e0;
        display: flex;
        align-items: center;
    }

    .item-top .order-name{
        font-size: 0.426667rem;
        width: 4.8rem;
    }

    .item-top .arrow{
        height: 0.266667rem;
        width: 0.266667rem;
        border: 0.026667rem solid #666;
        border-width: 0.026667rem 0.026667rem 0 0;
        transform: rotate(45deg);
    }

    .item-top .order-state {
        margin-left: 1.2rem;
    }

    .product-item, .p-price {
        display: flex;
        justify-content: space-between;
        margin-top: 0.32rem;
        margin-right: 0.4rem;
        color: #666;
    }

    .p-price .p-total-count{
        font-size: 0.32rem;
    }

    .p-price .total-price {
        font-weight: 600;
        margin-left: 0.106667rem;
        color: #222;
    }

    .order-item .comment {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        height: 1.333333rem;
       
    }

    .comment .comment-btn{
        width: 2.56rem;
        height: 0.8rem;
        color: #6b450a;
        background-color: #ffd161;
        font-size: 0.373333rem;
        border: none;
        outline: none;
        margin-right: 0.64rem;
        text-align: center;
        line-height: 0.8rem;
    }
</style>