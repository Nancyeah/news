<template>
    <el-header class="head" style="height: 40px;">
      <div class="topCss">
        <ul>
          <li><router-link to="/enterIndex">首页</router-link></li>
          <li><a href="http://enterprise.zte.com.cn/cn/">企业网</a></li>
          <li><a href="http://www.ztedevice.com.cn/">手机及智能产品</a></li>
          <li><a href="https://www.myzte.com/">中兴商场</a></li>
        </ul>
      </div>
      <div class="socialLogo">
        <span>
          <a href="http://weibo.com/ztecorporation">
            <em style="background: url('https://res-www.zte.com.cn/mediares/common/social_login_01.png?h=30&w=31') no-repeat scroll;"></em>
          </a>
          <a class="weixin">
            <em style="background:url('https://res-www.zte.com.cn/mediares/common/social_login_02.png?h=30&amp;w=31') no-repeat scroll;"></em>
            <img src="https://res-www.zte.com.cn/mediares/zte/Global/logo/qr_weixin.jpg?h=200&amp;la=zh-CN&amp;w=200"
                 alt="" width="120" height="120">
          </a>
          <a href="https://www.linkedin.com/company/zte">
            <em style="background:url('https://res-www.zte.com.cn/mediares/common/social_login_03.png?h=30&amp;w=31') no-repeat scroll"></em>
          </a>
        </span>
      </div>
    </el-header>
</template>

<script>
    export default {
        name: "enterHeader"
    }
</script>

<style lang="scss">
  .head{
    border-bottom: 1px #cccccc solid;
    width: 100%;
    max-width: 1280px;
    margin: auto;
  }
  .topCss{
    position: absolute;
    left: 28%;
    ul li{
      list-style: none;
      float: left;
      &:first-child{
         background-color: #008fd5;
         a{
           color: #fff;
         }
       }
      a{
        font-size: 14px;
        color: #000;
        display: inline-block;
        height: 40px;
        line-height: 40px;
        padding: 0 10px;
        text-decoration: none;
        &:hover{
          background-color: #008fd5;
          color: #fff;
         }
      }
    }
  }
  .socialLogo{
    float: right;
    margin-right: 12px;
    margin-top: 5px;
    span{
      a em{
        display: inline-block;
        height: 30px;
        width: 31px;
        margin-right: 12px;
      }
    }
  }
  .weixin{
    img{
      position: absolute;
      top: 40px;
      right: 6%;
      display: none;
    }
    &:hover{
        img{
          position: absolute;
          top: 40px;
          right: 6%;
          display: block;
        }
     }
  }
</style>
