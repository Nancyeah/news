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
          property="title"
          label="标题"
          width="300"
          align="center">
        </el-table-column>
        <el-table-column
          property="author"
          label="作者"
          width="150"
          align="center">
        </el-table-column>
        <el-table-column
          property="date"
          label="发布时间"
          width="200"
          align="center">
        </el-table-column>
        <el-table-column
          property="times"
          label="浏览次数"
          width="100"
          align="center">
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="primary"
              @click="handleRead(scope.$index, scope.row)">查看</el-button>
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
      name: "newsManage_2",
      components: {
        Header: Header,
      },
      methods: {
        handleEdit(index, row) {
          console.log(index, row);
        },
        handleRead(index, row) {
          console.log(index, row);
        },
        handleDelete(index, row) {
          console.log(index, row);
        }
      },
      data() {
        return {
          tableData: [{
            title: '我校喜获2项广东省科学技术奖一等奖',
            author: '蒙丽',
            date: '2019-03-27',
            times: '454'
          }, {
            title: '关于副处级领导干部填报岗位意向的通知',
            author: '组织部',
            date: '2019-04-01',
            times: '615'
          }, {
            title: 'ICC China会议在深召开 中兴通讯总裁徐子阳当选知识产权委员会新一届主席',
            author: '/',
            date: '2019-04-01',
            times: '/'
          }, {
            title: '习近平向2019“中国－太平洋岛国旅游年”开幕式致贺词',
            author: '新华社',
            date: '2019-04-01 14:22',
            times: '/'
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
