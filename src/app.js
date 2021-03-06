import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import VueMqtt from 'vue-mqtt'

Vue.component('dashboard-component', require('./components/DashboardComponent.vue').default);
Vue.component('dashboard-2-component', require('./components/Dashboard2Component.vue').default);
Vue.component('modify-numeric-data-component', require('./components/ModifyNumericDataComponent.vue').default);
Vue.component('numeric-data-sim-component', require('./components/NumericDataSimComponent.vue').default);
Vue.component('radial-gauge-component', require('./components/RadialGaugeComponent.vue').default);
Vue.component('linear-gauge-component', require('./components/linearGaugeComponent.vue').default);
Vue.component('chart-component', require('./components/ChartComponent.vue').default);
Vue.component('nav-component', require('./components/NavComponent.vue').default);
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    view:'dashboard',
    numericData:{
      speed:NaN,
      rpm:NaN,
      voltage: NaN,
      coolantTemp: NaN,
      fuelLevel:NaN
    }
  },
  mutations: {
  	increment: state => state.count++,
    decrement: state => state.count--,
    changeView (state, payload){
      state.view = payload;
    },
    updateNumericData (state, payload){
      state.numericData[payload.key] = payload.value;
    }
  }
})

new Vue({
  el: '#app',
  store,
  data:{
    message:"root message"
  },
  mounted: function () {
    console.log("root mounted");
  },
  created(){
    //Vue.use(VueMqtt, 'mqtt://'+'localhost'+':9001', {clientId: 'WebClient-' + parseInt(Math.random() * 100000)});
    Vue.use(VueMqtt, 'mqtt://'+'99.79.52.237'+':9001', {clientId: 'WebClient-' + parseInt(Math.random() * 100000)});
    
    this.$mqtt.publish('test from me','yes, working');
    this.$mqtt.subscribe('numericData/#');
    this.$mqtt.on("message", function(topic, message) {
      //console.log("Root got mqtt message with topic: "+topic);
      var topicArray = topic.split("/");
      switch(topicArray[0]){
        case 'numericData':
          var key = topicArray[1];
          var value = parseFloat(message);
          //console.log("Got key: "+key+", value: "+value);
          this.$store.commit('updateNumericData',{key:key,value:value});
          break;
        default:
          break;
      }
      
    }.bind(this));
  }
})