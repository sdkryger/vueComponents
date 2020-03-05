<template>
  <div class="col">
    Modify data here...
    <div class="row">
      <numeric-data-sim-component name="rpm" :myData="rpm"></numeric-data-sim-component>
    </div>
    <div class="row">
      <numeric-data-sim-component name="speed" :myData="speed"></numeric-data-sim-component>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        message:"Modify numeric data component"
      }
    },
    computed:{
      rpm(){
        return{
          value: this.$store.state.numericData.rpm,
          min: 1000,
          max: 6000,
          sineGenerate:false
        } 
      },
      speed(){
        return{
          value: this.$store.state.numericData.speed,
          min: 0,
          max: 250,
          sineGenerate:false
        } 
      }
    }
  }
</script>