<template>
  <div class="container-fluid">
    <div class="row">
      <welcome-component v-if="appState == 'welcome'"></welcome-component>
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
          appState(){
            return this.$store.state.state;
          }
        }
    }
</script>