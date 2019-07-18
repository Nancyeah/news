<template>
  <el-footer>
    <div class="imgList">
      <li v-for="item in articlesObj.footerImg">
        <a :href="item.href"><img :src="item.src"></a>
      </li>
    </div>
    <div class="footer">
      <p>
        <span>SCAU Copyright © 2019</span>
        <span>华南农业大学 All rights reserved</span>
        <span>地址：广州市天河区五山华南农业大学</span>
        <span>备案编号：粤ICP备05008874号 4401060500010</span>
      </p>
      <p style="float: right;">
        <router-link to="/enterIndex">
          <span>进入企业新闻网</span>
        </router-link>
      </p>
    </div>
  </el-footer>
</template>

<script>
  import Vue from 'vue'
  import axios from 'axios'
  Vue.prototype.axios = axios;
     export default {
       name: "",
       data(){
         return {
           articlesObj: []
         }
       },
       mounted() {
         var _this = this;
         this.axios.get('/node/getNewsInfo').then(res => {
           _this.articlesObj = res.data.articlesObj;
         },err => {
           throw new Error(err)
         })
       }
    }
</script>

<style scoped>
  .footer{
    background: url("../assets/footbg.png");
    color: #ffffff;
    overflow: hidden;
  }
  .imgList{
    list-style: none;
  }
  .imgList li{
    display: inline;
    margin: 0px 5px;
  }
  .footer span{
    text-align: center;
    line-height: 30px;
    display: block;
  }
  .footer a{
    color: #fff;
    text-decoration: none;
  }
  .footer a:hover{
    text-decoration: underline;
  }
</style>
