<template>
  <div class="topbar">
  <mt-header :title="text">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
     
    </mt-header>
   
  </div>
</template>

<script>
export default {
  data(){
      return{
          text:'笑话'
      }
  },
  methods:{
      back(){
        this.$router.go(-1)
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss"> 

</style>
