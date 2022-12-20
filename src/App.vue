
<template>
 <Home></Home>
<Footer1></Footer1>
<center></center>

</template>


<script>
import center from './components/center.vue'
import Home from'./components/Home.vue'
import Footer1 from'./components/Footer.vue'

export default{
  components:{
  Home,
  Footer1,
  center,
},
  data(){
    return{


    }
  }
}

</script>


<style >
body{
  background-color: red;
}

</style>
