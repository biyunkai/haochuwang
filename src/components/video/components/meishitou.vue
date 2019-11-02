<template>
  <div class="meishi-top">
      <div class="meishi-left">
        <a onclick="javascript:history.back(-1)" class="nav-header-link">
          <i class="icon-back-gray"></i>
        </a>
      </div>
      <div class="meishi-center">美食视频</div>
      <div class="meishi-right">
        <a href="https://m.haochu.com/sousuo">
          <i class="search_gray"></i>
        </a>
      </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style  scoped>
.meishi-top {
  width: 100%;
  height: 45px;
  background: #fff;
  position: fixed;
  left: 0;
  top: 0;
  border-bottom: #ff7b33 2px solid;
  z-index: 1000;
}
.meishi-left {
  width: 20%;
  height: 100%;
  top: 0;
  left: 0;
  font-size: 0.65rem;
  text-align: center;
  position: absolute;
}
.icon-back-gray {
  width: 100%;
  height: 100%;
  display: inline-block !important;
  background: url(https://cdn.haochu.com/static/mobile_common/images/arrow_gray_left.png)
    no-repeat center center;
  background-size: auto 40%;
}
.meishi-center {
  color: #ff3300;
  line-height: 45px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  position: relative;
  text-align: center;
  margin: 0 20%;
  height: 100%;
  font-size: 1.5rem;
}
.meishi-right {
  width: 20%;
  height: 100%;
  top: 0;
  color: #fff;
  position: absolute;
  text-align: center;
  right: 0;
  font-size: 0.65rem;
  box-sizing: border-box;
}
.search_gray {
  display: inline-block;
  width: 100%;
  height: 100%;
  color: #666;
  background: url(https://cdn.haochu.com/static/mobile_common/images/search_gray.png)
    no-repeat center center;
  background-size: auto 40%;
  box-sizing: border-box;
  font-style: italic;
}
</style>