<template>
  <div>
    <Header></Header>
    <div class="table_container">
      <el-table
        :data="tableData"
        border
        highlight-current-row
        style="width: 100%">
        <el-table-column
          type="index"
          label="用户ID"
          width="100"
          align="center">
        </el-table-column>
        <el-table-column
          property="register_time"
          label="注册日期"
          width="200"
          align="center">
        </el-table-column>
        <el-table-column
          property="username"
          label="用户姓名"
          width="120"
          align="center">
        </el-table-column>
        <el-table-column
          property="power"
          label="用户权限"
          width="100"
          align="center">
        </el-table-column>
        <el-table-column
          property="count"
          label="已发布新闻"
          width="100"
          align="center">
        </el-table-column>
        <el-table-column
          property="city"
          label="注册地址"
          align="center">
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">查看</el-button>
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
      name: "userList",
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
            register_time: '2016-05-02',
            username: '王小虎',
            city: '上海市普陀区金沙江路 1518 弄',
            count: 10,
            power: '用户'
          }, {
            register_time: '2016-05-04',
            username: '王小虎',
            city: '上海市普陀区金沙江路 1517 弄',
            count: 10,
            power: '用户'
          }, {
            register_time: '2016-05-01',
            username: '王小虎',
            city: '上海市普陀区金沙江路 1519 弄',
            count: 10,
            power: '用户'
          }, {
            register_time: '2016-05-03',
            username: '王小虎',
            city: '上海市普陀区金沙江路 1516 弄',
            count: 10,
            power: '用户'
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
