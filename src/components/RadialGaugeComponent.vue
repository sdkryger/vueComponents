<template>
  <div class="col">
    {{name}}
    <canvas class="canvas-gauges" id="123"></canvas>
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
        value:12.3,
        myOptions:{}
      }
    },
    mounted(){
      this.myOptions = Object.assign({}, this.options);
      //console.log(JSON.stringify(this.$el));
      this.myOptions.value = this.value;
      this.myOptions.renderTo = "123";
      this.chart = new RadialGauge(this.myOptions).draw();
    }
  }
</script>