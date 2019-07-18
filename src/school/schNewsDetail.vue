<template>
  <!--最外面的div不能忘记，忘了就会报错，无法渲染此组件-->
  <div style="margin: 0 111.5px;">
    <schHeader></schHeader>
    <el-main>
        <h1 class="arti_title">{{ articlesObj.title }}</h1>
        <p class="arti_metas">
          <span v-for="item in articlesObj.arti_metas">{{ item }}</span>
        </p>
        <div class="article">
          <p v-for="item in articlesObj.artObj">
            <img :src="item.src">
            <span>{{ item.text }}</span>
          </p>
        </div>
    </el-main>
    <schFooter></schFooter>
  </div>
</template>

<script>
  import schHeader from './schHeader.vue'
  import schFooter from './schFooter.vue'
  import {mapState, mapGetters, mapActions} from 'vuex'
  import axios from 'axios'
  import Vue from 'vue'
  Vue.prototype.axios = axios;
    export default {
      name: "schNewsDetail",
      components: {
        schHeader,
        schFooter
      },
      data() {
        return {
          articlesObj: []
        }
      },
      computed: {
        ...mapState({
          imgHref: state => state.schNews.imgHref
        }),
        ...mapGetters('schNews', { //用mapGetters来获取schMainStatus.js里面的getters
          imgHref: 'getImgHref'
        })
      },
      mounted() {
        var _this = this;
        this.axios.post('/node/getNewsDetail', {data:this.imgHref}).then(res => {
            _this.articlesObj = res.data.articlesObj
          }
        )
      }
    }
</script>

<style scoped>
  .arti_title{
    line-height: 26px;
    padding: 10px;
    border-bottom: 1px solid #ececec;
    font-family: "Microsoft YaHei";
    font-size: 22px;
    text-align: center;
    color: #1e824a;
  }
  .arti_metas{
    padding: 10px;
    text-align: center;
  }
  .arti_metas span{
    margin: 0 5px;
    font-size: 12px;
    color: #787878;
  }
  .article{
    text-align: center;
    margin: 0 auto;
    overflow: hidden;
    margin-top: 10px;
  }
  .article p{
    font-size: 18px;
    line-height: 1.75em;
  }
</style>
