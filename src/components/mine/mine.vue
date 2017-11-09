<template>
  <div style="">
    <div class="cjc_mine_top">
      <header class="df">
        <div class="w164"></div>
        <div class="title">我的</div>
        <div class="w164">
          <i class="icon icon1"></i>
        </div>
      </header>
      <div class="cjc_head">
        <div class="cjc_head_img">
          <img
            src="https://gl365dev.oss-cn-shenzhen.aliyuncs.com/user/a16d94e8092f426480b3cb190cf98ea8profile_1497355724520.jpg"
            width="100%" height="100%">
        </div>
        <div class="phone">137****7127</div>
        <div class="df">
          <div class="df1 tc">
            <router-link :to="{name:'beanfun',params:{id:Math.random()}}">
              <div class="f50">****</div>
              <div class="f22">乐豆余额</div>
            </router-link>
          </div>
          <div class="df1 tc">
            <i class="icon icon7"></i>
            <div class="color66 f22">银行卡</div>
          </div>
        </div>
      </div>
    </div>
    <div class="content-wrapper">
      <div class="cjc_bill">
        <div class="cjc_bill_top bor-bot">
          <i class="icon icon2"></i>
          <div class="f30 fontBold">我的帐单</div>
          <div class="coloraa f24"><span>2017</span>年<span>8</span>月01-<span>8</span>月<span>31</span></div>
          <div class="cjc_more_btn">
            更多
          </div>
        </div>
        <div class="df tc">
          <div class="df1">
            <div class="f28 fb color66 font ng-binding">￥0.00</div>
            <div class="f22 color33 ls2">支付金额</div>
          </div>
          <div class="df1">
            <div class="f28 fb color66 font ng-binding">-0.00</div>
            <div class="f22 color33 ls2">乐豆支付</div>
          </div>
          <div class="df1">
            <div class="f28 fb color66 font ng-binding">+0.00</div>
            <div class="f22 color33 ls2">商家返豆</div>
          </div>
        </div>
      </div>
      <div class="cjc_more">
        <div class="bor-bot df">
          <div class="df1" @click="clickComments">
            <i class="icon icon3"></i>
            <div class="f30 color33 fontBold">我的评价</div>
            <div class="f24 coloraa ls2">我发表的评论</div>
          </div>
          <div class="df1">
            <router-link to="/tab/collect_list">
              <i class="icon icon4"></i>
              <div class="f30 color33 fontBold">我的收藏</div>
              <div class="f24 coloraa ls2">我收藏的商家</div>
            </router-link>
          </div>
        </div>
        <div class="df">
          <div class="df1" @click="clickTel">
            <i class="icon icon5"></i>
            <div class="f30 color33 fontBold">客服电话</div>
            <div class="f24 coloraa ls2">24小时服务热线</div>
          </div>
          <div class="df1 hdq_set">
            <i class="iconset icon8"></i>
            <div class="fl">
              <div class="f30 color33 fontBold">系统设置</div>
              <div class="f24 coloraa hdq_tst ls2">安全与帮助</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <action-sheet v-if="showTel" @takeAction="takeAction" :animation="animation" :btnArr="btnArr"></action-sheet>
  </div>
</template>

