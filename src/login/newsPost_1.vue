<template>
  <div>
    <Header></Header>
    <el-row class="form_container">
      <h1 align="center" style="padding-bottom: 50px;">新闻发布</h1>
      <el-col :span="12" :offset="5">
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
                <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
              <el-form-item prop="date2">
                <el-time-picker type="fixed-time" placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
              </el-form-item>
            </el-col>
          </el-form-item>
          <el-form-item label="文件上传">
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              multiple
              :limit="3"
              :on-exceed="handleExceed">
              <el-button size="small" type="info">点击上传</el-button>
            </el-upload>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import Header from './Header'
    export default {
      name: "newsPost_1",
      components: {
        Header: Header,
      },
      data() {
        return {
          ruleForm: {
            title: '',
            author: ''
          },
          numberValidateForm: {

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
          fileList:''
        }
      },
      methods: {
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              return this.$confirm("确定提交吗？提交后不可修改！");
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
        },
        handleRemove(file, fileList) {
          console.log(file, fileList);
        },
        handlePreview(file) {
          console.log(file);
        },
        handleExceed(files, fileList) {
          this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
        },
        beforeRemove(file, fileList) {
          return this.$confirm(`确定移除 ${ file.name }？`);
        },
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
