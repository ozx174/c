<template>
  <div>
    <gl-header :title="'乐豆说明'" class="header"></gl-header>
    <scroll class="scroll">
      <div class="container mt40">
        <a href="" class="btnRound what">1、乐豆是什么？</a>
        <p style="height: 2.6rem;">
          乐豆是由给乐科技通过独有的清算系统将各种消费者权益（积分、优惠券、现金券、会员优惠等），按比值转化而来的通用数字积分，1乐豆=1人民币。它是帮助消费者实现权益价值的衡量工具。可在给乐合作商家流通和支付使用。</p>
        <div class="ledou2"></div>
        <a href="" class="btnRound how">2、乐豆如何获取？</a>
        <div style="height: 2.2rem;">
          <p>用户可通过下载注册给乐生活app账号，在给乐合作商家消费支付后，获取商家的返豆。还可通过平台奖励、商户派送等行为获得。所获乐豆可用于下次在所有给乐合作商家支付时抵现使用。</p>
        </div>
        <div class="ledou3"></div>
        <a href="" class="btnRound use">3、乐豆如何使用？</a>
        <div style="height: 2.9rem;">
          <p>
            在给乐合作商家使用给乐生活app或给乐专用pos机支付时，系统会自动扣减用户账户中的所有可用乐豆，当乐豆不足以支付全单价格时，剩余费用通过银联支付完成；当乐豆余额≥需支付金额时，你只需支付≥1元人民币，其余的都可通过乐豆抵扣（如：您拥有100个乐豆，消费100元人民币，此时，您只需支付≥1元人民币，其余的可由乐豆抵扣）。</p>
        </div>
        <div class="ledou4"></div>
        <a href="" class="btnRound tips">4、乐豆使用注意事项</a>
        <div style="height: 6.5rem;">
          <p>
            1、乐豆可关闭，关闭后无法使用乐豆进行抵现支付，但仍然可以获得商家的返豆。乐豆开关在“我的”-“设置”里。<br><br>2、乐豆可以通过给乐专用的pos机刷卡，使用乐豆抵现支付，同时也可以获得商家的乐豆，所获乐豆可以在给乐生活app“我的”-“乐豆”账单里查看。<br><br>3、每次使用给乐生活app支付时所获的乐豆数量不等，乐豆数量根据商家设定的返豆比例返给用户。<br><br>4、乐豆目前不支持转让和提现，只限于给乐合作商家支付抵扣使用。
          </p>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
  import glHeader from '../../common/glHeader/glHeader.vue';
  import scroll from '../../common/scroll/scroll.vue';

  export default{
    components: {
      glHeader,
      scroll
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .header
    position: fixed
    top: 0
    width: 100%

  .scroll
    position: absolute
    top: 1.28rem
    right: 0
    bottom: 0
    left: 0
    overflow: hidden
    margin-top: -1px
    padding-top: 1px
    margin-bottom: -1px
    width: auto
    height: auto
    .container
      padding: 0 0.28rem;
      margin-top: .4rem;
      .btnRound
        display: block;
        margin: 0 auto 0.16rem;
        background: #29adfd;
        border-radius: 0.88rem;
        height: 0.72rem;
        line-height: 0.72rem;
        color: #fff;
        font-size: 0.36rem;
        text-align: center;
        text-decoration: none
      .what
        width: 3.28rem;
      .how,.use
        width: 4.34rem;
      .tips
        width: 5.12rem;
      p
        color: #666;
        font-size: 0.28rem;
        line-height: 0.44rem;
      .ledou2
        height: 4rem;
        bg-image('../../assets/img/ym_img/ledou2')
        background-repeat: no-repeat
        background-size: 7.5rem 4rem;
      .ledou3
        height: 6rem;
        bg-image('../../assets/img/ym_img/ledou3')
        background-repeat: no-repeat
        background-size: 7.5rem 4rem;
      .ledou4
        height: 4rem;
        bg-image('../../assets/img/ym_img/ledou4')
        background-repeat: no-repeat
        background-size: 7.5rem 4rem;
</style>
