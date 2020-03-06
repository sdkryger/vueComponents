<template>
  <div class="container-fluid">
    <div class="row">
      <dashboard-component v-if="view == 'dashboard'"></dashboard-component>
    </div>
  </div>
</template>

<script>
    export default {
        data(){
            return{
                message: "hello"
            }
        },
        mounted: function () {
          console.log("App component mounted");
        },
        computed:{
          view(){
            return this.$store.state.view;
          }
        }
    }
</script>