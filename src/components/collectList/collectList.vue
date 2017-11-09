<template>
  <div class="collect-wrapper">
    <gl-header :title="'我的收藏'" class="gl-header"></gl-header>
    <scroll :data="collectList" class="scroll">
      <shop-introduce :list="collectList"></shop-introduce>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
  import glHeader from '../../common/glHeader/glHeader.vue';
  import scroll from '../../common/scroll/scroll.vue';
  import shopIntroduce from '../../common/shopIntroduce/shopIntroduce.vue';
  export default{
    components: {
      glHeader,
      shopIntroduce,
      scroll
    },
    created() {
      this.$http.get('/api/getFavoritesList').then(function (res) {
        res = res.body;
        this.collectList = res.data;
        this.$http.get('http://api.map.baidu.com/geosearch/v3/nearby?ak=5c386b41caecdd8f9003871d2660ef2d&geotable_id=172778&location=113.959062,22.543544&radius=1000000000&sortby=distance:1&filter=merchantNo:[1707671000128,1000001900343,1000001000461,1000001000460]').then((resp) => {
          resp = resp.body.contents;
          this.collectList.forEach((item, index) => {
            item.paymentCount = resp[index].paymentCount;
            item.perCapita = resp[index].perCapita || 50;
            item.distance = (resp[index].distance / 1000).toFixed(1);
            item.pic = resp[index].images;
          });
        });
      });
    },
    data() {
      return {
        collectList: []
      };
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .collect-wrapper
    background-color: #fff
  .scroll
    position: absolute
    top: 1.28rem
    left: 0
    right: 0
    bottom: 0
    overflow: hidden
</style>
