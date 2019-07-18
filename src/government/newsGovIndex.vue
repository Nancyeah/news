<template>
  <div class="gov">
    <govHeader></govHeader>
    <div class="main_Con">
      <el-main class="centerMain">
        <div class="nav_title">
          <a href="http://www.gov.cn/index.htm">首页</a>
          <span> ></span>
          <span>新闻</span>
        </div>
        <div class="head_title">
          <router-link to="/govNewsDetail" v-for="item in articlesObj.newsTitle">
            <span @click="invokePushHref(item.href)">{{ item.title }}  </span>
          </router-link>
        </div>
        <div class="content">
          <el-carousel trigger="click">
            <el-carousel-item v-for="item in articlesObj.slideInfo">
              <router-link to="/govNewsDetail">
                <div @click="invokePushHref(item.href)">
                  <img :src="item.imgSrc">
                  <div class="rigTxt">
                    <p class="title">{{ item.title }}</p>
                    <p class="summary">{{ item.text }}</p>
                  </div>
                </div>
              </router-link>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="newsCol">
          <div class="left_part">
            <div class="titleName">
              <span>要闻</span>
              <router-link to="/govMoreNews" class="minFont">
                <span @click="invokePassLink('http://www.gov.cn/xinwen/gundong.htm')">滚动</span>
              </router-link>
            </div>
            <div class="content">
              <ul>
                <li v-for="item in articlesObj.newsInfo">
                  <h4>
                    <router-link to="/govNewsDetail">
                      <span @click="invokePushHref(item.href)">{{ item.title }}</span>
                      <span class="date">{{ item.time }}</span>
                    </router-link>
                  </h4>
                  <p>{{ item.text }}</p>
                </li>
              </ul>
            </div>
            <div class="titleName">
              <span>政府联播</span>
              <router-link to="/govMoreNews" class="minFont">
                <span @click="invokePassLink('http://www.gov.cn/xinwen/lianbo/bumen.htm')">部门</span>
              </router-link>
              <span class="minFont">|</span>
              <router-link to="/govMoreNews" class="minFont">
                <span @click="invokePassLink('http://www.gov.cn/xinwen/lianbo/difang.htm')">地方</span>
              </router-link>
            </div>
            <div class="leftCon">
              <ul style="padding: 15px 0;">
                <li v-for="item in articlesObj.newsInfoList1" style="padding: 0px;line-height: 35px;">
                  <h4>
                    <span class="place">{{ item.title }}</span>
                    <router-link to="/govNewsDetail">
                      <span @click="invokePushHref(item.href)">{{ item.text }}</span>
                    </router-link>
                    <span class="date">{{ item.time }}</span>
                  </h4>
                </li>
              </ul>
            </div>
            <div class="titleName">
              <span>新闻发布</span>
              <router-link to="/govMoreNews" class="minFont">
                <span @click="invokePassLink('http://www.gov.cn/xinwen/fabu/zccfh/index.htm')">国务院政策吹风会</span>
              </router-link>
              <span class="minFont">|</span>
              <router-link to="/govMoreNews" class="minFont">
                <span @click="invokePassLink('http://www.gov.cn/xinwen/fabu/bumen.htm')">部门</span>
              </router-link>
              <span class="minFont">|</span>
              <router-link to="/govMoreNews" class="minFont">
                <span @click="invokePassLink('http://www.gov.cn/xinwen/fabu/qita.htm')">
                  其他
                </span>
              </router-link>
            </div>
            <div class="leftCon">
              <ul style="padding: 15px 0;">
                <li v-for="item in articlesObj.newsInfoList2" style="padding: 0px;line-height: 35px;">
                  <h4>
                    <router-link to="/govNewsDetail">
                      <span @click="invokePushHref(item.href)">
                        {{ item.title }}
                      </span>
                      <span class="date">{{ item.time }}</span>
                    </router-link>
                  </h4>
                </li>
              </ul>
            </div>
            <div class="titleName">
              <span>人事信息</span>
              <router-link to="/govMoreNews" class="minFont">
                <span @click="invokePassLink('http://www.gov.cn/xinwen/renmian/zhongyang.htm')">中央</span>
              </router-link>
              <span class="minFont">|</span>
              <router-link to="/govMoreNews" class="minFont">
                <span @click="invokePassLink('http://www.gov.cn/xinwen/renmian/difang.htm')">地方</span>
              </router-link>
              <span class="minFont">|</span>
              <router-link to="/govMoreNews" class="minFont">
                <span @click="invokePassLink('http://www.gov.cn/xinwen/renmian/zhuwai.htm')">驻外</span>
              </router-link>
              <span class="minFont">|</span>
              <router-link to="/govMoreNews" class="minFont">
                <span @click="invokePassLink('http://www.gov.cn/xinwen/renmian/qita.htm')">其他</span>
              </router-link>
            </div>
            <div class="leftCon">
              <ul style="padding: 15px 0;">
                <li v-for="item in articlesObj.newsInfoList3" style="padding: 0px;line-height: 35px;">
                  <h4>
                    <router-link to="/govNewsDetail">
                      <span @click="invokePushHref(item.href)">{{ item.title }}</span>
                      <span class="date">{{ item.time }}</span>
                    </router-link>
                  </h4>
                </li>
              </ul>
            </div>
          </div>
          <div class="right_part">
            <div class="titleName">
              <a href="http://www.gov.cn/xinwen/zhuanti/index.htm" style="color: #000;">专题</a>
            </div>
            <div class="rigCon">
              <a href="http://www.gov.cn/zhuanti/201903lkqzlkc/index.htm">
                <img src="http://www.gov.cn/govweb/c1295/201903/5375933/images/402db6e339d04990af35dde72a7ddd6b.jpg"
                style="margin-top: 20px;">
              </a>
              <ul style="margin-top: 10px;margin-bottom: 25px;padding: 0px;">
                <li>
                  <a href="http://www.gov.cn/zhuanti/2019qglh/2019lhzfgzbg/index.htm">李克强总理作政府工作报告</a>
                  <span>|</span>
                  <a href="http://www.gov.cn/zhuanti/2019lhzlhjzwjz/index.htm">会见中外记者</a>
                </li>
                <li>
                  <a href="http://www.gov.cn/zhengce/zhuti/jjhlw_zwfw/index.htm">聚焦“互联网+政府工作”</a>
                  <span>|</span>
                  <a href="http://www.gov.cn/zhuanti/zwgkgzjl/index.htm">政务公开交流</a>
                </li>
              </ul>
            </div>
            <div class="titleName">
              <a>视</a>
              <a>听</a>
              <a>画</a>
            </div>
            <div class="rigCon">
              <div class="imgBox">
                <a href="http://politics.cntv.cn/special/gwyvideo/likeqiang/2019/2019032901/index.shtml">
                  <img src="http://www.gov.cn/govweb/c1296/201903/5378196/images/70e00b0cea744e329668e626a100c61c.jpg">
                  <span>李克强同出席博鳌亚洲论坛年会各界代表对话</span>
                </a>
              </div>
              <div class="imgBox">
                <a href="http://www.gov.cn/premier/2019-03/29/content_5378000.htm">
                  <img src="http://www.gov.cn/govweb/c1297/201903/5378041/images/d62111adb0304df8b845bfb2a4f314cb.jpg" height="223">
                  <span>李克强在博鳌论坛年会开幕式上发表主旨演讲</span>
                </a>
              </div>
              <div class="imgBox">
                <a href="http://www.gov.cn/xinwen/2019-03/28/content_5377884.htm">
                  <img src="http://www.gov.cn/govweb/c1300q/201903/5377889/images/d6a50a22780a47118f2abe281ff58f7d.jpg">
                 <span>李克强出席博鳌论坛开幕式并发表主旨演讲</span>
                </a>
              </div>
            </div>
            <div class="titleName">
              <a>经典瞬间</a>
              <span>|</span>
              <a>秒懂国务院</a>
            </div>
            <div class="rigCon">
              <div class="change">
                <img src="http://www.gov.cn/govweb/c1299r/201903/5378252/images/b6579b475d354a198c7aadcb9c53a6d1.jpg">
                <p class="mask">
                  <a>
                    李克强：简化审批流程 释放市场活力（2015-01-05）
                  </a>
                </p>
              </div>
              <div class="change">
                <img src="http://www.gov.cn/govweb/c6121/201903/5370144/images/ef1fa6310ab148ba9f70e51864fc748e.jpg">
                <p class="mask">
                  <a>
                    秒懂国务院 | 去烦苛 ! 只为企业活力、群众便利
                  </a>
                </p>
              </div>
            </div>
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
  import {mapGetters, mapActions, mapState} from 'vuex'
    export default {
      name: "newsGovIndex",
      components:{
        govHeader: govHeader,
        govFooter: govFooter
      },
      data(){
        return {
          articlesObj:[],
          bannerHeight:''
        }
      },
      mounted(){
        var _this = this;
        this.axios.post('/node/govNewsInfo',{data:'http://www.gov.cn/xinwen/index.htm'}).then(res => {
          _this.articlesObj = res.data.articlesObj
        },err => {
          throw new Error(err)
        })
      },
      methods: {
        ...mapActions('govNews', [
          'invokePushHref',
          'invokePassLink'
        ])
      },
    }
