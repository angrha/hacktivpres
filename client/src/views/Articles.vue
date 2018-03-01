<template>
  <div class="bg-home">
    <div class="container-fluid">
      <div class="flx-hm col-md-8">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions([
      'checkLogin'
    ])
  },
  created () {
    this.checkLogin()
  }
}
</script>

<style>

.flx-hm {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 20px;
  background-color: blue;
}
</style>
