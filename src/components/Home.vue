

<template>

<Navigation></Navigation>


<img src="../assets/Group svgg.svg" alt="" class=" w-75 ">
</template>
  
<script>
import Navigation from './Navigation.vue'

export default{
  components:{
    Navigation
  }
}

</script>
  
<style scoped>

img{
   position: relative;
   top: -250px;
   right: -300px;
}
.btn4 {
  background-color: #FFBC51;
  box-shadow: 3px 3px 10px #FFBC51;
  transition: .3s;
  width: 80px;
  height: 33px;
}

.btn4:hover {
  transform: translateY(-5px);
}

a {
  color: white !important;
  transition: .5s;
  font-family: sans-serif;
}

a:hover {
  color: rgba(0, 0, 0, 0.505) !important;
}

.btn3 {
  border: none;
  box-shadow: none;
  transition: .3s;
  width: 80px;
  height: 33px;

}

.btn3:hover {
  background-color: #f4c67d72;

}

li {
  list-style: none;
}


svg {
  position: absolute;
  bottom: 0;
  left: 0;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.wave-header {
  min-height: 100vh;
  width: 100%;
  background: linear-gradient(99.22deg, #5C0E62 1.27%, #00B5D0 92.23%);
  position: relative;
}

.btn5 {
  background-color:
    rgba(121, 138, 201, 1) !important;
  transition: .4s;
  width: 100px;
  height: 40px;
}

.p {
  color: rgba(255, 255, 255, 1);
  font-family: sans-serif;
}

.h1 {
  font-family: sans-serif;
  font-size: 60px !important;
}

.btn5:hover {
  transform: translateY(-5px) !important;
}
</style>