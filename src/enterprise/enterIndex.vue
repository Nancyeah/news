<template>
  <div style="margin: 0 auto;">
    <enterHeader></enterHeader>
    <el-main>
      <div class="head_logo">
        <img src="../assets/zxlogo.png">
      </div>
      <div class=""></div>
      <div class="left_aside">
        <div class="aside_floor">
          <div class="fl_title">热门搜索</div>
          <div class="fl_info">
            <label><router-link to="/newsDetail"><span @click="invokePushLink('/china/about/corporate_information')">公司简介</span></router-link></label>
            <label><router-link to="/enterIndex">动态新闻</router-link></label>
            <label><a href="https://www.ztedevices.com/cn/">智能手机</a></label>
          </div>
        </div>
        <div class="aside_floor">
          <div class="fl_title">热门资讯</div>
          <div class="fl_info">
            <ul style="list-style: none;padding: 5px;">
              <li v-for="item in articlesObj.asideInfo">
                <label style="color: #008fd5;font-size: 15px;float: left;">●</label>
                <span>
                  <router-link to="/newsDetail">
                    <span @click="invokePushLink(item.href)">{{ item.text }}</span>
                  </router-link>
                </span>
              </li>
              <li class="end_more">
                <router-link to="/enterIndex">了解更多&nbsp;&nbsp;></router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="spanNav">
        <span v-for="(item,index) in spanList" @click="changeCon(item.url,index)"
              :class="{active: active === index}">
          {{ item.name }}
        </span>
      </div>
      <div class="main_con">
        <ul>
          <li v-for="item in articlesObj.newsInfo">
            <router-link to="/newsDetail">
              <span @click="invokePushLink(item.href)">
                <h3>{{ item.text }}</h3>
              <div class="font_css">
                <em>{{ item.time }}</em>
              </div>
              </span>
            </router-link>
          </li>
        </ul>
      </div>
      <!--div class="pagination">
        <router-link to="/" v-for="item in articlesObj.pageHref">
          <span>item.text</span>
        </router-link>
      </div-->
    </el-main>
    <enterFooter></enterFooter>
  </div>
</template>

<script>
  import enterHeader from './enterHeader.vue'
  import enterFooter from './enterFooter.vue'
  import axios from 'axios'
  import Vue from 'vue'
  Vue.prototype.axios = axios;
  import {mapState, mapGetters, mapActions} from 'vuex'
    export default {
      name: "enterIndex",
      components: {
        enterHeader,
        enterFooter
      },
      data(){
        return {
          articlesObj:[],
          spanList:[
            {
              name:'公司动态',
              url:'/china/about/press-center/news'
            },
            {
              name:'行业分析',
              url:'/china/about/press-center/industry-analysis'
            }
          ],
          active: 0
        }
      },
      methods: {
        changeCon(url,index){
          var _this = this;
          this.axios.post('/node/enterNewsInfo',{data:url}).then(res => {
            _this.articlesObj = res.data.articlesObj
          },err => {
            throw new Error(err)
          })
          this.active = index;
        },
        ...mapActions('enterNews', [
          'invokePushLink'
        ])
      },
      mounted(){
        var _this = this;
        this.axios.post('/node/enterNewsInfo',{data:'/china/about/press-center/news'}).then(res => {
          _this.articlesObj = res.data.articlesObj
        },err => {
          throw new Error(err)
        })
      }
    }
</script>

<style lang="scss" scoped>
  .head_logo{
    padding-left: 100px;
  }
  .main_con{
    overflow: hidden;
    padding-top: 15px;
    li{
      list-style: none;
      float: left;
      width: 30%;
      margin-right: 1.32%;
      margin-bottom: 2%;
      border-bottom: 5px solid #2e82c5;
      transition: all .3s;
      &:hover{
         transform: scale(1.06);
       }
      a{
        display: block;
        padding: 10px;
        border: 1px solid #eee;
        transition: all .3s;
        text-decoration: none;
        &:hover{
           border: 1px solid #2e82c5;
         }
        h3{
          color:#333;
          height:72px;
          font-weight: normal;
        }
      }
    }
  }
  .font_css{
    padding: 0 10px;
    text-align: right;
    em{
      font-style: normal;
      margin-right: 10px;
      color: #999;
    }
  }
  .spanNav{
    text-align: center;
    height: 16px;
    .active{
      margin: 10px;
      font-size: 14px;
      border-radius: 5px;
      padding: 7px 20px;
      color: #fff;
      background: url('http://www.baiyueinfo.com/temp/temp/52/52-0184/201811071019/images/jbbg.jpg') center center;
    }
    span{
      font-size: 14px;
      margin: 10px;
      padding: 7px 20px;
      cursor: pointer;
      &:hover{
         margin: 10px;
         font-size: 14px;
         border-radius: 5px;
         padding: 7px 20px;
         color: #fff;
         background: url('http://www.baiyueinfo.com/temp/temp/52/52-0184/201811071019/images/jbbg.jpg') center center;
       }
    }
  }
  .left_aside{
    float: left;
    width: 300px;
    margin: 32px 0px 0px 50px;
  }
  .aside_floor{
    .fl_title{
      color: #fff;
      background-color: #008fd5;
      text-indent: 18px;
      font-size: 150%;
      line-height: 1;
      padding: 9px 0;
      width: 100%!important;
      height: 41px;
      box-sizing: border-box;
    }
    .fl_info{
      padding: 20px 0 10px;
      a{
        text-decoration: none;
        color:#333;
        &:hover{
           color: #008fd4;
         }
      }
      label{
        font-size: 130%;
        display: inline-block;
        font-weight: bold;
        margin-right: 0.5em;
        cursor: pointer;
        &:last-child{
           font-size: 200%;
           font-weight: 100;
         }
      }
    }
  }
  .fl_info{
    li{
      overflow: hidden;
      padding: 20px 0 10px;
      &:first-child{
         padding: 0px;
       }
      span{
        float: left;
        width: 94%;
        a{
          text-decoration: none;
          color: #333333;
          &:hover{
             color: #0086b3;
           }
        }
      }
    }
  }
  .end_more{
    text-align: right;
    a{
      color: #0086b3;
      font-size: 10px;
      text-decoration: none;
      &:hover{
        color: #99a9bf;
       }
    }
  }
</style>
