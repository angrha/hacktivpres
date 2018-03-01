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
    isLogin: false,
    articles: []
  },
  mutations: {
    SET_LOGIN (state, payload) {
      state.isLogin = payload
    },
    LOAD_ARTICLES (state, payload) {
      state.articles = payload
    }
  },
  actions: {
    signin ({ commit }, payload) {
      axios.post(baseUrl + '/users/signin', payload)
        .then(response => {
          localStorage.setItem(pres, response.data.token)
          commit('SET_LOGIN', true)
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
      router.push({name: 'Home'})
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
    },
    getAllArticles ({ commit }) {
      axios.get(baseUrl + '/articles')
        .then(response => {
          commit('LOAD_ARTICLES', response.data.articles)
        })
        .catch(err => {
          swal({
            text: `${err}`,
            icon: 'error',
            button: 'next'
          })
          console.log(err)
        })
    }

  }
})

export default store
