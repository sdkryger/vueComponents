<template>
  <div class="col">
    <div class="row">
      <chart-component :config="chartOptions"></chart-component>
    </div>
    <div class="row">
      <div class="col">
        <div class="row">
          <radial-gauge-component class="col-4" name="fuelLevel" :options="gaugeFuelLevelOptions"></radial-gauge-component>
        </div>
        <div class="row">
          <radial-gauge-component class="col-4" name="voltage" :options="gaugeVoltageOptions"></radial-gauge-component>
        </div>
      </div>
      <div class="col">
        <div class="row">
          <linear-gauge-component name="coolantTemp" :options="gaugeCoolantTempOptions"></linear-gauge-component>
        </div>
      </div> 
    </div>
   
    
  </div>
</template>

<script>
  export default{
    data(){
      return{
        chartOptions:{
                  bufferLength:100,
                  fontColor:'#ccc',
                  plots:[
                    'rpm',
                    'speed',
                    'coolantTemp',
                    'fuelLevel',
                    'voltage'
                  ],
                  updateRate:1000,
                  heightPercent:40,
                  aspectRatio:3
                },
        gaugeRpmOptions:{
          yes:'one',
          minValue:0,
          maxValue:10000,
          majorTicks:[0,1,2,3,4,5,6,7,8,9,10],
          minorTicks:2,
          highlights:[{
            from:7900,
            to:10000,
            color:'#a83232'
          }],
          units:'x 1000',
          title:'RPM',
          valueDec:0,
          valueInt:1
        },
        gaugeSpeedOptions:{
          minValue:0,
          maxValue:200,
          majorTicks:[0,20,40,60,80,100,120,140,160,180,200],
          minorTicks:4,
          title:'MPH',
          highlights:false,
          valueDec:0,
          valueInt:1
        },
        gaugeCoolantTempOptions:{
          minValue:50,
          maxValue:150,
          majorTicks:[50,100,150],
          minorTicks:5,
          title:'Coolant',
          units:'\xB0'+'C',
          highlights:false,
          valueDec:1,
          ticksAngle:180,
          startAngle:90,
          width:100,
          height:400,
          highlights:[
            {
              from:130,
              to:150,
              color:'#a83232'
            }
          ]
        },
        gaugeFuelLevelOptions:{
          minValue:0,
          maxValue:1,
          majorTicks:['0','1/2','1'],
          minorTicks:2,
          title:'Fuel',
          highlights:[
            {
              from:0,
              to:0.125,
              color:'#a83232'
            }
          ],
          valueBox:false,
          ticksAngle:180,
          startAngle:90
        },
        gaugeVoltageOptions:{
          minValue:10,
          maxValue:16,
          majorTicks:[10,12,14,16],
          minorTicks:2,
          title:'Voltage',
          highlights:[
            {
              from:10,
              to:12,
              color:'#a83232'
            }
          ],
          valueDec:2,
          valueInt:1,
          ticksAngle:180,
          startAngle:90
        },
        gaugeCommonOptions:{
          colorPlate:'transparent',
          colorMajorTicks:'#ccc',
          colorMinorTicks:'#ccc',
          colorNumbers:'#ccc',
          colorTitle:'#ccc',
          colorUnits:'#ccc',
          borders:false,
          needleStart:0,
          animationDuration:50,
          colorValueBoxBackground:'#333',
          colorValueText:'#ccc',
          colorValueBoxShadow:false
        }
      }
    },
    created(){
      console.log("dashboard2 component created");
      for(const property in this.gaugeCommonOptions){
        //console.log("Property: "+property);
        this.$set(this.gaugeSpeedOptions,property,this.gaugeCommonOptions[property]);
        this.$set(this.gaugeRpmOptions,property,this.gaugeCommonOptions[property]);
        this.$set(this.gaugeCoolantTempOptions,property,this.gaugeCommonOptions[property]);
        this.$set(this.gaugeFuelLevelOptions,property,this.gaugeCommonOptions[property]);
        this.$set(this.gaugeVoltageOptions,property,this.gaugeCommonOptions[property]);
      }
    },
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