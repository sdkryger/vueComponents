<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <span class="navbar-brand">Kreegur</span>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item" style="cursor:pointer;" @click="changeView('dashboard')">
            <span class="nav-link">Main dashboard</span>
          </li>
          <li class="nav-item" style="cursor:pointer;" @click="changeView('dashboard2')">
            <span class="nav-link">Alternate dashboard</span>
          </li>
        </ul>
      </div>
    </nav>
    <div class="container-fluid">
      <div class="row">
        <chart-component :config="chartOptions"></chart-component>
      </div>
      <div class="row">
        <dashboard-component v-if="view == 'dashboard'"></dashboard-component>
        <dashboard-2-component v-if="view == 'dashboard2'"></dashboard-2-component>
        
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        data(){
            return{
                message: "hello",
                chartOptions:{
                  bufferLength:100,
                  fontColor:'#ccc',
                  plots:[
                    'rpm',
                    'speed',
                    'coolantTemp',
                    'fuelLevel',
                    'voltage'
                  ],
                  updateRate:1000,
                  heightPercent:40,
                  aspectRatio:3
                }
            }
        },
        mounted: function () {
          console.log("App component mounted");
        },
        computed:{
          view(){
            return this.$store.state.view;
          }
        },
        methods:{
          changeView(view){
            this.$store.commit('changeView',view);
          }
        }
    }
</script>