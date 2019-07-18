<template>
  <div>
    <Header></Header>
    <div class="table_container">
      <el-table
        :data="tableData"
        highlight-current-row
        style="width: 100%;">
        <el-table-column
          type="index"
          label="序号"
          width="100"
          align="center">
        </el-table-column>
        <el-table-column
          property="name"
          label="名称"
          width="150"
          align="center">
        </el-table-column>
        <el-table-column
          property="time"
          label="设立时间"
          width="220"
          align="center">
        </el-table-column>
        <el-table-column
          property="describe"
          label="描述"
          align="center">
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="info"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  import Header from './Header'
    export default {
      name: "newsManage_1",
      components: {
        Header: Header,
      },
      methods: {
        handleEdit(index, row) {
          console.log(index, row);
        },
        handleDelete(index, row) {
          console.log(index, row);
        }
      },
      data() {
        return {
          tableData: [{
            time: '2016-05-02',
            name: '通知',
            describe: '学校最新通知'
          }, {
            time: '2016-05-04',
            name: '要闻',
            describe: '政府最新新闻'
          }, {
            time: '2016-05-01',
            name: '行业分析',
            describe: '企业相关行业分析'
          }, {
            time: '2016-05-03',
            name: '国务院',
            describe: '政府国务院消息'
          }]
        }
      }
    }
</script>

<style scoped>
  .table_container{
    padding: 20px;
  }
</style>
