<template>
  <div class="login-wrapper">
    <div class="header">
      <a class="icon icon_cross" @click="back"></a>
      <div class="cjc_title f34">用户登录</div>
      <div class="cjc_titleR f30" ui-sref="tab.tab_register({tel:inputData.phone})" href="#/tab/tab_register">注册</div>
      <div class="icon icon_le"></div>
    </div>
    <section class="section">
      <div>
        <i class="icon icon_phone"></i>
        <input type="tel"
               class="tel bor-bot" placeholder="请输入您的手机号"
               style="">
        <em class="icon icon_cross"></em>
      </div>
      <div>
        <i class="icon icon_pwd"></i>
        <input type="password" class="bor-bot" placeholder="请输入您的密码">
        <em class="icon icon_eye"></em>
      </div>
      <div class="f24">
        <span class="fl f26">验证码登录</span>
        <span class="fr f26">忘记密码</span>
      </div>
    </section>
    <footer class="footer">
      <a @click="login">登 录</a>
    </footer>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    methods: {
      login() {
        location.href = '#/tab/home';
      },
      back() {
        window.history.back();
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .login-wrapper
    position: absolute
    top: 0
    bottom: 0
    bg-image('../../assets/img/ym_img/bg_c')
    no-repeat
    background-size: 100%
    width: 100%
    .header
      height: 3.9rem
      width: 100%
      a
        color: #387ef5
        &:after
          width: .52rem
          height: .52rem
          display: inline-block
          background-position: -2.84rem -2.29rem
          margin: .6rem 0 0 .24rem
          bg-image('../../assets/img/ym_img/icon_02')
          background-repeat: no-repeat
          background-size: 4rem
          content: ''
      .cjc_title
        color: #fff
        opacity: .8
        position: absolute
        top: 0.7rem
        left: 41%
        font-size: 0.34rem
      .cjc_titleR
        color: #fff
        opacity: .8
        position: absolute
        top: 0.7rem
        right: .28rem
        font-size: 0.30rem
      .icon_le
        width: 100%
        &:after
          content: ""
          display: block
          bg-image('../../assets/img/ym_img/icon_02')
          background-repeat: no-repeat
          background-size: 4rem
          width: 1.44rem
          height: 1.44rem
          background-position: -2.31rem -.14rem
          margin: .7rem 3.05rem .7rem
    .section
      bg-image('../../assets/img/ym_img/paper_c')
      background-repeat: no-repeat
      background-size: 7.3rem
      height: 4.5rem
      margin: 0 .1rem 1.3rem
      padding: .3rem .65rem 0 .55rem
      border-radius: .1rem
      div
        height: 1.3rem
        width: 100%
        position: relative
        font-size: 0.24rem
        .icon_phone
          &:after
            content: ""
            bg-image('../../assets/img/ym_img/icon_02')
            background-size: 4rem
            position: absolute
            width: .52rem
            height: .52rem
            display: inline-block
            background-position: -2.83rem -2.89rem
            top: .55rem
            left: .1rem
        .icon_cross
          &:after
            position: absolute
            top: .55rem
            right: 0
            width: .52rem
            height: .52rem
            display: inline-block
            background-position: -2.17rem -2.82rem
            content: ""
            bg-image('../../assets/img/ym_img/icon_02')
            background-size: 4rem
        .icon_pwd
          &:after
            position: absolute
            width: .52rem
            height: .52rem
            display: inline-block
            background-position: -3.35rem -1.64rem
            top: .55rem
            left: .1rem
            background-size: 4rem
            content: "";
            bg-image('../../assets/img/ym_img/icon_02');
        .icon_eye
          &:after
            position: absolute;
            top: .55rem;
            right: 0;
            width: .52rem;
            height: .52rem;
            display: inline-block;
            background-position: -.09rem -2.32rem;
            content: "";
            bg-image('../../assets/img/ym_img/icon_02');
            background-size: 4rem;
        input
          display: inline-block
          width: 5.3rem;
          height: 0.8rem;
          font-size: .3rem;
          color: #333;
          padding-top: .4rem;
          padding-left: .1rem;
          margin-left: .8rem;
          border: none
          outline: 0
        span
          position: absolute
          color: #29adfd
          width: 1.5rem
          padding-top: .4rem
          height: .8rem
          &:first-child
            left: .16rem
          &:last-child
            text-align: right
            right: 0.05rem
    .footer
      margin: 0 .3rem
      a
        width: 6.9rem
        display: block
        text-decoration: none
        height: 1rem
        line-height: 1rem
        color: #fff
        font-size: .32rem
        border-radius: .45rem
        text-align: center
        background: #ddd
</style>
