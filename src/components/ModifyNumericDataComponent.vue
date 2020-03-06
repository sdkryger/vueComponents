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
        message:"Modify numeric data component",
        count:0
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
          max: 190,
          sineGenerate:false
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