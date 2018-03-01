import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'
import swal from 'sweetalert'

Vue.use(Vuex)

const pres = 'auth-hacktivpres'
const baseUrl = 'http://localhost:3000/api'

const store = new Vuex.Store({
  state: {
    isLogin: false
  },
  mutations: {
    SET_LOGIN (state, payload) {
      state.isLogin = payload
    }
  },
  actions: {
    signin ({ commit }, payload) {
      axios.post(baseUrl + '/users/signin', payload)
        .then(response => {
          localStorage.setItem(pres, response.data.token)
          commit('SET_LOGIN', true)
          router.push({name: 'QuestionList'})
        })
        .catch(err => {
          swal({
            text: `${err.response.data.message}`,
            icon: 'error',
            button: 'next'
          })
          console.log(err)
        })
    },
    checkLogin ({ commit }) {
      if (localStorage.getItem(pres)) {
        commit('SET_LOGIN', true)
      }
    },
    signout ({ commit }) {
      localStorage.clear()
      commit('SET_LOGIN', false)
      router.push({name: 'LandingPage'})
    },
    signup ({ commit }, payload) {
      axios.post(baseUrl + '/users/signup', payload)
        .then(response => {
          swal({
            text: `${response.data.message}`,
            icon: 'success',
            button: 'next'
          })
        })
        .catch(err => {
          swal({
            text: `${err.response.data.message}`,
            icon: 'error',
            button: 'next'
          })
          console.log(err)
        })
    }

  }
})

export default store