<script type="text/ecmascript-6">
  import actionSheet from '../../common/actionSheet/actionSheet.vue';
  export default{
    components: {
      actionSheet
    },
    data() {
      return {
        showTel: false,
        animation: false,
        btnArr: []
      };
    },
    methods: {
      clickTel() {
        this.btnArr = ['13714877127'];
        this.showTel = true;
        this.animation = false;
      },
      clickComments() {
        this.btnArr = [1, 2, 3, 4, 5];
        this.showTel = true;
        this.animation = false;
      },
      takeAction(action) {
        switch (action) {
          default:
            this.animation = true;
            setTimeout(() => {
              this.showTel = false;
            }, 330);
            break;
        }
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .cjc_mine_top
    height: 3.6rem
    background-image: linear-gradient(-197deg, #4fbdff 0%, #20b4ff 100%)
    position: relative
    header
      display: flex
      height: 1.28rem
      padding-top: 0.4rem
      .w164
        width: 1.64rem
        position: relative
        text-align: right
        margin-right: 0.2rem
        .icon1
          &:after
            content: ""
            display: inline-block
            width: 0.5rem
            height: 0.5rem
            bg-image('../../assets/img/mine/bellWhite')
            background-size: 100% 100%
            background-repeat: no-repeat
            margin: 0.18rem 0.04rem
      .title
        text-align: center
        line-height: 0.88rem
        flex: 1
        color: #ffffff
        font-size: 0.32rem
    .cjc_head
      box-shadow: 0 0.02rem 0.2rem 0 rgba(41, 173, 253, 0.22)
      position: absolute
      width: 6.7rem
      height: 3.9rem
      background-color: #fff
      left: 0.4rem
      top: 1.28rem
      border-radius: 0.08rem
      .cjc_head_img
        width: 1.24rem
        height: 1.24rem
        background-color: #fff
        margin: 0.26rem auto
        box-shadow: 0 0.02rem 0.2rem 0 rgba(41, 173, 253, 0.22)
        border-radius: 50%
        overflow: hidden
      .phone
        text-align: center
        color: #666
        font-size: 0.28rem
      .df
        padding: 0.48rem 0
        display: flex
        .df1
          flex: 1
          text-align: center
          .f50
            margin-bottom: 0.18rem
            color: #29adfd
            font-size: 0.50rem
          .f22
            font-size: 0.22rem
            color: #666
          .icon7
            &:after
              content: "";
              bg-image('../../assets/img/mine/icon');
              background-size: 5rem;
              width: 0.55rem;
              height: 0.55rem;
              background-position: -3rem 0;
              display: block;
              margin: 0 auto 0.18rem;

  .content-wrapper
    position: absolute;
    top: 5.4rem;
    right: 0;
    bottom: 49px;
    left: 0;
    overflow: hidden;
    margin-top: -1px;
    padding-top: 1px;
    margin-bottom: -1px;
    width: auto;
    height: auto;

  .cjc_bill
    height: 2.64rem
    background-color: #fff
    .cjc_bill_top
      margin: 0 0.44rem
      padding: 0.3rem 0 0.2rem 0.3rem
      position: relative
      .icon2
        &:after
          content: "";
          bg-image('../../assets/img/mine/icon')
          background-size: 5rem
          display: inline-block
          width: 0.42rem
          height: 0.42rem
          background-position: -4rem 0
          position: absolute
          left: -0.18rem
          top: .26rem
      .f30
        margin-bottom: 0.13rem
        font-size: 0.30rem
        font-weight: 400
        letter-spacing: .04rem
      .f24
        color: #aaa
        font-size: 0.24rem
      .cjc_more_btn
        width: 1.2rem
        height: 0.5rem
        line-height: 0.5rem
        color: #29adfd
        position: absolute
        text-align: center
        right: 0
        top: 0.2rem
        &:after
          content: ''
          position: absolute
          top: 0
          left: 0
          border: 1px solid #29adfd
          border-radius: 100px
          box-sizing: border-box
          width: 100%
          height: 100%
    .df
      padding: 0.3rem 0 0.38rem
      text-align: center
      display: flex
      .df1
        flex: 1
        position: relative
        .f28
          margin-bottom: 0.2rem
          color: #666
          font-weight: bold
          font-size: 0.28rem
          font-family: pictos !important
        .f22
          letter-spacing: .02rem
          color: #333
          font-size: 0.22rem

  .cjc_more
    padding: 0 0.24rem
    background-color: #fff
    margin-top: 0.2rem
    .df
      display: flex
      .df1
        padding: 0.3rem 0 0.3rem 0.6rem
        position: relative
        flex: 1
        .icon
          content: ""
          background-size: 5rem
          display: inline-block
          bg-image('../../assets/img/mine/icon')
          width: 0.42rem
          height: 0.42rem
          position: absolute
          left: 0
          top: .28rem
        .icon3
          background-position: -2rem -1rem
        .icon4
          background-position: -2rem 0
        .icon5
          background-position: 0 -1rem
        .icon8
          background-size: 0.42rem 0.42rem
          display: block
          width: 0.42rem
          height: 0.42rem
          position: absolute
          left: 0
          top: .28rem
          bg-image('../../assets/img/index/set')
          background-repeat: no-repeat
        .f30
          font-size: 0.30rem
          color: #333
          letter-spacing: .04rem
          font-weight: 400
          margin-bottom: 0.2rem
        .f24
          font-size: 0.24rem
          color: #aaa
          letter-spacing: .02rem
</style>
