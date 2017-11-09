<template>
  <div>
    <scroll style="bottom: 49px;position: absolute;width: 100%;top:0;">
        <div>
          <swiper :options="swiperOption" class="swiper-box">
            <swiper-slide class="swiper-item" v-for="banner in banners" :key="banner">
              <img :src="banner" alt="" class="banner">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
          <div class="nav-wrapper">
            <div class="nav-content">
              <div class="nav-scan">
                <i class="icon"></i>
                扫一扫
              </div>
              <div class="nav-balance">
                <div class="balance-wrapper">
                  <div class="balance-num">*****</div>
                  <div class="balance-text">查看乐豆</div>
                </div>
              </div>
              <div class="nav-code">
                <i class="icon"></i>
                付款码
              </div>
            </div>
            <div class="nav-bg"></div>
            <div class="nav-btn">
              <div class="nav-scan"></div>
              <div class="nav-balance"></div>
              <div class="nav-code"></div>
            </div>
          </div>
          <div class="bor-bot cjc_padding"></div>
          <swiper :options="swiperOption1" class="swiper-box">
            <swiper-slide class="swiper-nav">
              <div class="industry-wrapper">
                <ul class="industry-box">
                  <li><i class="x_icon icon0">
                    <div class="f24">美食</div>
                  </i></li>
                  <li><i class="x_icon icon1">
                    <div class="f24">购物中心</div>
                  </i></li>
                  <li><i class="x_icon icon2">
                    <div class="f24">休闲娱乐</div>
                  </i></li>
                  <li><i class="x_icon icon3">
                    <div class="f24">生活服务</div>
                  </i></li>
                  <li><i class="x_icon icon4">
                    <div class="f24">酒店住宿</div>
                  </i></li>
                  <li><i class="x_icon icon5">
                    <div class="f24">电影</div>
                  </i></li>
                  <li><i class="x_icon icon6">
                    <div class="f24">KTV</div>
                  </i></li>
                  <li><i class="x_icon icon7">
                    <div class="f24">旅游</div>
                  </i></li>
                </ul>
              </div>
            </swiper-slide>
            <swiper-slide class="swiper-nav">
              <div class="industry-wrapper">
                <ul class="industry-box">
                  <li><i class="x_icon icon8">
                    <div class="f24">结婚</div>
                  </i></li>
                  <li><i class="x_icon icon9">
                    <div class="f24">教育培训</div>
                  </i></li>
                  <li><i class="x_icon icon10">
                    <div class="f24">运动健身</div>
                  </i></li>
                  <li><i class="x_icon icon11">
                    <div class="f24">丽人</div>
                  </i></li>
                  <li><i class="x_icon icon12">
                    <div class="f24">宠物</div>
                  </i></li>
                  <li><i class="x_icon icon13">
                    <div class="f24">自助餐</div>
                  </i></li>
                  <li><i class="x_icon icon14">
                    <div class="f24">亲子/母婴</div>
                  </i></li>
                  <li><i class="x_icon icon15">
                    <div class="f24">更多</div>
                  </i></li>
                </ul>
              </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination" style="bottom:5px;"></div>
          </swiper>
          <div style="height:0.2rem;background:#f2f2f2"></div>
          <div class="imgWrapper bgff">
            <img class="mb15" width="100%" alt="" src="../../assets/img/index/test6.png">
            <img class="mb15" width="100%" alt="" src="../../assets/img/index/test5.png">
          </div>
        </div>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
  import {swiper, swiperSlide} from 'vue-awesome-swiper';
  import scroll from '../../common/scroll/scroll.vue';
  const ERR_OK = 0;

  export default{
    components: {
      swiper,
      swiperSlide,
      scroll
    },
    data() {
      return {
        notNextTick: true,
        swiperOption: {
          autoplay: 2000,
          loop: true,
          pagination: '.swiper-pagination',
          autoplayDisableOnInteraction: false
        },
        swiperOption1: {
          pagination: '.swiper-pagination'
        },
        banners: []
      };
    },
    created() {
      this.$http.get('./api/banner').then((res) => {
        res = res.body;
        if (res.errno === ERR_OK) {
          this.banners = res.data;
        }
      });
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .swiper-box
    width: 100%
    .banner
      width: 100%
      height: 3.75rem;

  .nav-wrapper
    width: 100%;
    height: 1.64rem;
    position: absolute;
    top: 3.14rem;
    left: 0;
    z-index: 999;
    .nav-content
      width: 93.3333%
      height: 1.6rem
      margin: 0 auto
      background-color: #29adfd
      border-radius: 0.2rem
      display: flex
      text-align: center
      .nav-scan
        flex: 1
        position: relative
        font-weight: bold
        font-size: 0.24rem
        color: #fff
        .icon
          width: 0.54rem
          height: 0.54rem
          background-position: -2rem 0
          margin: 0.24rem auto 0.14rem
          content: ""
          bg-image('../../assets/img/index/icon')
          background-size: 5rem
          display: block
      .nav-balance
        flex: 1
        position: relative
        .balance-wrapper
          width: 1.54rem;
          height: 1.22rem;
          background-position: -2rem -1rem;
          margin: 0.1rem auto;
          text-align: center;
          padding-top: 0.4rem;
          bg-image('../../assets/img/index/icon')
          background-size: 5rem
          display: block
          .balance-num
            color: #29adfd
            line-height: 0.3rem
            font-size: 0.24rem
          .balance-text
            color: #29adfd
            line-height: 0.3rem
            font-size: 0.24rem
      .nav-code
        flex: 1
        position: relative
        color: #ffffff
        font-weight: bold
        font-size: 0.24rem
        .icon
          width: 0.54rem;
          height: 0.54rem;
          background-position: -4rem 0;
          margin: 0.24rem auto 0.14rem;
          bg-image('../../assets/img/index/icon')
          background-size: 5rem;
          display: block;
    .nav-bg
      width: 100%
      height: 0.74rem
      background-size: 7.5rem
      bg-image('../../assets/img/index/blue_bottom')
      z-index: 999
      position: absolute
      bottom: 0
      left: 0
    .nav-btn
      width: 100%
      height: 1.674rem
      position: absolute
      left: 0
      top: 0
      z-index: 9999
      display: flex
      div
        flex: 1
        position: 1

  .cjc_padding
    padding-top: 0.95rem
    width: 7.02rem
    margin: 0 auto

  .industry-wrapper
    overflow: auto
    padding: 0.24rem
    background: #fff
    li
      padding-bottom: 0.2rem
      display: block
      float: left
      width: 25%
      text-align: center
      .x_icon
        content: ""
        bg-image('../../assets/img/index/sprite')
        background-size: 8.1rem
        display: block
        width: 1.63rem
        height: 1.63rem
        margin: 0 auto
        div
          padding-top: 1.26rem
          font-size: 0.24rem
      .icon0
        background-position: -4.89rem -3.24rem
      .icon1
        background-position: -6.53rem -1.63rem
      .icon2
        background-position: -1.63rem -3.24rem
      .icon3
        background-position: -6.53rem 0rem
      .icon4
        background-position: -6.53rem -3.24rem
      .icon5
        background-position: 0 0
      .icon6
        background-position: -1.63rem 0
      .icon7
        background-position: -3.24rem -1.63rem
      .icon8
        background-position: -4.89rem 0
      .icon9
        background-position: -4.89rem -1.63rem
      .icon10
        background-position: -3.24rem 0
      .icon11
        background-position: 0 -1.63rem
      .icon12
        background-position: 0 -4.89rem
      .icon13
        background-position: -1.63rem -1.63rem
      .icon14
        background-position: 0 -3.3rem
      .icon15
        background-position: -3.24rem -3.24rem

  .imgWrapper
    padding: 0.2rem
    background-color: #fff
</style>
