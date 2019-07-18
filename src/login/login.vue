<template>
  <div id="login">
    <div class="loginMain">
      <el-form :model="loginForm" ref="loginForm" class="demo-ruleForm" :rules="loginRules">
        <el-form-item prop="username">
          <el-input  placeholder="请输入账号" v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" placeholder="请输入密码"
                    v-model="loginForm.password" @keyup.enter.native="login('loginForm')"></el-input>
        </el-form-item>
        <el-checkbox style="float: left;margin-bottom: 15px;" v-model="checked" checked>记住密码</el-checkbox>
        <div class="login-btn">
          <el-button type="primary" @click="login('loginForm')">登录</el-button>
        </div>
        <br/>
        <p style="font-size:12px;line-height:30px;color:#333;">Tips : 超级管理员用户名: superAdmin 密码: adminSuper。</p>
        <p style="font-size:12px;line-height:30px;color:#333;">Tips : 管理员用户名: admin 密码: admin。</p>
      </el-form>
    </div>
  </div>
</template>

<script>
    export default {
      name: 'login',
      data () {
        const validateUser = (rule, value, callback) => {
          if (value.length < 5) {
            callback(new Error('长度不能小于5位'));
          } else {
            callback();
          }
        };
        return {
          loginForm:{
            username: '',
            password: ''
          },
          loginRules: {
            username:[{required: true, trigger:'blur', validator: validateUser}],
            password:[{required: true, trigger: 'blur', validator: validateUser}]
          },
          checked: true,
          logining: false
        };
      },
      methods: {
        login(formName) {
          this.$refs[formName].validate(valid => {
            if (valid) {
              if(this.loginForm.username === 'admin' && this.loginForm.password === 'admin'){
                this.$message.success('登录成功');
                this.$router.push({path: '/adminLogin'});
              }else if(this.loginForm.username === 'superAdmin' && this.loginForm.password === 'adminSuper'){
                this.$message.success('登录成功');
                this.$router.push({path: '/adminLogin'});
              }else{
                this.$message.error('登录失败');
              }
            } else {
              console.log('error submit!!');
              return false;
            }
          })
        }
      }
    }
</script>

<style lang="scss" scoped>
  #login{
    margin: 0px;
    width: 100%;
    height: 100%;
    background: url("../assets/citycat.png") no-repeat;
    background-size: cover;
    /*display: flex;
    justify-content: center;*/
    position: fixed;
    align-items: center;
    .loginMain{
      float: right;
      margin-top: 18%;
      margin-right: 15%;
      width: 30%;
      color: #fff;
      text-align: center;
      .demo-ruleForm{
        .login-btn{
          width: 100%;
          button{
            width: 100%;
          }
        }
      }
    }
  }
</style>
