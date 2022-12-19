<template>

<div class="container row">
  <div class=" container col-9">
    <div class=" row gap-2 m-3">
      <div class="card w-25  shadow-4 rounded-2 ">
    <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">
      Now track all of your transaction easily.
    </p>
    </div>
</div>

<div class="card w-25 shadow-4 rounded-2 ">
    <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">
      Now track all of your transaction easily.
    </p>
    </div>
</div>
    </div>
  

<div class="row mt-2 gap-2 m-2">

  <div class="card w-25  shadow-4 rounded-2 col-6">
    <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">
      Now track all of your transaction easily.
    </p>
    </div>
</div>

<div class="card w-25 shadow-4 rounded-2 col-6">
    <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">
      Now track all of your transaction easily.
    </p>
    </div>
</div>
</div>
  </div>

  <div class=" col-12 box">
    <h1 class="title">
     <h1 class=" h12">Make & Share <span class=" text-black">Payments</span> With Community</h1> 
    </h1>
    <p class=" fw-light">Hac sem ut eget tellus diam convallis lacus a, interdum nulla sem adipiscing inw</p>

    <button class="btn btn1">Learn more</button>
  </div>
  <br>
  
</div>


</template>

<script>

</script>

<style scoped>
.card{
  transition: .3s; 
}
.card:hover{
  box-shadow: 5px 5px 12px rgba(0, 0, 0, 0.427) !important;
  transform: translateY(-5px);
  cursor: pointer;
}
.card-title{
  color: rgba(92, 94, 110, 1);
  font-weight: bold;
}
.title{
  color: rgba(92, 94, 110, 1);
  font-weight: bold;
  font-size: 30px;
  position: relative;
  z-index: 333;
}
.h12{
  position: relative;
  z-index: 333;
  color: rgba(92, 94, 110, 1);
  font-weight: bold;
  font-size: 30px;
  position: relative;
  z-index: 333;
}
 .h12 span{
  color: rgba(92, 14, 98, 1) !important;
}
.btn1{
   color: rgba(92, 14, 98, 1);
   border: none;
   background-color: white;
}
.box{
  width: 270px;
  height: 200px;
}
.title::before{
  content: '';
  position: absolute;
  top: -15px;
  left: -20px;
  width: 88px;
  height: 91px;
  border-radius: 30px;
  background-color: rgba(220, 138, 224, 0.336);
}

</style>