<template>
  <div class="col">
    <canvas class="canvas-gauges" :id="'radialGauge'+id"></canvas>
  </div>
</template>

<script>
  import {RadialGauge} from 'canvas-gauges'

  export default{
    props:{
      name: String,
      options:{
        type: Object,
        default: () => ({})
      }
    },
    data(){
      return{
        chart: null,
        myOptions:{},
        id:'',
        scalingFactor:1
      }
    },
    computed:{
      value(){
        return this.$store.state.numericData[this.name] * this.scalingFactor;
      }
    },
    watch:{
      value: function(val){
        //console.log("should update gauge");
        this.chart.value = this.value;
      }
    },
    mounted(){
      if(this.options.scalingFactor)
        this.scalingFactor = this.options.scalingFactor;
      this.myOptions = Object.assign({}, this.options);
      this.myOptions.value = this.value;
      this.myOptions.renderTo = "radialGauge"+this.id;
      this.initGauge();
    },
    created(){
      this.id = Math.floor(Math.random()*1000000000);
    },
    methods:{
      initGauge(){
        try{

          this.chart = new RadialGauge(this.myOptions).draw();
          console.log("init of gauge "+this.id+" successful");
        }catch(err){
          console.log("init of gauge "+this.id+" failed");
          window.setTimeout(this.initGauge,100);
        }
      }
    }
  }
</script>