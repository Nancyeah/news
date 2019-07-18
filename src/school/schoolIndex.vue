<template>
    <div style="margin: 0 auto;">
      <schHeader></schHeader>
      <el-main>
        <el-carousel :interval="4000" type="card" height="200px">
          <el-carousel-item v-for="item in articlesObj.imgMsg">
            <router-link to="/schNewsDetail">
              <img :src="item.pic_src" :title="item.pic_message" class="image" @click="invokePushItems(item.pic_href)">
            </router-link>
          </el-carousel-item>
        </el-carousel>
        <el-row :gutter="10">
          <el-col :span="8" class="designCol" ref="designCol">
            <h4 class="col_style">
              <router-link to="/schNewsMore">
                <span class="newsmore" @click="invokeMoreNews('http://www.scau.edu.cn/1300/list.htm')">更多</span>
              </router-link>
              学校要闻
            </h4>
            <div class="lanmu">
              <li v-for="item in articlesObj.newsPoint" class="designLi">
                <router-link to="/schNewsDetail">
                  <span class="news_title" @click="invokePushItems(item.href)">{{ item.name }}</span>
                </router-link>
                <span class="news_meta">{{ item.time }}</span>
              </li>
            </div>
          </el-col>
          <el-col :span="8" class="designCol" ref="designCol">
            <h4 class="col_style">
              <router-link to="/schNewsMore">
                <span class="newsmore" @click="invokeMoreNews('http://www.scau.edu.cn/1302/list.htm')">更多</span>
              </router-link>
              全媒头条
            </h4>
            <div class="lanmu">
              <li v-for="item in articlesObj.headlineNews" class="designLi">
                <router-link to="/schNewsDetail">
                  <span class="news_title" @click="invokePushItems(item.href)">{{ item.title }}</span>
                </router-link>
              </li>
            </div>
          </el-col>
          <el-col :span="8" class="designCol" ref="designCol">
            <h4 class="col_style">
              <router-link to="/schNewsMore">
                <span class="newsmore" @click="invokeMoreNews('http://www.scau.edu.cn/1301/list.htm')">更多</span>
              </router-link>
              媒体华农
            </h4>
            <div class="lanmu">
              <li v-for="item in articlesObj.mediaScau" class="designLi">
                <a :href="item.href">{{ item.title }}</a>
                <span class="news_meta">{{ item.time }}</span>
              </li>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="10">
          <el-col :span="8" class="designCol" ref="designCol">
            <h4 class="col_style">
              <router-link to="/schNewsMore">
                <span class="newsmore" @click="invokeMoreNews('http://www.scau.edu.cn/1303/list.htm')">更多</span>
              </router-link>
              学校通知
            </h4>
            <div class="lanmu">
              <li v-for="item in articlesObj.noticeMsg" class="designLi">
                <router-link to="/schNewsDetail">
                  <span class="news_title" @click="invokePushItems(item.href)">{{ item.title }}</span>
                </router-link>
                <span class="news_meta">{{ item.time }}</span>
              </li>
            </div>
          </el-col>
          <el-col :span="8" class="designCol" ref="designCol">
            <h4 class="col_style">
              <router-link to="/schNewsMore">
                <span class="newsmore" @click="invokeMoreNews('http://www.scau.edu.cn/syhy/list.htm')">更多</span>
              </router-link>
              学校会议
            </h4>
            <div class="lanmu">
              <li v-for="item in articlesObj.publicMsg" class="designLi">
                <router-link to="/schNewsDetail">
                  <span class="news_title" @click="invokePushItems(item.href)">{{ item.title }}</span>
                </router-link>
                <span class="news_meta">{{ item.time }}</span>
              </li>
            </div>
          </el-col>
          <el-col :span="8" class="designCol" ref="designCol">
            <h4 class="col_style">
              <router-link to="/schNewsMore">
                <span class="newsmore" @click="invokeMoreNews('http://www.scau.edu.cn/1586/list.htm')">更多</span>
              </router-link>
              视听华农
            </h4>
            <div class="lanmu">
              <li v-for="item in articlesObj.listenScau" class="designLi">
                <a>{{ item.title }}</a>
                <span class="news_meta"> > </span>
              </li>
            </div>
          </el-col>
        </el-row>
      </el-main>
      <schFooter></schFooter>
    </div>
</template>

<script>
  import schHeader from './schHeader.vue'
  import schFooter from './schFooter.vue'
  import axios from 'axios'
  import Vue from 'vue'
  Vue.prototype.axios = axios;
  import {mapState, mapGetters, mapActions} from 'vuex'
    export default {
      name: "schoolIndex",
      components: {
        schHeader,
        schFooter
      },
      /*computed: {
        ...mapState({   //这里的...是超引用，ES6的语法，意思是state里有多少属性值我可以在这里放多少属性值
          isShow: state => state.schMainStatus.showMainContent
          //isShow: 'isShow'
        })
      },*/
      methods: {
        ...mapActions('schNews', [
          'invokePushItems',
          'invokeMoreNews'
        ])
      },
      data(){
        return {
          screenWidth: document.body.clientWidth,
          articlesObj:[]
        }
      },
      mounted() {
        var _this = this;
        this.axios.get('/node/getNewsInfo').then(res => {
          _this.articlesObj = res.data.articlesObj
          //一开始这里的newsPointList的name无法被渲染出来，而imgMsgList可以
          //是因为newsPointList被我用JSON.stringify转化了导致数组里嵌套了对象，vue数据无法取出
        },err => {
          throw new Error(err)
        })
        /*this.$nextTick(() => {
          let el_col = this.$refs.designCol
          let el_colSize = el_col[0].getBoundingClientRect().width
          this.el_col.height = 0.6 * el_colSize + 'px'
        })
        window.onresize = () =>{
          return (() => {
            // window.screenWidth = document.body.clientWidth
            // _this.screenWidth = window.screenWidth
            this.$nextTick(() => {
              let el_col = this.$refs.designCol
              let el_colSize = el_col[0].getBoundingClientRect().width
              this.el_col.height = 0.6 * el_colSize + 'px'
            })
          })()
        }*/
      }
    }
</script>

<style scoped>
  .image{
    width:100%;
    height:100%;
    max-width: 100%;
    max-height: 100%;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .col_style{
    background: url("../assets/banbg.png") left no-repeat;
    color: #fff;
    font-weight: bolder;
    font-size: 14px;
    padding: 5px 0px 5px 25px;
    margin: 0px;
  }
  .newsmore{
    font-size: 12px;
    float: right;
    color: #1e824a;
  }
  .newsmore a:link,.newsmore a:visited,
  .newsmore a:hover,.newsmore a:active{
    text-decoration: none;
    color: #1e824a;
  }
  .designCol{
    width:350px;
    margin-left: 8px;
  }
  .lanmu{
    border:#1e824a  1px solid;
    height: 170px;
    padding: 10px;
    line-height: 22px;
    font-size: 14px;
  }
  .designLi{
    background: url("../assets/line.png") bottom repeat-x;
    padding: 3px 0px;
    list-style: none;
    margin: 0px;
  }
  .designLi a,.news_title{
    color: #333;
    text-decoration: none;
  }
  .news_title:hover,.designLi a:hover{
    color: #1e824a;
    cursor: pointer;
  }
  .designLi .news_meta{
    float: right;
  }
</style>
