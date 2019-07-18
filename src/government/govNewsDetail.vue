<template>
    <div class="gov">
      <govHeader></govHeader>
      <div class="main_Con">
        <el-main class="centerMain">
          <el-breadcrumb separator-class="el-icon-arrow-right" class="nav_title">
            <el-breadcrumb-item :to="{ path: '/newsGovIndex' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>新闻</el-breadcrumb-item>
          </el-breadcrumb>
          <div class="article">
            <h1>{{ articleInfo.title }}</h1>
            <div class="subInfo">
              {{ articleInfo.time }}
            </div>
            <div class="article_Con">
              <p v-for="item in articlesObj.articleCon">
                {{ item.text }}
                <!--img :src="item.imgSrc"-->
              </p>
            </div>
            <div class="editor">
              {{ articleInfo.editor }}
            </div>
            <div class="related_part">
              <span>相关稿件</span>
              <ul>
                <li v-for="item in articlesObj.relatedText">
                  <router-link to="/govNewsDetail">
                    <span @click="invokePushHref(item.href),passHref()">
                      {{ item.text }}
                    </span>
                  </router-link>
                </li>
              </ul>
            </div>
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
      name: "govNewsDetail",
      data(){
        return{
          articlesObj: [],
          articleInfo: []
        }
      },
      components: {
        govHeader:govHeader,
        govFooter:govFooter
      },
      computed: {
        ...mapState({
          detailHref: state => state.govNews.detailHref
        }),
        ...mapGetters('govNews', { //用mapGetters来获取govNews.js里面的getters
          detailHref: 'getDetailHref'
        })
      },
      mounted(){
        var _this = this;
        this.axios.post("/node/govNewsDetail",{data: this.detailHref}).then(res => {
          _this.articlesObj = res.data.articlesObj
          _this.articleInfo = res.data.articlesObj.articleInfo
          console.log(_this.articlesObj)
        })
      },
      methods:{
        ...mapActions('govNews', [
          'invokePushHref'
        ]),
        passHref(){
          var _this = this;
          this.axios.post("/node/govNewsDetail",{data: this.detailHref}).then(res => {
            _this.articlesObj = res.data.articlesObj
            _this.articleInfo = res.data.articlesObj.articleInfo
          })
        }
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
  }
  .nav_title{
    font-size: 12px;
    font-family: "宋体";
    margin-bottom: 15px;
  }
  .article{
    border: 1px #dddddd solid;
    padding: 10px 66px 38px 66px;
    h1{
      line-height: 56px;
      font-family: "微软雅黑";
      font-size: 38px;
      text-align: center;
      padding: 26px 0 26px 0;
      font-weight: normal;
    }
    .subInfo{
      position: relative;
      border-bottom: 1px #dcdcdc solid;
      padding-top: 7px;
      text-align: center;
      color: #666666;
      font-size: 14px;
      height: 35px;
      overflow: hidden;
      font-family: '宋体';
    }
    .article_Con{
      line-height: 30px;
      margin: 0;
      padding: 40px 0 40px 0;
      font-size: 16px;
      p{
        font-size: 12pt;
        text-indent: 2em;
        font-family: 宋体;
      }
    }
    .editor{
      font-family: 宋体;
      text-align: right;
      color: #888888;
      font-size: 14px;
    }
  }
  .related_part{
    border-bottom: 1px #dddddd solid;
    border-top: 1px #dddddd solid;
    margin: 43px 0px 0px 0px;
    padding: 15px 0px;
    span{
      margin: 0;
      color: #00558e;
      line-height: 33px;
      font-size: 18px;
      font-family: "微软雅黑";
    }
    ul{
      li{
        a{
          text-decoration: none;
          &:hover{
             text-decoration: underline;
           }
          span{
            margin: 0;
            padding: 3px 0 3px 12px;
            line-height: 26px;
            font-size: 16px;
            font-family: "宋体";
          }
        }
      }
    }
  }
</style>
