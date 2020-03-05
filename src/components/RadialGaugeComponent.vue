<template>
  <div class="col">
    {{name}}
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
        id:''
      }
    },
    computed:{
      value(){
        return this.$store.state.numericData[name];
      }
    },
    mounted(){
      console.log(this.$store.state.numericData.rpm);
      this.myOptions = Object.assign({}, this.options);
      //console.log(JSON.stringify(this.$el));
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