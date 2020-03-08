<template>
  <div class="col">
    <canvas :id="id" width="400" height="300"></canvas>
    <div class="btn btn-secondary" @click="addPoint()">Add point</div>
    <div class="btn btn-secondary" @click="resetChart()">Reset</div>
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
              fontColor:this.config.fontColor
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
					  	},
              ticks:{
                fontColor:this.config.fontColor
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
        },
        plotNames:[],
        chartColors:[
          "rgb(255, 99, 132)", 
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)"
        ]
      }
    },
    props:['config'],
    created(){
      this.id = 'chart'+Math.floor(Math.random()*1000000000).toString();
    },
    mounted(){
      this.plotNames = this.config.plots;
      this.chart = new Chart(this.id,{type:'line',data:this.data,options:this.options});
      this.resetChart();
      this.updateData();
      window.setInterval(this.updateData,this.config.updateRate);
    },
    methods:{
      addPoint(){
        console.log("Should add a point");
        this.data.labels.push('0');
        this.data.datasets[0].data.push(Math.floor(Math.random()*20));
        
        this.chart.update();
      },
      updateData(){
        console.log("update chart");
        var maxPoints = this.config.bufferLength;
        this.data.labels.push('0');
        if(this.data.labels.length>maxPoints)
          this.data.labels.splice(0,1);
        for (var i=0;i<this.plotNames.length;i++){
          
          this.data.datasets[i].data.push(this.$store.state.numericData[this.plotNames[i]]);
          if(this.data.datasets[i].data.length>maxPoints)
            this.data.datasets[i].data.splice(0,1);
        }
        this.chart.update();
      },
      resetChart(){
        this.data.labels = [];
        this.data.datasets = [];
        var i = 0;
        for (const p of this.plotNames){
          var color = this.chartColors[i % this.chartColors.length];
          console.log("Plot name is: "+p);
          var dataset = {};
          dataset.label = p;
          dataset.data = [];
          dataset.backgroundColor= color;
          dataset.borderColor= color;
          dataset.fill=false;
          dataset.lineTension=0;
          dataset.borderWidth=1;
          dataset.pointRadius=0;
          this.data.datasets.push(dataset);
          i++;
        }

      }
    }
  }

</script>