<template>
    <el-footer>
      <div class="foot_nav">
        <ul>
          <li>
            <label class="title">
              按访问者
            </label>
            <label class="info">
              <a href="#">企业用户</a>
            </label>
            <label class="info">
              <a href="#">手机用户</a>
            </label>
            <label class="info">
              <a href="#">供应商</a>
            </label>
          </li>
          <li>
            <label class="title">
              新闻资讯
            </label>
            <label class="info">
              <a href="#">新闻动态</a>
            </label>
            <label class="info">
              <a href="#">媒体转载</a>
            </label>
            <label class="info">
              <a href="#">行业分析</a>
            </label>
            <label class="info">
              <a href="#">精彩视频</a>
            </label>
          </li>
          <li>
            <label class="title">
              投资者关系
            </label>
            <label class="info">
              <a href="#">公告</a>
            </label>
            <label class="info">
              <a href="#">定期报告</a>
            </label>
            <label class="info">
              <a href="#">通函</a>
            </label>
            <label class="info">
              <a href="#">股东大会通知</a>
            </label>
            <label class="info">
              <a href="#">月报表</a>
            </label>
          </li>
          <li>
            <label class="title">
              快速链接
            </label>
            <label class="info">
              <a href="#">人才招聘</a>
            </label>
            <label class="info">
              <a href="#">中兴社区</a>
            </label>
            <label class="info">
              <a href="#">中兴手机商城</a>
            </label>
            <label class="info">
              <a href="#">开除及除名查询</a>
            </label>
            <label class="info">
              <a href="#">ECCN查询</a>
            </label>
          </li>
          <li class="foot_area oh" style="width: 42%;padding: 0 0 0 5%;">
            <label class="title">
              <a href="#" style="color: #008FD4;font-size: 18px;">全球销售网点</a>
            </label>
            <img src="https://res-www.zte.com.cn/mediares/common/img_footer_area.png?h=265&amp;la=zh-CN&amp;w=541" alt="" width="541" height="265">
            <a href="#" class="area_zhou">北美洲</a>
            <a href="#" class="area_zhou">拉丁美洲</a>
            <a href="#" class="area_zhou">欧洲</a>
            <a href="#" class="area_zhou">中东非洲</a>
            <a href="#" class="area_zhou">独联体</a>
            <a href="#" class="area_zhou">中国</a>
            <a href="#" class="area_zhou">亚太</a>
          </li>
        </ul>
      </div>
      <ul class="foot_nav_lst">
        <li v-for="item in articlesObj.footHref">
          <a :href="item.href">
            {{ item.text }}
          </a>
        </li>
        <li>
          <router-link to="/login" style="color: #008FD4">管理登录</router-link>
        </li>
        <li>
          <router-link to="/newsGovIndex" style="color: #008FD4">进入政府新闻网</router-link>
        </li>
      </ul>
    </el-footer>
</template>

<script>
    export default {
      name: "enterFooter",
      data(){
        return {
          articlesObj:[]
        }
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

<style scoped lang="scss">
  .foot_nav{
    overflow: hidden;
    position: relative;
    border-top: 1px solid #ccc;
    padding: 30px 0px;
    max-width: 1280px;
    margin: auto;
    li{
      list-style:none;
      float: left;
      width: 10%;
      padding-left: 3%;
      .title{
        color: #008FD4;
        font-size: 18px;
      }
      label{
        display: block;
        height: 37px;
        a{
          text-decoration: none;
          color: #666;
          font-size: 16px;
          &:hover{
            color:#008FD4;
           }
        }
      }
    }
  }
  .area_zhou{
    position: absolute;
    left: 16%;
    top: 42%;
    font-size: 14px;
    padding-left: 12px;
    color: #333;
    font-weight: bold;
    text-decoration: none;
    &:hover {
       text-decoration: underline;
     }
     img{
       width: 100%;
     }
  }
  .oh{
    position: relative;
    overflow: hidden;
  }
  .area_zhou+.area_zhou{
    left: 28%;
    top: 73%;
  }
  .area_zhou+.area_zhou+.area_zhou{
    left: 50%;
    top: 41.5%;
  }
  .area_zhou+.area_zhou+.area_zhou+.area_zhou{
    left: 47%;
    top:62%;
  }
  .area_zhou+.area_zhou+.area_zhou+.area_zhou+.area_zhou{
    left: 69.5%;
    top:34%;
  }
  .area_zhou+.area_zhou+.area_zhou+.area_zhou+.area_zhou+.area_zhou {
    left: 72%;
    top:53%;
  }
  .area_zhou+.area_zhou+.area_zhou+.area_zhou+.area_zhou+.area_zhou+.area_zhou{
    left: 78%;
    top:78%;
  }
  .foot_nav_lst{
    list-style: none;
    overflow: hidden;
    position: relative;
    padding: 19px 0 2% 15%;
    border-top: 1px solid #ccc;
    max-width: 1280px;
    margin: auto;
    li{
      float: left;
      margin: 0 2% 0 0;
      font-size: 10px;
      &:last-child{
       a{
        &:hover{
           text-decoration: underline;
         }
       }
      }
      a{
        text-decoration: none;
        color: #666;
      }
    }

  }
</style>
