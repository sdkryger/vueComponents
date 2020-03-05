<template>
  <div class="col">
    This is the welcome component where the rpm is: {{rpm}} and the speed is: {{speed}}
    <div class="row">
      <radial-gauge-component name="rpm" class="col-2"></radial-gauge-component>
      <radial-gauge-component name="speed" class="col-2"></radial-gauge-component>
    </div>
    <div class="row">
      <modify-numeric-data-component class="col-12"></modify-numeric-data-component>
    </div>
  </div>
</template>

<script>
  export default{
    computed:{
      rpm(){
        return this.$store.state.numericData.rpm;
      },
      speed(){
        return this.$store.state.numericData.speed;
      }
    }
  }
</script>