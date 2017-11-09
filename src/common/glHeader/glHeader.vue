<template>
  <div>
    <header id="gl_header">
      <div class="tc df">
        <div class="w124 lh88" @click="_back">
          <a class="button-retrun header-back colorff"></a>
        </div>
        <div class="df1 f34 colorff lh88 ng-binding">{{title}}</div>
        <div class="w124 lh88 colorff header_rgiht"></div>
      </div>
    </header>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    props: {
      title: {
        type: String,
        default: '给乐'
      }
    },
    methods: {
      _back() {
        window.history.back();
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  #gl_header
    padding-top: 0.4rem
    background-color: #29ADFD
    line-height: 0.88rem
    .tc
      text-align : center
      display:flex
      .w124
        width: 1.24rem
        line-height: 0.88rem
        a
          color: #fff
          bg-image('../../assets/img/tab/cjc_icon')
          background-size: 1.32rem
          height: 0.48rem
          margin-top: 0.26rem
          display: block
          background-position: 0.3rem -1.7rem
      .df1
        line-height: 0.88rem
        flex:1
        position :relative
        color: #ffffff
        font-size: 0.34rem
</style>
