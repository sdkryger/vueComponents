<template>
  <div class="col">
    <div class="row">
      <div class="col">
        {{name}}
      </div>
      <div class="col">
        <input type="text" class="form-control" :value="myData.value" @change="updateValue">
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    props:['name','myData'],
    methods:{
      updateValue(event){
        this.$store.commit('updateNumericData',{key:this.name,value:parseFloat(event.target.value)});
      }
    }
  }
</script>