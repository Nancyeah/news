<template>
  <div class="footer_container">
    <div class="govFooter">
      <div class="first_part">
        <div class="fir_content">
          <ul v-for="item in articlesObj.footerCon1">
            <li class="title">
              {{ item.title }}
            </li>
            <li class="info" v-for="item in item.info">
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
      <div class="second_part">
        <ul>
          <li>链接：</li>
          <li v-for="item in articlesObj.footerCon2">
            <a :href="item.href">{{ item.info }}</a>
            |
          </li>
        </ul>
      </div>
      <div class="last_part">
        <img src="../assets/foot_logo.png">
        <div class="aside" v-for="item in articlesObj.footerCon3">
          <span v-for="itemI in item.info">
            {{ itemI }}
          </span>
          <p v-for="item in item.pInfo">
            {{ item }}
          </p>
        </div>
        <div class="img_part" v-for="item in articlesObj.footerCon3">
          <div v-for="item in item.imgSrc">
            <img :src="item">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "govFooter",
      data(){
        return {
          articlesObj:[]
        }
      },
      mounted(){
        var _this = this;
        this.axios.post('/node/govNewsInfo',{data:'http://www.gov.cn/2016public/bottom.htm'}).then(res => {
          _this.articlesObj = res.data.articlesObj
        },err => {
          throw new Error(err)
        })
      }
    }
</script>

<style scoped lang="scss">
  .footer_container{
    background-color: #eee;
  }
  .govFooter{
    width: 77.5%;
    margin: 0 auto;
    background-color: #fff;
    border-top: 8px solid #00558F;
    padding: 0 2%;
  }
  .first_part{
    border-bottom: 1px solid #bababa;
    padding: 0px 0px 10px 16px;
    ul{
      list-style: none;
      color: #333;
      margin: 0px 40px 0px 20px;
      padding: 0px;
      float: left;
      display: inline;
      li{
        margin: 0px 0px 5px 0px;
      }
      .title{
        font-size: 14px;
        font-weight: bold;
      }
      .info{
        font-size: 12px;
      }
    }
  }
  .fir_content{
    margin: 18px 0px 0px 0px;
    padding: 0px;
    overflow: hidden;
    height: 171px;
  }
  .second_part{
    overflow: hidden;
    border-bottom: 1px solid #bababa;
    padding: 5px 0px 5px 16px;
    ul{
      list-style: none;
      display: inline;
      margin: 15px 40px 15px 20px;
      padding: 0px;
      float: left;
      font-size: 14px;
      li{
        float: left;
        a{
          color: #000;
          text-decoration: none;
          padding: 0px 15px 0px 20px;
          &:hover{
             color: #005293
           }
        }
      }
    }
  }
  .last_part{
    padding: 2%;
    overflow: hidden;
    img{
      float: left;
    }
    .aside{
      float: left;
      padding-top: 5px;
      font-size: 12px;
      span{
        padding-right: 20px;
      }
      p{
        margin-top: 10px;
      }
    }
    .img_part{
      overflow: hidden;
      float: right;
      div{
        margin: 0 0 0 20px;
        float: left;
      }
    }
  }
</style>
