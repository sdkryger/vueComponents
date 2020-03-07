<template>
  <div class="col">
    <canvas :id="id" width="400" height="300"></canvas>
    <div class="btn btn-secondary" @click="addPoint()">Add point</div>
  </div>
</template>

<script>
  import Chart from 'chart.js';
  
  export default{
    data(){
      return{
        message:"chart component",
        chart:{},
        id:'not set',
        ctx:'',
        options:{
          legend:{
            labels:{
              fontColor:'#ccc'
            }
          },
          scales: {
					  xAxes: [{
						  display: false,
						  scaleLabel: {
							  display: false,
							  labelString: 'Month'
						  },
              ticks:{
                fontColor:'#ccc'
              }
					  }],
					  yAxes: [{
						  display: true,
						  scaleLabel: {
					  		display: true,
						  	labelString: 'Value'
					  	}
				  	}]
				  }
        },
        data:{
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [
            {
              label: '# of Votes',
              data: [12, 19, 3, 10, 2, 3],
              backgroundColor: 'rgba(255, 159, 64, 0.2)',
              borderColor: 'rgba(255, 159, 64, 1)',
              fill:false,
              lineTension:0,
              borderWidth:1,
              pointRadius:0
            }
          ]
        }
      }
    },
    created(){
      this.id = 'chart'+Math.floor(Math.random()*1000000000).toString();
    },
    mounted(){
      
      this.chart = new Chart(this.id,{type:'line',data:this.data,options:this.options});
    },
    methods:{
      addPoint(){
        console.log("Should add a point");
        this.data.labels.push('0');
        this.data.datasets[0].data.push(Math.floor(Math.random()*20));
        this.chart.update();
      }
    }
  }

</script>