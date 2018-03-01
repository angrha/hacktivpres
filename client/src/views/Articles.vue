<template>
  <div class="bg-home">
    <div class="container-fluid">
      <div class="flx-hm">
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
  margin-top: 60px;
}
</style>
