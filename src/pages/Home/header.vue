<template>
    <div class="page-header">
        <div class="search-bar">
            <div class="bar-location">
                <div class="location-icon"></div>
                <div class="location-text">郑州市</div>
            </div>
            <div class="search-button">
                <p class="place-holder">鸡翅</p>
            </div>
        </div>
        <img class="header-img" :src="img_url" alt="header image" >
    </div>
</template>
<script>
import imgPath from '@/assets/image/header/header.jpg';

export default {
  name: 'home-header',
  data() {
    return {
      img_url: imgPath,
    };
  },

  mounted() {
    // eslint-disable-next-line no-console
    console.log(this.$http);
  },
};
</script>


<style>
    .page-header{
        height: 4.746667rem;
        overflow: hidden;
        position: relative;
    }
    .header-img {
        width: 100%;
    }

    .search-bar{
        width: 100%;
        height: 1.066667rem;
        position: absolute;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-top: 0.213333rem;
    }

    .bar-location{
        margin-right: 0.533333rem;
        border-radius: 0.346667rem;
        background-color: rgba(0, 0, 0, 0.33);
        width: 2.453333rem;
        height: 0.746667rem;

    }

    .location-icon {
    display: inline-block;
    height: 0.533333rem;
    width: 0.4rem;
    vertical-align: 0.213333rem;
    margin-left: 0.133333rem;
    background-image: url(../../assets/image/header/locationIcon.png);
    background-size: cover;
}

.location-text {
    display: inline-block;
    vertical-align: 0.35rem;
    color: #fff;
    font-size: 0.373333rem;
    margin-left: -0.2rem;
    position: relative;
}

.location-text::after {
    content: ' ';
    display: inline-block;
    width: 0.373333rem;
    height: 0.373333rem;
    background-image: url(../../assets/image/header/arrowIcon.png);
    background-size: cover;
    position: absolute;
    right: -0.48rem;
}

.search-button {
    position: relative;
    width: 4.533333rem;
    height: 0.8rem;
    background-color: #fff;
    border-radius: 0.533333rem;
    font-size: 0.373333rem;
}

.place-holder {
    line-height: 0.8rem;
    margin-left: 0.64rem;
    position: relative;
}

 .place-holder:before {
    content: ' ';
    display: block;
    width: 0.48rem;
    height: 0.48rem;
    position: absolute;
    background-image: url(../../assets/image/header/searchIcon.png);
    background-size: cover;
    left: -0.533333rem;
    top: 0.133333rem;
}
</style>
