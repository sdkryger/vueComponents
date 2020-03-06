<template>
  <div class="col alert alert-secondary">
    <div class="row">
      <div class="col-12 h4">
        Data input
      </div>
    </div>
    <div class="row">
      <numeric-data-sim-component name="coolantTemp" :myData="coolantTemp"></numeric-data-sim-component>
    </div>
    <div class="row">
      <numeric-data-sim-component name="fuelLevel" :myData="fuelLevel"></numeric-data-sim-component>
    </div>
    <div class="row">
      <numeric-data-sim-component name="rpm" :myData="rpm"></numeric-data-sim-component>
    </div>
    <div class="row">
      <numeric-data-sim-component name="speed" :myData="speed"></numeric-data-sim-component>
    </div>
    <div class="row">
      <numeric-data-sim-component name="voltage" :myData="voltage"></numeric-data-sim-component>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        message:"Modify numeric data component",
        count:0
      }
    },
    computed:{
      coolantTemp(){
        return{
          value: this.$store.state.numericData.coolantTemp
        }
      },
      fuelLevel(){
        return{
          value: this.$store.state.numericData.fuelLevel
        }
      },
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
          max: 190,
          sineGenerate:false
        } 
      },
      voltage(){
        return{
          value: this.$store.state.numericData.voltage
        }
      }
    },
    mounted(){
      console.log("data sim mounted");
      window.setInterval(this.updateValues,100);
    },
    methods:{
      updateValues(){
        //console.log("Should update values");
        if(this.rpm.sineGenerate){
          var range = this.rpm.max - this.rpm.min;
          var val = parseFloat((Math.sin(this.count)* (range / 2) + (this.rpm.min + range/2) ).toFixed(1));
          this.$store.commit('updateNumericData',{key:'rpm',value:val});
        }
        if(this.speed.sineGenerate){
          var range = this.speed.max - this.speed.min;
          var val = parseFloat((Math.sin(this.count)* (range / 2) + (this.speed.min + range/2) ).toFixed(1));
          this.$store.commit('updateNumericData',{key:'speed',value:val});
        }
        this.count+=Math.PI/45;
      }
    }
  }
</script>