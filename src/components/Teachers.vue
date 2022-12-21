<template>
  <div class="container mt-5">

    <div class=" w-50">
      <div class=" d-flex">
         <div class=" box box_hover">
         </div>
         <div class=" box1 mt-2 box_hover">
         </div>
      </div>

      <div class=" d-flex">
        <div class=" box2 box_hover">
             </div>
             <div class=" box3 mt-2 box_hover">
          </div>
          <div class=" box4  box_hover">
          </div>
      </div>



    </div>


    
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
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
  margin-top: -55px !important;
  margin-right: 50px;
}
.box_hover:hover{
   background-image: url('../assets/john-torcasio-tgVm0tkbf1U-unsplash.png');
   transform: perspective(50rem) translateZ(50px);
   box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.358);
}


  
</style>