<template>
  <div>
    <Header></Header>
    <el-row class="form_container">
      <el-col :span="12" :offset="5">
        <h1 align="center" style="padding-bottom: 50px;">审核新闻</h1>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="新闻标题" prop="title">
            <el-input v-model="ruleForm.title"></el-input>
          </el-form-item>
          <el-form-item label="作者"  prop="author">
            <el-input v-model="ruleForm.author"></el-input>
          </el-form-item>
          <el-form-item label="发布时间" required>
            <el-col :span="11">
              <el-form-item prop="date1">
                <el-date-picker type="date" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
              <el-form-item prop="date2">
                <el-time-picker type="fixed-time" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
              </el-form-item>
            </el-col>
          </el-form-item>
          <el-form-item>
            <el-upload action="" style="height: 100%;" :file-list="fileList">
              （新闻内容下载）
            </el-upload>
            <el-button size="small" type="primary">点击下载</el-button>
          </el-form-item>
          <el-form-item align="right">
            <el-button type="success" @click="onSubmit">审核通过</el-button>
            <el-button type="danger" @click="onReturn">退回</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import Header from './Header'
    export default {
      name: "newsCheck_1",
      components: {
          Header: Header,
      },
      data() {
        return {
          ruleForm: {
            title: '我校喜获2项广东省科学技术奖一等奖',
            author: '蒙丽',
            date1: '2019-03-27',
            date2: '2019',
          },
          rules: {
            title: [
              {required: true, message: '请输入新闻标题', trigger: 'blur'},
              {min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur'}
            ],
            author: [
              {required: true, message: '请输入作者', trigger: 'blur'},
              {min: 2, max: 4, message: '长度在 2 到 4 个字符', trigger: 'blur'}
            ],
            date1: [
              {required: true, message: '请输入日期', trigger: 'blur'},
            ],
            date2: [
              {required: true, message: '请输入时间', trigger: 'blur'},
            ]
          },
          fileList: [{name: 'food.text', url:''}]
        }
      },
      methods: {
        onSubmit() {
          this.$message.success('处理完成！')
          console.log('submit!');
        },
        onReturn() {
          this.$message.success('已退回！')
        }
      }
    }
</script>

<style scoped>
  .form_container{
    padding: 50px 100px 100px 100px;
  }
  .line{
    display: flex;
    justify-content: center;
  }
</style>
