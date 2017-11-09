<template>
  <div>
    <div class="shop-wrapper bor-bot" v-for="item in list">
      <div class="content">
        <div class="img-box">
          <img :src="item.pic" alt="">
          <div class="title">{{item.shortName}}</div>
        </div>
        <div class="info-box">
          <p><{{item.distance}}km</p>
          <p>科技园·湘菜</p>
          <p>人均消费￥{{item.perCapita}}</p>
        </div>
      </div>
      <div class="star-wrapper">
        <star :size="36" :score="item.commentGrade" class="star"></star>
        <span class="desc">{{item.paymentCount}}人已消费</span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import star from '../../common/star/star.vue';
  export default{
    components: {
      star
    },
    props: {
      list: {
        type: Array,
        default: []
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .collect-wrapper
    background-color: #fff

  .shop-wrapper
    margin-top: .24rem
    position: relative
    padding: 0 0.24rem
    background-color: #fff
    .content
      border-radius: 0.1rem
      background-color: #f2f2f2
      font-size: 0
      .img-box
        position: relative
        overflow: hidden
        width: 62% !important
        height: 2.2rem !important
        display: inline-block
        vertical-align: top
        border-radius: 0.1rem
        img
          display: block
          width: 100%
        .title
          font-size: .32rem;
          position: absolute;
          z-index: 9;
          top: .2rem;
          left: .2rem;
          color: #fff;
          text-shadow: 1px 1px 0 #000;
      .info-box
        display: inline-block
        vertical-align: top
        padding-left: 0.2rem
        p
          font-size: 0.28rem
          color: #666
          margin-top: 0.2rem
        p:first-child
          margin-top: 0.22rem
          color: #999
          font-size: 0.28rem
    .star-wrapper
      margin-top: 0.2rem
      padding-bottom: 0.2rem
      .star
        display: inline-block
        vertical-align: top
      .desc
        vertical-align: top
        line-height: 16px
        padding-left: .2rem
        color: #666
</style>
