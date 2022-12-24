<template>

jaxon

<v-row justify="center">

    <v-dialog
      v-model="dialog"
      fullscreen
      :scrim="false"
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ props }">
        <v-btn
          color="primary"
          dark
          v-bind="props"
        >
          Open Dialog
        </v-btn>
      </template>
      <v-card>
        <v-toolbar
          dark
          color="primary"
        >
          <v-btn
            icon
            dark
            @click="dialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Settings</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
              variant="text"
              @click="dialog = false"
            >
              Save
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-list
          lines="two"
          subheader
        >
          <v-list-subheader>User Controls</v-list-subheader>
          <v-list-item title="Content filtering" subtitle="Set the content filtering level to restrict apps that can be downloaded"></v-list-item>
          <v-list-item title="Password" subtitle="Require password for purchase or use password to restrict purchase"></v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list
          lines="two"
          subheader
        >
          <v-list-subheader>General</v-list-subheader>
          <v-list-item title="Notifications" subtitle="Notify me about updates to apps or games that I downloaded">
            <template v-slot:prepend>
              <v-checkbox v-model="notifications"></v-checkbox>
            </template>
          </v-list-item>
          <v-list-item title="Sound" subtitle="Auto-update apps at any time. Data charges may apply">
            <template v-slot:prepend>
              <v-checkbox v-model="sound"></v-checkbox>
            </template>
          </v-list-item>
          <v-list-item title="Auto-add widgets" subtitle="Automatically add home screen widgets">
            <template v-slot:prepend>
              <v-checkbox v-model="widgets"></v-checkbox>
            </template>
          </v-list-item>
        </v-list>
      </v-card>
    </v-dialog>
  </v-row>

<div class="container d-flex justify-content-between">
  <div class=" container bosscard">
    <div class=" row gap-2 m-3 mb-4">
      <div class="card w-25  shadow-4 rounded-1 ">
    <div class="card-body">
      <i class="far fa-newspaper"></i>
    <h5 class="card-title">Card title</h5>
    <p class="card-text">
      Now track all of your transaction easily.
    </p>
    </div>
</div>

<div class="card w-25 shadow-4 rounded-1 ">
    <div class="card-body">
      <i class="fas fa-chart-line"></i>
    <h5 class="card-title">Card title</h5>
    <p class="card-text">
      Now track all of your transaction easily.
    </p>
    </div>
</div>
    </div>
  

<div class="row mt-2 gap-2 m-2">

  <div class="card w-25  shadow-4 rounded-1 col-6">
    <div class="card-body">
      <i class="fas fa-male"></i>
    <h5 class="card-title">Card title</h5>
    <p class="card-text">
      Now track all of your transaction easily.
    </p>
    </div>
</div>

<div class="card w-25 shadow-4 rounded-1 col-6">
    <div class="card-body">
      <i class="fas fa-money-bill"></i>
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
  bekjon qanday ozi
  
</div>


</template>

<script>

  export default {
    data () {
      return {
        dialog: false,
        notifications: false,
        sound: true,
        widgets: false,
      }
    },
  }

</script>

<style scoped>

.dialog-bottom-transition-enter-active,
.dialog-bottom-transition-leave-active {
  transition: transform .2s ease-in-out;
}

@media screen and (max-width: 800px){
  .bosscard{
     display: none;
  }
  .box{
    margin-top: 60px;
    margin: auto;
  }
}


i{
  color: rgba(89, 21, 103, 1);
}
.card{
  transition: .3s; 
  width: 300px !important;
  border-left: 4px solid      rgba(121, 138, 201, 1)  ;
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