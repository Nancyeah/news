<template>
  <div style="margin: 0 auto;">
    <schHeader></schHeader>
    <el-main>
      <div class="news_menu">
        <div class="menu">
          <h3>{{ articlesObj.title }}</h3>
        </div>
        <!--div style="border: 1px solid #e4e4e4;"></div-->
        <!--iframe allowtransparency='ture' frameborder='0' width='328px' height='320px'
                scrolling='no' src='http://web.scau.edu.cn/hnxb/newspaper3.aspx'></iframe-->
      </div>
      <div class="news_box">
        <div class="news_head">
          <ul class="news_head_con">
            <li class="col_title" style="border-bottom: 1px solid #DBDBDB;"><h2>{{ articlesObj.title }}</h2></li>
            <li class="col_path"><span>{{ articlesObj.info }}</span></li>
          </ul>
        </div>
        <div class="news_con">
          <li v-for="item in articlesObj.list">
            <router-link to="/schNewsDetail">
              <span class="news_title" @click="invokePushItems(item.href)">{{ item.name }}</span>
            </router-link>
            <span class="news_meta">{{ item.time }}</span>
          </li>
        </div>
      </div>
      <div class="page_num">
        <li>{{ articlesObj.pages_count }}</li>
        <li v-for="item in articlesObj.page_nav">
          <router-link to="/schNewsMore">
            <span @click="invokePageNews(item.href),jumpPage()">{{ item.spanCon }} </span>
          </router-link>
        </li>
        <li>
          <span>{{ articlesObj.page_jump }} </span>
        </li>
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
    name: "schNewsMore",
    components: {
      schHeader,
      schFooter
    },
    data(){
      return {
        articlesObj: []
      }
    },
    computed: {
      ...mapState({
        moreNews: state => state.schNews.moreNews,
        pageNews: state => state.schNews.pageNews
      }),
      ...mapGetters('schNews', { //用mapGetters来获取schMainStatus.js里面的getters
        moreNews: 'getMoreNews',
        pageNews: 'getPageNews'
      })
    },
    methods: {
      ...mapActions('schNews', [
        'invokePushItems',
        'invokePageNews'
      ]),
      jumpPage() {
        var _this = this
        this.axios.post('/node/getMoreNews', {data:this.pageNews}).then(res => {
          _this.articlesObj = res.data.articlesObj
        })
      }
    },
    mounted() {
      var _this = this
      this.axios.post('/node/getMoreNews', {data:this.moreNews}).then(res => {
        _this.articlesObj = res.data.articlesObj
        //console.log(Object.getOwnPropertyNames(_this.articlesObj))
      })
    }
  }
</script>

<style scoped lang="scss">
  .news_menu{
    float: left;
    width: 260px;
  }
  .menu{
    background-color: #1e824a;
    color: #fff;
    line-height: 50px;
    padding: 0px 5px 0px 30px;
    margin-left: 22px;
    h3{
      font-weight: normal;
    }
  }

  .news_box{
    margin-left: 270px;
    margin-right: 20px;
  }
  .news_head_con li{
    list-style: none;
  }

  .col_title{
    float: left;
    height: 48px;
    line-height: 48px;
    h2{
      color: #1e824a;
      border-bottom: 3px solid #CBCBCB;
      font-weight: normal;
      margin: 0px;
    }
  }

  .col_path{
    float: right;
    white-space: nowrap;
    height: 46px;
    line-height: 46px;
    color: #666;
  }

  .news_con{
    padding: 55px 0px 10px 32px;
    margin: 0 7px;
    li{
      list-style: none;
      margin: 6px 0px;
      a{
        color: #333333;
        text-decoration: none;
        line-height: 24px;
        &:hover{
           color: #1e824a;
         }
      }
    }
  }
  .news_meta{
    color: #9c9c9c;
    float: right;
  }
  .page_num{
    list-style: none;
    float: right;
    margin-right: 10px;
    li{
      display: inline;
      font-size: 13px;
      color: #494949;
      &:first-child,&:last-child span:first-child{
        font-weight: bolder;
      }
      a{
        text-decoration: none;
        color: #666;
        cursor: pointer;
        &:hover{
          color: #333;
         }
      }
    }
  }
</style>
