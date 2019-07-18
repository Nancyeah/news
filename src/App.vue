<template>
  <div id="app">
    <!--img src="./assets/logo.png"-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  *{
    margin: 0px;
  }
  #app {
    padding: 0px;
    margin: 0px;
    align: center;
    border: hidden;
    display: flex;
    height: 100%;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 15px;
    color: #2c3e50;
  }
  div::-webkit-scrollbar {
    display:none
  }
  .avatar-uploader .el-upload{
    margin-top: 10px;
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover{
    border-color: #20a0ff;
  }
</style>
