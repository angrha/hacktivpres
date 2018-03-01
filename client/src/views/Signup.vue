<template>
  <div class="container-fluid flx">
    <div class="col-lg-5 col-lg-offset-6">
      <form>
        <fieldset>
          <div class="form-group row" style="margin: auto;" >
            <!-- username -->
            <label for="staticUsername" class="col-sm-3 col-form-label">Username</label>
            <div class="col-sm-9">
              <input v-model="formData.username" class="form-control" id="staticUsername" placeholder="Type Your Username" type="text">
            </div>
            <!-- email -->
            <label for="staticEmail" class="col-sm-3 col-form-label">Email</label>
            <div class="col-sm-9">
              <input v-model="formData.email" class="form-control" id="staticEmail" placeholder="Type Your Email" type="email">
            </div>
            <!-- password -->
            <label for="staticPass" class="col-sm-3 col-form-label">Password</label>
            <div class="col-sm-9">
              <input v-model="formData.password" class="form-control" id="staticPass" placeholder="Type Your Password" type="password">
            </div>
            <!-- button sign up -->
            <div class="col-sm-12">
              <button @click="setSignup(formData)" type="button" class="btn btn-success btn-block">SIGN UP</button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      formData: {
        username: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'signup'
    ]),
    setSignup (user) {
      this.signup(user)
        .then(() => {
          this.formData.username = ''
          this.formData.email = ''
          this.formData.password = ''
          this.$router.push({name: 'Home'})
        })
        .catch(err => console.log(err))
    }
  }
}
</script>

<style>

</style>
