<template>
  <div>
    <Header></Header>
    <el-main>
      <h2 class="title">个人信息</h2>
      <div class="mainContainer">
        <el-form ref="form" :model="form" label-width="80px" style="margin-top: 20px;">
          <el-form-item label="姓名">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="注册日期">
            <el-input v-model="form.register_time" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="用户权限">
            <el-input v-model="form.power" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="用户ID">
            <el-input v-model="form.userID" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="更换头像">
            <el-upload
              class="avatar-uploader"
              action=""
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">确认修改</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-main>
  </div>
</template>

<script>
  import Header from './Header'
    export default {
      name: "edit",
      components: {
          Header: Header
      },
      data() {
        return {
          imageUrl: '',
          form: {
            name: 'Nancy',
            register_time: '2019-01-01',
            power: '用户',
            userID: '01'
          },
          rules: {
            name: [
              { required: true, message: '请输入姓名', trigger: 'blur' },
              { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
            ]
          }
        };
      },
      methods: {
        handleAvatarSuccess(res, file) {
          this.imageUrl = URL.createObjectURL(file.raw);
        },
        beforeAvatarUpload(file) {
          const isJPG = file.type === 'image/jpeg';
          const isLt2M = file.size / 1024 / 1024 < 2;

          if (!isJPG) {
            this.$message.error('上传头像图片只能是 JPG 格式!');
          }
          if (!isLt2M) {
            this.$message.error('上传头像图片大小不能超过 2MB!');
          }
          return isJPG && isLt2M;
        },
        onSubmit() {
          console.log('submit!');
        }
      }
    }
</script>

<style scoped lang="scss">
  .title{
    display: flex;
    justify-content: center;
    font-weight: normal;
  }
  .mainContainer{
    width: 60%;
    border-radius: 10px;
    margin: 20px auto;
    display: flex;
    justify-content: center;
    background-color: #f9fafc;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 120px;
    height: 120px;
    line-height: 120px;
    text-align: center;
  }
  .avatar {
    width: 120px;
    height: 120px;
    display: block;
  }
</style>
