<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <router-link :to="{name: 'Home'}" class="navbar-brand" style="letter-spacing: 5px;" href="#"> Hacktivpres </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarColor02">
        <ul class="navbar-nav mr-auto" style="letter-spacing: 2px;">
          <li class="nav-item active">
            <router-link :to="{name: 'ArticleList'}" class="nav-link">Articles <span class="sr-only">(current)</span></router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About Us</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <div class="row col-xs-6">
          <button v-if="isLogin" @click="signout" class="btn btn-primary btn-sm my-2 my-sm-0" type="button">Sign Out</button>
          <router-link :to="{name: 'Signup'}" type="button" class="btn btn-sm btn-link" style="text-decoration: none;" >Sign Up</router-link>
          </div>
        </form>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  computed: {
    ...mapState([
      'isLogin'
    ])
  },
  methods: {
    ...mapActions([
      'signout',
      'checkLogin'
    ])
  },
  created () {
    this.checkLogin()
  }
}
</script>

<style>
.navbar {
  padding-top: 10px;
  padding-bottom: 5px;
}
</style>
