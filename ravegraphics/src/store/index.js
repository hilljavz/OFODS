import Vue from 'vue'
import Vuex from 'vuex'
import authentication from "./authentication";
import HTTP from '../http'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    baseUrl: '/api',
    token:localStorage.getItem('access_token') || null
  },
  mutations: {
    SET_TOKEN(state,token){
      state.token=token
    },
    REMOVE_TOKEN(state){
      state.token=null
      localStorage.removeItem('access_token')
    }
  },
  actions: {

  },
  modules: {
    authentication
  }
})
