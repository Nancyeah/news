<template>
  <div>
    <div class="bgImg">
      <img src="../assets/gov_logo.png">
      <div class="right_part">
        <ul>
          <li>
            <span class="icon iconfont">&#xe644;</span>
          </li>
          <li>
            <span class="icon iconfont">&#xe693;</span>
          </li>
          <li>
            <span class="icon iconfont">&#xe607;</span>
          </li>
          <li>
            <img src="../assets/weibo.jpg">
          </li>
          <li>
            <img src="../assets/weixin.jpg">
          </li>
          <li>
            <router-link to="/login">
              <span>登录管理</span>
            </router-link>
          </li>
        </ul>
        <div class="search">
          <el-input v-model="input10" clearable size="mini" suffix-icon="el-icon-search"></el-input>
        </div>
      </div>
    </div>
    <div class="head_nav">
      <div class="nav_left">
        <img src="../assets/icon_1.jpg">
      </div>
      <div class="nav_list">
        <ul>
          <li v-for="item in navList">
            <a href="#">{{ item.name }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "govHeader",
      data(){
        return {
          navList:[
            {name:'国务院'},
            {name:'总理'},
            {name:'新闻'},
            {name:'政策'},
            {name:'互动'},
            {name:'服务'},
            {name:'数据'},
            {name:'国情'},
          ],
          input10: ''
        }
      }
    }
</script>

<style lang="scss" scoped>
  @font-face {
    font-family: 'iconfont';
    src: url('../assets/iconfont/iconfont.eot');
    src: url('../assets/iconfont/iconfont.eot?#iefix') format('embedded-opentype'),
    url('../assets/iconfont/iconfont.woff2') format('woff2'),
    url('../assets/iconfont/iconfont.woff') format('woff'),
    url('../assets/iconfont/iconfont.ttf') format('truetype'),
    url('../assets/iconfont/iconfont.svg#iconfont') format('svg');
  }
  .iconfont {
    font-family: "iconfont" !important;
    font-size: 18px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    cursor: pointer;
  }
  .bgImg{
    margin: 2% 10%;
    .right_part{
      display: inline-block;
      float: right;
    }
    ul{
      padding: 0px;
      li{
        list-style: none;
        float: left;
        padding: 5px;
        a{
          font-size: 12px;
          text-decoration: none;
        }
      }
    }
  }
  .head_nav{
    overflow: hidden;
    background-color: #005293;
    height: 37px;
    .nav_left{
      float: left;
      padding: 6px 15px 6px 177px;
      border-right: 1px solid #bfbfbf;
    }
  }
  .nav_list{
    overflow: hidden;
    ul{
      list-style: none;
      padding: 0px;
      li{
        float: left;
        line-height: 37px;
        padding: 0 26px;
        border-right: 1px solid #bfbfbf;
        width: 5%;
        text-align: center;
        a{
          color: #fff;
          font-weight: bolder;
          font-size: larger;
          text-decoration: none;
        }
      }
    }
  }
</style>
