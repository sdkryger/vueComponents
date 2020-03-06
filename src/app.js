import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'


Vue.component('welcome-component', require('./components/WelcomeComponent.vue').default);
Vue.component('modify-numeric-data-component', require('./components/ModifyNumericDataComponent.vue').default);
Vue.component('numeric-data-sim-component', require('./components/NumericDataSimComponent.vue').default);
Vue.component('radial-gauge-component', require('./components/RadialGaugeComponent.vue').default);
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    state:'welcome',
    numericData:{
      speed:12,
      rpm:1000,
      voltage: 13.8,
      coolantTemp: 105.6,
      fuelLevel:0.75
    }
  },
  mutations: {
  	increment: state => state.count++,
    decrement: state => state.count--,
    updateState (state, payload){
      state.state = payload;
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
    message:"app message"
  },
  mounted: function () {
    console.log("root mounted");
  },
  render: h => h(App)
})