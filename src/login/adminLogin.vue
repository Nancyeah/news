<template>
  <div class="container">
    <el-row style="height: 100%;">
      <el-col :span="4" style="min-height: 100%;background-color: rgb(84, 92, 100);">
        <el-menu default-active="defaultActive" class="el-menu-vertical-demo" theme="dark"
                 style="min-height: 100%;" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" router>
          <el-menu-item index="adminLogin"><i class="el-icon-menu"></i>首页</el-menu-item>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-document"></i>数据管理</template>
            <el-menu-item index="userList">用户列表</el-menu-item>
            <el-submenu index="2-2">
              <template slot="title">新闻管理</template>
              <el-menu-item index="newsManage_1">板块管理</el-menu-item>
              <el-menu-item index="newsManage_2">内容管理</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-upload"></i>新闻发布</template>
            <el-menu-item index="newsPost_1">板块1</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title"><i class="el-icon-check"></i>审核新闻</template>
            <el-menu-item index="newsCheck_1">板块1</el-menu-item>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title"><i class="el-icon-star-on"></i>图表</template>
            <el-menu-item index="chart_1">用户分布</el-menu-item>
            <el-menu-item index="chart_2">用户数据</el-menu-item>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title"><i class="el-icon-edit"></i>编辑</template>
            <el-menu-item index="edit">编辑信息</el-menu-item>
          </el-submenu>
          <el-submenu index="7">
            <template slot="title"><i class="el-icon-setting"></i>设置</template>
            <el-menu-item index="settings_1">用户中心</el-menu-item>
            <el-menu-item index="settings_2">发送通知</el-menu-item>
          </el-submenu>
          <el-submenu index="8">
            <template slot="title"><i class="el-icon-warning"></i>说明</template>
            <el-menu-item index="explain">说明</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
      <el-col :span="20" style="height: 100%;overflow: auto;">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-col>
    </el-row>
  </div>
</template>

<script>
    export default {
      name: "adminLogin",
      computed: {
        defaultActive: function(){
          return this.$route.path.replace("/","");
        }
      }
    }
</script>

<style lang="scss" scoped>
  .container{
    height: 100%;
    width: 100%;
  }
</style>
