<template>
  <el-header class="header">
    <el-breadcrumb sparator="/" style="font-size: 13px;">
      <el-breadcrumb-item :to="{ path: '/adminLogin' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item v-for="(item, index) in $route.meta" :key="index">
        {{ item }}
      </el-breadcrumb-item>
    </el-breadcrumb>
    <el-dropdown @command="handleCommand" menu-align='start'>
      <img src="../../src/assets/admin.png">
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="home">首页</el-dropdown-item>
        <el-dropdown-item command="signout">退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-header>
</template>

<script>
    export default {
      name: "Header",
      methods: {
        handleCommand(command) {
          if (command == 'home') {
            this.$router.push('/adminLogin');
          }else if(command == 'signout'){
            this.$message({type: 'success', message: '登出成功'});
            this.$router.push('/login')
          }else{
            this.$message({type: 'error', message: '登出错误'});
          }
        }
      }
    }
</script>

<style lang="scss" scoped>
  .header{
    background-color: #eff2f7;
    padding-left: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img{
      border-radius: 50%;
      margin-right: 37px;
    }
  }
</style>
