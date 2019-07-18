<template>
    <div class="gov">
      <govHeader></govHeader>
      <div class="main_Con">
        <el-main class="centerMain">
          <el-breadcrumb separator-class="el-icon-arrow-right" class="nav_title">
            <el-breadcrumb-item :to="{ path: '/newsGovIndex' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item v-for="item in moreNewsTitle.nav">{{ item }}</el-breadcrumb-item>
            <el-breadcrumb-item>{{ moreNewsTitle.title }}</el-breadcrumb-item>
          </el-breadcrumb>
          <div class="titleCon">
            <span>{{ moreNewsTitle.title }}</span>
          </div>
          <div class="news_box">
            <ul>
              <li v-for="item in moreNews">
                <router-link to="/govNewsDetail">
                  <span @click="invokePushHref(item.href)">{{ item.text }}</span>
                </router-link>
                <span class="date">{{ item.time }}</span>
              </li>
            </ul>
          </div>
        </el-main>
      </div>
      <govFooter></govFooter>
    </div>
</template>

<script>
  import govHeader from './govHeader'
  import govFooter from './govFooter'
  import {mapState, mapGetters, mapActions} from 'vuex'
    export default {
      name: "govMoreNews",
      components: {
        govHeader:govHeader,
        govFooter:govFooter
      },
      data(){
        return {
          moreNews:[],
          moreNewsTitle:[]
        }
      },
      computed:{
        ...mapGetters('govNews', {
          moreNewsHref: 'getPassLink'
        })
      },
      methods: {
        ...mapActions('govNews', [
          'invokePushHref'
        ])
      },
      mounted(){
        var _this = this;
        this.axios.post('/node/govNewsDetail',{data: this.moreNewsHref}).then(res => {
          _this.moreNews = res.data.articlesObj.moreNews;
          _this.moreNewsTitle = res.data.articlesObj.moreNewsTitle
          console.log(_this.moreNewsTitle.nav)
        },err => {
          return new Error(err)
        })
      }
    }
</script>

<style scoped lang="scss">
  .gov{
    width: 100%;
  }
  .main_Con{
    background-color: #eee;
  }
  .centerMain{
    width: 81.5%;
    margin: 0 auto;
    background-color: #fff;
    .titleCon{
      background: #dcdcdd;
      line-height: 40px;
      margin-bottom: 15px;
      span{
        padding: 0 15px;
        font-family: "微软雅黑";
        font-size: 22px;
      }
    }
    .news_box{
      margin: 0 auto;
      border: 1px solid #dddddd;
      padding: 0 22px;
      ul{
        padding-top: 15px;
        padding-bottom: 15px;
        li{
          line-height: 36px;
          padding-left: 12px;
          a{
            text-decoration: none;
            color: #333;
            &:hover{
               text-decoration: underline;
               color: #024886;
             }
          }
          span.date{
            padding-left: 14px;
            font-size: 12px;
            font-family: 宋体;
            color: #888888;
          }
        }
      }
    }
  }
  .nav_title{
    font-size: 12px;
    font-family: "宋体";
    margin-bottom: 15px;
  }
</style>
