<template>
  <div>
    <div class="sheet-bg" @click="action('cancel')" :class="{'bg-none':animation,'bg-block':!animation}"></div>
    <div class="sheet-wrapper">
      <div class="box tel-box" :class="{'box-none':animation,'box-block':!animation}">
        <div class="items-box" @click="action(btn)" v-for="btn in btnArr"><span>{{btn}}</span></div>
        <div class="options" @click="action('cancel')">
          <a class="cancel">取消</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    methods: {
      action(msg) {
        this.$emit('takeAction', msg);
      }
    },
    props: {
      animation: {
        type: Boolean,
        default: false
      },
      btnArr: {
        type: Array,
        default: []
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/animation.styl"
  .sheet-bg
    position: fixed
    width: 100%
    top: 0
    bottom: 0
    z-index: 14
    background-color: rgba(7, 17, 27, 0.4);
  .bg-block
    animation: fadeIn 0.35s;
  .bg-none
    animation: fadeOut 0.35s;

  .sheet-wrapper
    position: fixed
    width: 100%
    bottom: 0
    z-index: 15
    .box
      position: absolute
      bottom: 0
      width: 100%
      left: 0
      background-color: #fff
      text-align: center
      .items-box
        padding: .34rem 0 .33rem
        border-bottom: .01rem solid #ddd
        font-size: .32rem
        margin: 0 .3rem
        span
          width: 100%
          font-size: .32rem
          margin: 0
          line-height: 1
          color: #29adfd
          border: none
      .options
        padding: .24rem 0
        .cancel
          font-size: .32rem
          line-height: .6rem
          color: #333
          border: none
          background-color: transparent
    .box-block
      animation: slideUp 0.35s
    .box-none
      animation: slideDown 0.35s;
</style>
