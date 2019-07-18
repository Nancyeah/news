<template>
  <div style="margin: 0 auto;">
    <enterHeader></enterHeader>
    <el-main>
      <div class="head_logo">
        <img src="../assets/zxlogo.png">
      </div>
      <div class="left_aside">
        <div class="aside_floor">
          <div class="fl_title">热门搜索</div>
          <div class="fl_info">
            <label><a>公司简介</a></label>
            <label><a>动态新闻</a></label>
            <label><a>智能手机</a></label>
          </div>
        </div>
        <div class="aside_floor">
          <div class="fl_title">热门资讯</div>
          <div class="fl_info">
            <ul style="list-style: none;padding: 5px;">
              <li v-for="item in articlesObj.asideInfo">
                <label style="color: #008fd5;font-size: 15px;float: left;">●</label>
                <span>
                  <a :href="item.href">{{ item.text }}</a>
                </span>
              </li>
              <li class="end_more">
                <a href="#">了解更多&nbsp;&nbsp;></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="content">
        <p class="title">{{ articlesObj.title }}</p>
        <p class="info" v-for="item in articlesObj.newsDetail">
          <img :src="item.src">
          {{ item.info }}
        </p>
      </div>
      <div class="content">
        <p class="title">{{ companyInfo.title }}</p>
        <p class="name">{{ companyInfo.name }}</p>
        <p class="info">{{ companyInfo.info }}</p>
        <p class="info" v-for="item in companyInfo">
          <img :src="item.src">
          {{ item.hideInfo }}
        </p>
      </div>
    </el-main>
    <enterFooter></enterFooter>
  </div>
</template>

<script>
  import enterHeader from './enterHeader.vue'
  import enterFooter from './enterFooter.vue'
  import {mapState, mapGetters, mapActions} from 'vuex'
    export default {
      name: "newsDetail",
      data(){
        return {
          articlesObj: [],
          companyInfo: {}
        }
      },
      components: {
        enterHeader,
        enterFooter
      },
      computed: {
        /*...mapState({
          imgHref: state => state.schNews.imgHref
        }),*/
        ...mapGetters('enterNews', { //用mapGetters来获取schMainStatus.js里面的getters
          detailLink: 'getDetailLink'
        })
      },
      mounted() {
        var _this = this;
        this.axios.post('/node/enterNewsDetail', {data:this.detailLink}).then(res => {
          _this.articlesObj = res.data.articlesObj
          _this.companyInfo = res.data.articlesObj.companyInfo
        })
      }
    }
</script>

<style lang="scss" scoped>
  .head_logo{
    padding-left: 100px;
  }
  .left_aside{
    float: left;
    width: 300px;
    margin: 32px 32px 0px 50px;
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
    overflow: hidden;
    a{
      color: #0086b3;
      font-size: 10px;
      text-decoration: none;
      &:hover{
         color: #99a9bf;
       }
    }
  }
  .content{
    float: right;
    padding-right:2%;
    width: 68%;
    margin-top: 2.5%;
    .title{
      text-align: center;
      color: #000;
      font-size: 180%;
      padding-bottom: 20px;
    }
    .info{
      font-size: 15px;
      color: #333;
      margin-bottom: 20px;
      img{
        max-width: 100%;
        height: auto;
      }
    }
  }
</style>
