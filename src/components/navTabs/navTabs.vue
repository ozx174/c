<template>
  <div>
    <transition :name="effect">
      <keep-alive>
        <router-view class="view-wrapper"></router-view>
      </keep-alive>
    </transition>
    <div class="tabs" v-if="showTabs">
      <div class="tab-item">
        <router-link to="/tab/home">
          <i class="icon icon1"></i>
          <span class="text">给乐</span>
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/tab/shops">
          <i class="icon icon2"></i>
          <span class="text">商家</span>
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/tab/mine">
          <i class="icon icon3"></i>
          <span class="text">我的</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    props: {
      effect: {
        type: String,
        default: 'next'
      },
      showTabs: {
        type: Boolean,
        default: true
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin"
  .view-wrapper
    overflow: hidden
    position: absolute
    width: 100%;
    top: 0
    bottom: 0
    background: #f2f2f2
  .tabs
    display: flex
    height: 49px
    justify-content: center
    width: 100%
    text-align: center
    position: fixed
    bottom: 0
    left: 0
    right: 0
    background: #29ADFD
    .tab-item
      flex: 1
      font-size: 0.2rem
      line-height: 14px
      padding-top: 1px
      .active
        .icon
          opacity: 1
        .text
          opacity: 1
      .icon
        background-size: 1.32rem
        width: 0.48rem
        height: 0.48rem
        margin: 0.06rem auto 0.03rem !important
        display: block
        opacity: 0.5
        font-size: 32px
      .icon1
        bg-image('../../assets/img/tab/cjc_icon')
        background-position: 0 0
      .icon2
        bg-image('../../assets/img/tab/cjc_icon')
        background-position: 0 -0.56rem
      .icon3
        bg-image('../../assets/img/tab/cjc_icon')
        background-position: 0.02rem -1.14rem
      .text
        color: #ffffff
        opacity: 0.5
</style>
