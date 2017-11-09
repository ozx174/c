<template>
  <div>
    <gl-header :title="'我的乐豆'"></gl-header>
    <div class="blue-wrapper"></div>
    <div class="des-bar-container">
      <p class="bean">1.26</p>
      <p class="desc">乐豆余额/豆</p>
      <router-link to="/tab/beanfun_explain">
        <span class="explain">乐豆说明</span>
      </router-link>
      <div class="nav-btn-wrapper">
        <div class="nav-btn" :class="{'select-btn':navNum===0}" @click="changeNav(0)"><span>乐豆收入</span></div>
        <div class="nav-btn" :class="{'select-btn':navNum===1}" @click="changeNav(1)"><span>乐豆支出</span></div>
      </div>
    </div>
    <div ref="slideWrapper">
      <scroll ref="returnListHook"
              class="list-wrapper"
              :class="{'left-1':left}"
              :data="returnLists"
              :pullup="true"
              @scrollToEnd="loadMore">
        <div>
          <div class="bean-list" v-for="returnList in returnLists">
            <div class="detail-box bor-bot">
              <p class="f30 color33">{{returnList.merchantName}}<i class="ng-binding">-网上消费</i></p>
              <p class="f24 coloraa">{{returnList.dateTime}}</p>
            </div>
            <span class="f34 color66 add">+{{returnList.happyCoin}}豆</span>
          </div>
          <div style="text-align: center">
            <img src="../../assets/img/loading.gif" width="30" height="30" alt="">
          </div>
        </div>
      </scroll>
      <scroll ref="consumeListHook"
              class="list-wrapper consume-list"
              :data="consumeLists"
              :class="{'left-2':left}"
              :pullup="true"
              @scrollToEnd="loadMore">
        <div>
          <div class="bean-list" v-for="consumeList in consumeLists">
            <div class="detail-box bor-bot">
              <p class="f30 color33">{{consumeList.merchantName}}<i class="ng-binding">-网上消费</i></p>
              <p class="f24 coloraa">{{consumeList.dateTime}}</p>
            </div>
            <span class="f34 color66 sub">-{{consumeList.happyCoin}}豆</span>
          </div>
          <div style="text-align: center">
            <img src="../../assets/img/loading.gif" width="30" height="30" alt="">
          </div>
        </div>
      </scroll>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import glHeader from '../../common/glHeader/glHeader.vue';
  import scroll from '../../common/scroll/scroll.vue';
  export default{
    components: {
      glHeader,
      scroll
    },
    data() {
      return {
        navNum: 0,
        returnLists: [],
        consumeLists: [],
        left: false
      };
    },
    created() {
      this._init();

      this.$nextTick(() => {
        let x = 0;
        let pX = 0;
        let self = this;
        this.$refs.slideWrapper.addEventListener('touchstart', function (e) {
          pX = e.targetTouches[0].pageX;
        });
        this.$refs.slideWrapper.addEventListener('touchmove', function (e) {
          x = e.targetTouches[0].pageX;
          if (Math.abs(x - pX) > 50) {
            self.$refs.returnListHook.stop();
            if (pX - x > 150) {
              self.left = true;
              self.navNum = 1;
            } else if (x - pX > 150) {
              self.left = false;
              self.navNum = 0;
            }
          }
        });
        this.$refs.slideWrapper.addEventListener('touchend', function () {
          self.$refs.returnListHook.start();
        });
      });
    },
    methods: {
      loadMore() {
        if (this.navNum === 0) {
          this.$http.get('/api/beanfun', {
            params: {
              type: 0
            }
          }).then(function (res) {
            res = res.body;
            this.returnLists = this.returnLists.concat(res.data);
          });
        } else {
          this.$http.get('/api/beanfun', {
            params: {
              type: 1
            }
          }).then(function (res) {
            res = res.body;
            this.consumeLists = this.consumeLists.concat(res.data);
          });
        }
      },
      changeNav(num) {
        this.navNum = num;
        this.left = !this.left;
      },
      _init() {
        this.$http.get('/api/beanfun', {
          params: {
            type: 0
          }
        }).then(function (res) {
          res = res.body;
          this.returnLists = res.data;
        });

        this.$http.get('/api/beanfun', {
          params: {
            type: 1
          }
        }).then(function (res) {
          res = res.body;
          this.consumeLists = res.data;
        });
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .blue-wrapper
    width: 100%
    height: 1.75rem
    background-color: #29ADFD

  .des-bar-container
    position: fixed
    height: 2.8rem
    background-color: white
    opacity: 0.96
    border-radius: 0.1rem
    top: 1.4rem
    left: 20px
    right: 20px
    margin: auto
    color: #29adfd
    box-shadow: 0 1px 8px #29adfd
    .bean
      padding-top: 0.5rem
      font-size: .5rem
      padding-left: 0.6rem
    .desc
      padding-top: 0.12rem
      font-size: 0.24rem
      padding-left: 0.6rem
    .explain
      position: absolute
      top: 0.3rem
      right: 0.3rem
      display: block
      padding: 0.1rem 0.15rem
      font-size: 0.24rem
      z-index: 1
      color: #29adfd
      &:before
        position: absolute
        left: 0
        top: 0
        border: 1px solid #29adfd
        width: 200%
        height: 200%
        transform: scale(0.5)
        border-radius: 100px
        transform-origin: 0 0
        content: ''
    .nav-btn-wrapper
      position: absolute
      bottom: -0.03rem
      left: 0
      right: 0
      height: 0.7rem
      font-size: 0
      background-color: #2c9ee4
      border-bottom-left-radius: 0.1rem
      border-bottom-right-radius: 0.1rem
      display: flex
      padding: 0.1rem
      .nav-btn
        flex: 1
        height: 0.7rem
        text-align: center
        border-radius: 0.1rem
        span
          display: block
          margin: 0.1rem 1.07rem
          height: 0.48rem
          font-size: 0.24rem
          color: #fff
          line-height: 0.36rem
      .select-btn
        background-color: #39b4ff
        span
          border-bottom: 2px solid #ffffff

  .list-wrapper
    top: 4.3rem
    right: 0
    bottom: 0
    left: 0
    position: absolute
    overflow: hidden
    transition: all 0.3s
    .bean-list
      padding: 0 .24rem
      height: 1.38rem
      position: relative
      .detail-box
        height: inherit
        overflow: hidden
        p:first-child
          padding-top: .30rem
          color: #333
          font-size: 0.30rem
        p:last-child
          padding-top: .20rem
          color: #aaa
          font-size: 0.24rem
      span
        font-size: 0.34rem
        position: absolute
        right: .24rem
        top: .76rem
      .add
        color: #65c816
      .sub
        color: #fe5455

  .consume-list
    transform: translateX(100%)

  .left-1
    transform: translateX(-100%)
    transition: all 0.3s

  .left-2
    transform: translateX(0)
    transition: all 0.3s
</style>
