<template>
  <div class="container srt d-flex gap-5">

    <div class=" w-50 col-12">
      <div class=" d-flex">
         <div class=" box box_hover" @click="tanlanganComponent = 'FoureTeacher'">
         </div>
         <div class=" box1 mt-2 box_hover"  @click="tanlanganComponent = 'ThirdTheacher'">
         </div>
      </div>

      <div class=" d-flex">
        <div class=" box2 box_hover" @click="tanlanganComponent = 'SecondTeacher'">
             </div>
             <div class=" box3 mt-2 box_hover">
          </div>
          <div class=" box4  box_hover" @click="tanlanganComponent = 'FirstTeacherVue'">
          </div>
      </div>



    </div>
    
    <div class=" mt-5 container srt">
      <Transition>
<component :is="tanlanganComponent"></component>
</Transition>
    </div>



    
  </div>
</template>
<script>
import FirstTeacherVue from './FirstTeacher.vue';
import SecondTeacher from './SecondTeacher.vue';
import ThirdTheacher from './ThirdTeacher.vue';
import FoureTeacher from './4Teacher.vue'
export default {
  components:{
    FirstTeacherVue,
    SecondTeacher,
    ThirdTheacher,
    FoureTeacher
   
  },
  data(){
    return{
      tanlanganComponent:'FirstTeacherVue'
    }
  }
}
</script>
<style scoped>


.srt{
transition: 2s;
}
.btn{
  color:rgba(92, 14, 98, 1) ;
}
.box{
  width: 150px;
  height: 150px;
  background-image: url('../assets/man-613601.jpg');
  border-radius: 30% 70% 62% 38% / 30% 30% 70% 70% ;
  background-size: cover;
  transform: rotate(-20deg);

}
.box_hover{
  transition: 1s;
}
.box1{
  width: 150px;
  height: 150px;
  background-image: url('../assets/pexels-italo-melo-2379004.png');
  border-radius: 30% 70% 62% 38% / 30% 30% 70% 70% ;
  background-size: cover;
  transform: rotate(10deg);
  
}
.box2{
  width: 150px;
  height: 150px;
  background-image: url('../assets/pexels-italo-melo-2379004.png');
  border-radius: 30% 70% 62% 38% / 30% 30% 70% 70% ;
  background-size: cover;
  transform: rotate(10deg);
}
.box3{
  width: 150px;
  height: 150px;
  background-image: url('../assets/pexels-italo-melo-2379004 (1).png');
  border-radius: 30% 70% 62% 38% / 30% 30% 70% 70% ;
  background-size: cover;
  transform: rotate(10deg); 
}
.box4{
  width: 150px;
  height: 150px;
  background-image: url('../assets/pexels-italo-melo-2379004 (2).png');
  border-radius: 30% 70% 62% 38% / 30% 30% 70% 70% ;
  background-size: cover;
  transform: rotate(10deg);
  margin-top: -70px !important;
  margin-right: 80px;
}
.box_hover:hover{
   background-image: url('../assets/john-torcasio-tgVm0tkbf1U-unsplash.png');
   transform: perspective(50rem) translateZ(50px);
   box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.358);
}

/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}


  
</style>