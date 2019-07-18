<template>
  <div>
    <Header></Header>
    <el-main>
      <h2 class="title">说明</h2>
      <div class="mainContainer">
        <p>新闻发布后台管理系统</p>
        <br/>
        <p>用户即为普通管理员，可以管理新闻发布模块，其他模块无权访问。</p>
        <br/>
        <p>超级管理员可以管理用户信息等。</p>
      </div>
    </el-main>
  </div>
</template>

<script>
  import Header from './Header'
    export default {
        name: "explain",
      components: {
          Header: Header
      }
    }
</script>

<style scoped>
  .title{
    text-align: center;
    font-weight: normal;
    margin-top: 50px;
  }
  .mainContainer{
    width: 60%;
    text-align: center;
    border-radius: 10px;
    margin: 20px auto;
    background-color: #f9fafc;
    font-size: 20px;
  }
</style>
