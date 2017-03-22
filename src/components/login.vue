<template>
    <div class='login' >
        <h3>用户登录</h3>
        <el-input v-model="newuser.username" placeholder="用户名"></el-input>
        <el-input v-model="newuser.password" placeholder="密码"></el-input>

        <el-button @click='login' type='primary' >登录</el-button>
    </div>
</template>

<script>
    import { Toast } from 'mint-ui';
    export default{
       data(){
          return {
              newuser :{
                  username:'',
                  password:''
                }
            }
        },
        methods:{
            login(){
                const _this = this;
                 console.log(_this.$store.state)
                this.$store.dispatch('login',this.newuser)
                .then(function(){
                    //console.log(this.$store.state)
                    if(_this.$store.state.user.seccLogin){
                        Toast('登录成功!');
                        _this.$router.push('/main');
                        _this.$store.state.user.seccLogin = 0;
                    }else{
                        Toast('登录失败!');
                    }
                })
            }
        },
        components:{
            Toast
        }
    }
</script>