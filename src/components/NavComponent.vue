<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a href="index.html" class="navbar-brand">Kreegur</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item" style="cursor:pointer;">
            <a href="index.html" class="nav-link">Main dashboard</a>
          </li>
          <li class="nav-item" style="cursor:pointer;">
            <a href="dashboard2.html" class="nav-link">Alternate dashboard</a>
          </li>
          <li class="nav-item" style="cursor:pointer;">
            <a href="sim.html" class="nav-link">Sim data</a>
          </li>
        </ul>
      </div>
    </nav>
</template>

<script>
  export default{
    data(){
      return{
        message:"nav message"
      }
    }
  }
</script>