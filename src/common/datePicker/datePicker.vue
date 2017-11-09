<template>
  <div style="position:fixed;bottom:0;width: 100%;height: 6rem;overflow: hidden;" ref="yearWrapper">
    <ul ref="yearList">
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
      <li>11</li>
      <li>12</li>
      <li>13</li>
      <li>14</li>
      <li>15</li>
      <li>16</li>
      <li>17</li>
      <li>18</li>
      <li>19</li>
      <li>20</li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{

    created() {
      this.$nextTick(() => {
        let moveY;
        let preY;
        let yearWrapper = this.$refs.yearWrapper;
        let yearList = this.$refs.yearList;
        // console.log(this.$refs.yearList.style.tranform);
        let elY = this.$refs.yearList.style.tranform || 0;
        yearWrapper.addEventListener('touchstart', (e) => {
          let touch = e.targetTouches[0];
          preY = touch.pageY;
          elY = parseFloat(this.$refs.yearList.style.transform.split('(')[1]) || 0;
        });
        yearWrapper.addEventListener('touchmove', (e) => {
          let touch = e.targetTouches[0];
          moveY = touch.pageY;
          let y = moveY - preY + elY;
          yearList.style.webkitTransform = `translateY(${y}px)`;
          yearList.style.transform = `translateY(${y}px)`;
        });
        yearWrapper.addEventListener('touchend', (e) => {

        });
      });
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  li
    height: 1rem
</style>