</script>

<style lang="scss" scoped>
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
    color: #000;
    margin-bottom: 15px;
    font-size: 12px;
    font-family: "宋体";
    a{
      color: #000;
      font-weight: bolder;
      text-decoration: none;
      margin-right: 5px;
    }
    span{
      margin-right: 5px;
    }
  }
  .head_title{
    text-align: center;
    height: auto;
    padding-bottom: 30px;
    a{
      color: #005293;
      text-decoration: none;
      font-size: 18px;
      &:hover{
        color: #0086b3;
       }
      &:first-child{
        font-family: '宋体';
        font-weight: bolder;
        font-size: 39px;
        display: block;
        padding-bottom: 10px;
       }
    }
  }
   .content{
    margin-bottom: 19px;
     a{
       width: 100%;
       text-decoration: none;
       color: #000;
       float: left;
       margin: 0 auto;
        img{
          /*max-height: 500px;
           max-width: 350px;*/
          float: left;
        }
        .rigTxt{
          padding: 30px 15px;
          width: 239px;
          float: right;
          overflow:hidden;
          background: url('../assets/slidegb.jpg');
        .title{
          border-bottom: #4e4e58 1px solid;
          color: #fff;
          font-size: 24px;
          padding-bottom: 10px;
        }
        .summary {
          font-size: 16px;
          color: #999;
          line-height: 20px;
          height: 160px;
          margin: 20px auto;
          overflow: hidden;
        }
      }
    }
  }
  .newsCol{
    margin: 0 2%;
    .left_part{
      width: 62%;
      padding-right: 30px;
      border-right: 1px #bababa solid;
      float: left;
      ul{
        list-style: none;
        padding: 0px;
        li{
          padding: 15px 0;
          h4{
            line-height: 34px;
            font-weight: normal;
            overflow: hidden;
            a{
              text-decoration: none;
              font-size: 17px;
              color: #333;
              font-family: "微软雅黑";
              &:hover{
                color: #025291;
               }
            }
            span.place{
              font-family: 微软雅黑;
              padding-left: 0;
              color: #888888;
              font-size: 17px;
            }
            span.date{
              color: #888888;
              font-weight: normal;
              font-size: 14px;
              float: right;
              font-family: '宋体';
            }
          }
          p{
            margin: 0;
            padding: 0;
            line-height: 22px;
            font-size: 12px;
            color: #666;
            font-family: "宋体";
          }
        }
      }
    }
    .right_part{
      width: 32%;
      float: right;
    }
    .minFont{
      font-size: 14px;
      color: #888;
      font-weight: normal;
      font-family: "微软雅黑";
    }
    .titleName{
      color: #000;
      font-family: "宋体";
      font-size: 22px;
      border-bottom: 1px solid #bababa;
      font-weight: bolder;
      a{
        text-decoration: none;
        &:hover{
          color: #025291;
         }
      }
    }
    .rigCon{
      img{
        width: 100%;
      }
      .change, .imgBox{
        &:first-child{
          img{
            margin-top: 20px;
          }
        }
      }
      li{
        font-size: 16px;
        line-height: 35px;
        padding-left: 10px;
        font-family: "微软雅黑";
        color: #000;
        list-style: none;
        a{
          color: #333;
          text-decoration: none;
          &:hover{
            color: #005293;
          }
        }
      }
      .title{
        font-size: 17px;
        height: 30px;
        font-family: "微软雅黑";
        padding-top: 10px;
        padding-bottom: 4px;
        color: #999;
      }
    }
    .change{
      position: relative;
      a:hover{
        text-decoration: underline;
        cursor: pointer;
      }
      .mask{
        text-align: center;
        position: absolute;
        bottom: 0;
        left: 0;
        background: #000;
        opacity: 0.7;
        width: 100%;
        height: 25px;
        line-height: 25px;
        font-size: 14px;
        font-family: "微软雅黑";
        color: #fff;
        overflow: hidden;
      }
    }
    .imgBox{
      text-align: center;
      a{
        text-decoration: none;
        span{
          color: #888;
          font-family: "微软雅黑";
          font-size: 16px;
          &:hover{
            color: #025291;
          }
        }
      }
      margin-bottom: 20px;
    }
  }
</style>
