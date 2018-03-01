<template>
  <div class="container flx">
    <div class="col-lg-5 col-lg-offset-6">
      <form>
        <fieldset>
          <div class="form-group row" style="margin: auto;" >
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
            <!-- button sign in -->
            <div class="col-sm-12">
              <button @click="setSignin(formData)" type="button" class="mg btn btn-info btn-block spc">SIGN IN</button>
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
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'signin'
    ]),
    setSignin (user) {
      this.signin(user)
        .then(() => {
          this.formData.email = ''
          this.formData.password = ''
          this.$router.push({name: 'ArticleList'})
        })
        .catch(err => console.log(err))
    }
  }
}
</script>

<style>
.flx {
  display: flex;
  justify-content: center;
  margin-top: 100px;
}
</style>
