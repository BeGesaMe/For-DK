
<template>
<Home></Home>
<Footer1></Footer1>
<center></center>
<Teacher></Teacher>
<end></end> 
<darkend></darkend>
</template>


<script>

import Home from'./components/Home.vue'
import Footer1 from'./components/Footer.vue'
import end from './components/end.vue'
import center from './components/center.vue'
import Teacher from'./components/Teachers.vue'
import darkend from './components/darkend.vue'

export default{
  components:{
  Home,
  Footer1,
  Teacher,
  center,
  end,
  darkend,
},
  data(){
    return{


    }
  }
}

</script>


<style scoped>


</style>
