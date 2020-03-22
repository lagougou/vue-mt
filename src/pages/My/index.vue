<template>
    <div class="my-body">
        <div class="my-header">
            <img src="http://i.waimai.meituan.com/static/img/default-avatar.png" class="avatar" alt="">
            <p class="nickname">美团小骑手 ></p>
        </div>
        <div class="my-container">
            <div class="item">
                <p class="address">收货地址管理</p>
                <div class="arrow"></div>
            </div>
            <div class="item">
                <p class="money">商家代金券</p>
                <div class="arrow"></div>
            </div>
        </div>

        <div class="my-container">
            <div class="item">
                <p class="suggestion">意见反馈</p>
                <div class="arrow"></div>
            </div>
            <div class="item">
                <p class="question">常见问题</p>
                <div class="arrow"></div>
            </div>
        </div>
        <p class="telephone text-center">客服电话: 101-097-77</p>
        <p class="time text-center">服务时间: 9:00-23:00</p>
    </div>

</template>
<style scoped>
    .my-body{
        height: 100%;
        background-color: #efefef;
        font-size: 0.34rem;
    }
    .my-header{
        width: 100%;
        height: 4.266667rem;
        background-image: url(../../assets/image/my/header.png);
        background-size: cover;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .avatar {
        display: block;
        height: 2.0rem;
        width: 2.0rem;
        border: 0.08rem solid rgba(255,255,255,0.5);
        border-radius: 50%;
        margin-bottom: 0.426667rem;
    }
    .nickname{
        font-size: 0.4rem;
    }

    .my-container{
        margin-bottom: 0.346667rem;
        background-color: #fff;
    }

    .my-container .item{
        margin-left: 0.533333rem;
        height: 1.066667rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .my-container .item:first-child{
        border-bottom: 0.026667rem solid #eee;
    }
    .my-container .address:before {
        background-image: url(../../assets/image/my/address.png);
    }

    .my-container .money:before {
        background-image: url(../../assets/image/my/money.png);
    }

    .my-container .suggestion:before {
        background-image: url(../../assets/image/my/email.png);
    }

    .my-container .question:before {
        background-image: url(../../assets/image/my/question.png);
    }
    .my-container p {
        margin-left: 0.533333rem;
        position: relative;
    }

    .my-container p:before {
        display: inline-block;
        content: ' ';
        width: 0.426667rem;
        height: 0.426667rem;
 
        position: absolute;
        left: -0.533333rem;
        background-size: cover;
    }

    .item .arrow{
        width: 0.213333rem;
        height: 0.213333rem;
        border: 0.026667rem solid #ccc;
        border-width: 0 0.026667rem 0.026667rem 0;
        transform: rotate(-30deg) skewX(30deg) scaleY(0.866);
        margin-right: 0.426667rem;
    }

    .telephone{
        height: 1.066667rem;
        line-height: 1.066667rem;
        color: #ffb000;
        background-color: #fff;
    }
    .time{
        font-size: 0.373333rem;
        color: #999;
        margin-top: 0.346667rem;
    }
</style>