<template>
  <el-header class="head" align="right">
    <!--img class="imageHead" src=-->
    <div class="logo">
      <li><router-link to="/">首页</router-link></li>
      <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
      <li><a href="http://www.scau.edu.cn/">学校首页</a></li>
      <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
      <li><router-link to="/login">管理登录</router-link></li>
      <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
      <li><a>注册</a></li>
      <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
      <li id="search" v-if="searchInput">
        <input @click.stop="search(true)" placeholder="请输入搜索内容..." @keyup.enter="onEnter()" ref="val">
      </li>
      <li>
        <span style="padding: 5px;"  class="icon iconfont" @click.stop="search(true)">&#xe63d;</span>
      </li>
    </div>
  </el-header>
</template>

<script>
  import '../assets/iconfont/iconfont.css'
  import axios from 'axios'
  import Vue from 'vue'
  Vue.prototype.axios = axios
  document.onclick = function () {
    let domId = document.getElementById('search')
    if(domId){
      domId.style.display = "none";
    }else{
      return
    }
  }
    export default {
      name: "schHeader",
      data(){
        return{
          searchInput: false
        }
      },
      methods:{
        search(val) {
          this.searchInput = val;
          //e.stopPropagation();
          document.getElementById('search').style.display = "inline";
          if(val == true&&this.$refs.input.value != ''){
            this.onEnter();
          }
        },
        onEnter() {
          return
          /*let val = this.$refs.input.value
          var _this = this;
          this.axios.get('/node/searchNews').then(res => {

          },err => {
            throw new Error(err)
          })*/
        }
      }
    }
</script>

<style scoped>
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
    font-size: 20px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: yellow;
    cursor: pointer;
  }
  .head{
    background-image: url("../assets/headlogo.png");
    background-repeat: no-repeat;
    background-size: auto;
    margin: 10px 23px 0px 14px;
  }
  .logo{
    list-style: none;
    font-size: 14px;
    font-weight: bolder;
    padding-top: 24px;
  }
  .logo li{
    display: inline;
    width: 80px;
  }
  .logo li a{
    cursor: pointer;
    color: black;
    text-decoration: none;
  }
  .logo a:hover{
    color: #1e824a;
  }
  /*.imageHead{
    width:auto;
    height:auto;
    max-width: 100%;
    max-height: 100%;
  }*/
</style>
