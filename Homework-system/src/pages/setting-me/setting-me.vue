<template>
  <div>
    <HomeNav></HomeNav>
      <header>
        <div class="mycount"><i class="el-icon-user-solid"></i><div>{{user.name}}</div></div>      
      </header>
      <hr/>
      <main>
        <div class="information">
          <div class="base-inf"></div>
          <div class="role"></div>
          <div class="password"></div>
        </div>
      </main>
  </div>
</template>

<script>
import HomeNav from '../home/components/home-nav'
export default {
name:'SettingMe',
data(){
  return{
    user:{
      name:'郭俊清'
    }
  }
},
components:{
  HomeNav
}
}
</script>

<style scoped>
.el-icon-user-solid{
  display: inline-block;
}
header{
  width: 100%;
  height: 115px;
}
.mycount{
  position: absolute;
  text-align: center;
  margin: 30px 0 15px 0;
  left: 45%;
  font-size: 30px;
  font-weight: 600;
}
.infromation{

}
</style>>

