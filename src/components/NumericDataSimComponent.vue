<template>
  <div class="col">
    <div class="row border border-dark bg-light rounded pt-1 pb-1">
      <div class="col">
        {{name}}
      </div>
      <div class="col-2">
        <input type="text" class="form-control form-control-sm" :value="myData.value" @change="updateValue">
      </div>
      <div class="col">
        <div class="row">
          <div class="col">
            Step size
          </div>
          <div class="col">
            <input type="text" class="form-control form-control-sm" v-model="stepSize">
          </div>
          <div class="col">
            <div class="btn btn-dark btn-block btn-sm" @click="stepChange('less')">-</div>
          </div>
          <div class="col">
            <div class="btn btn-dark btn-block btn-sm" @click="stepChange('more')">+</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    props:['name','myData'],
    methods:{
      updateValue(event){
        this.$root.$mqtt.publish('numericData/'+this.name,event.target.value);
      },
      stepChange(direction){
        var value = this.myData.value + parseFloat(this.stepSize);
        if(direction == 'less')
          value = this.myData.value - this.stepSize;
        this.$root.$mqtt.publish('numericData/'+this.name,value.toString());
      }
    },
    data(){
      return{
        stepSize:1
      }
    }
  }
</script>