<template>
  <div>
    <Header></Header>
    <div class="mainContainer">
      <el-row>
        <el-col :span="6">
          <div class="card">
            <div class="logo" style="background-color: #ff6c60;">
              <img src="../../src/assets/notice.png">
            </div>
            <div class="text">
              <h1>10</h1>
              <p>系统通知</p>
            </div>
          </div>
        </el-col>
        <el-col :span="6" :offset="3">
          <div class="card">
            <div class="logo" style="background-color: #57c8f2;">
              <img src="../../src/assets/newsNum.png">
            </div>
            <div class="text">
              <h1>10</h1>
              <p>发布数</p>
            </div>
          </div>
        </el-col>
        <el-col :span="6" :offset="3">
          <div class="card">
            <div class="logo" style="background-color: #f8d347;">
              <img src="../../src/assets/msg.png">
            </div>
            <div class="text">
              <h1>10</h1>
              <p>新消息</p>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row style="margin-top: 80px;">
        <el-col :span="6">
          <el-table
            :data="tableData1"
            border
            style="width: 100%">
            <el-table-column
              prop="notice"
              label="系统通知"
              align="center"
              show-overflow-tooltip>
            </el-table-column>
          </el-table>
          <div align="center" style="margin-top: 20px;">
            <el-button type="danger">查看更多</el-button>
          </div>
        </el-col>
        <el-col :span="6" :offset="3">
          <el-table
            :data="tableData2"
            border
            style="width: 100%">
            <el-table-column
              prop="newsNum"
              label="今日发布"
              align="center"
              show-overflow-tooltip>
            </el-table-column>
          </el-table>
          <div align="center" style="margin-top: 20px;">
            <el-button type="primary">查看更多</el-button>
          </div>
        </el-col>
        <el-col :span="6" :offset="3">
          <el-table
            :data="tableData3"
            border
            style="width: 100%">
            <el-table-column
              prop="msg"
              label="个人消息"
              align="center"
              show-overflow-tooltip>
            </el-table-column>
          </el-table>
          <div align="center" style="margin-top: 20px;">
            <el-button type="warning">查看更多</el-button>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import Header from './Header'
    export default {
      name: "settings_1",
      components: {
        Header: Header,
      },
      data(){
        return {
          tableData1: [{
            notice: '系统通知1...'
          },{
            notice: '系统通知2...'
          },{
            notice: '系统通知3...'
          }],
          tableData2: [{
            newsNum: '今日发布1...'
          },{
            newsNum: '今日发布2...'
          },{
            newsNum: '今日发布3...'
          }],
          tableData3: [{
            msg: '个人消息1...'
          },{
            msg: '个人消息2...'
          },{
            msg: '个人消息3...'
          }]
        }
      }
    }
</script>

<style lang="scss" scoped>
  .mainContainer{
    width: 80%;
    border-radius: 10px;
    margin: 20px auto;
  }
  .card{
    background-color: #f9fafc;
    border-radius: 4px 0px 0px 4px;
    overflow: hidden;
    .logo{
      float: left;
      width: 30%;
      padding: 25px 15px;
      display: inline-block;
      text-align: center;
    }
    .text{
      text-align: center;
      width: 55%;
      display: inline-block;
      padding-top: 21px;
      h1{
        font-size: 40px;
        color: #c6cad6;
        font-weight: 100;
      }
      p{
        color: #c6cad6;
        font-weight: 100;
      }
    }
  }
</style>
