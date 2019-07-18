<template>
  <div>
    <Header></Header>
    <div class="table_container">
      <el-table
        ref="multipleTable"
        :data="tableData3"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          label="用户ID"
          type="index"
          width="100"
          align="center">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="120"
          align="center">
        </el-table-column>
        <el-table-column
          prop="register_time"
          label="注册时间"
          width="200"
          align="center">
        </el-table-column>
        <el-table-column
          prop="address"
          label="注册地址"
          align="center"
          show-overflow-tooltip>
        </el-table-column>
      </el-table>
      <div style="margin-top: 20px">
        <el-button @click="toggleSelection(tableData3)">全选 / 反选</el-button>
        <el-button @click="toggleSelection()">取消选择</el-button>
        <el-button type="success">发送通知</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from './Header'
    export default {
      name: "settings_2",
      components: {
        Header: Header
      },
      data() {
        return {
          tableData3: [{
            register_time: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            register_time: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            register_time: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            register_time: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            register_time: '2016-05-08',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            register_time: '2016-05-06',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            register_time: '2016-05-07',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }],
          multipleSelection: []
        }
      },
      methods: {
        toggleSelection(rows) {
          if (rows) {
            rows.forEach(row => {
              this.$refs.multipleTable.toggleRowSelection(row);
            });
          } else {
            this.$refs.multipleTable.clearSelection();
          }
        },
        handleSelectionChange(val) {
          this.multipleSelection = val;
        }
      }
    }
</script>

<style scoped>
  .table_container{
    margin: 0 20px;
  }
</style>
