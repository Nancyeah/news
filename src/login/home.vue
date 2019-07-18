<template>
  <div>
    <Header></Header>
    <section class="data_section">
      <header class="section_title">数据统计</header>
      <el-row :gutter="20" style="margin-bottom: 10px;">
        <el-col :span="4"><div class="data_list today_head"><span class="data_num head">当日数据：</span></div></el-col>
        <el-col :span="4"><div class="data_list"><span class="data_num">33</span> 浏览数</div></el-col>
        <el-col :span="4"><div class="data_list"><span class="data_num">44</span> 发布数</div></el-col>
        <el-col :span="4"><div class="data_list"><span class="data_num">10</span> 新增用户</div></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="4"><div class="data_list all_head"><span class="data_num head">总数据：</span></div></el-col>
        <el-col :span="4"><div class="data_list"><span class="data_num">12345</span> 总浏览数</div></el-col>
        <el-col :span="4"><div class="data_list"><span class="data_num">34567</span> 总发布数</div></el-col>
        <el-col :span="4"><div class="data_list"><span class="data_num">1000</span> 总用户</div></el-col>
      </el-row>
    </section>
    <tendency></tendency>
  </div>
</template>

<script>
  import Header from './Header'
  import tendency from './tendency'
    export default {
      name: "home",
      components:{
        Header: Header,
        tendency: tendency
      }
    }
</script>

<style lang="scss" scoped>
  .data_section {
    padding: 20px;
    margin-bottom: 40px;
    .section_title {
      text-align: center;
      font-size: 30px;
      margin-bottom: 10px;
    }
    .data_list {
      text-align: center;
      font-size: 15px;
      color: #666;
      border-radius: 6px;
      background: #E5E9F2;
      .data_num {
        color: #333;
        font-size: 30px;
      }
      .head{
        border-radius: 6px;
        font-size: 22px;
        padding: 4px 0;
        color: #fff;
        display: inline-block;
      }
    }
    .today_head{
      background: #FE8463;
    }
    .all_head{
      background: #FCCE10;
    }
  }
</style>
