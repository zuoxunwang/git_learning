import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import VouRouter from 'vue-router'

Vue.use(Vuex)
Vue.use(VouRouter)
Vue.config.productionTip = false

const store = new Vuex.Store({
  state:{
    count:0
  },
  mutations:{
    increament(state){
      state.count++
    }
  },
  actions:{
    increament({commit}){
      setTimeout(() => {
        commit('increament')
      }, 2000);
    }
  },
  getters:{
    doubleCount(state){
      return state.count * 2
    }
  }
})

const router = new VouRouter({
  // mode:history,
  routes,
})
new Vue({
  store,routes,
  render: h => h(App),
}).$mount('#app')
