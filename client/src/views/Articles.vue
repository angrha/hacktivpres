<template>
  <div>
    <div class="container-fluid flx-home">
      <div class="flx-hm col-md-8">
        <router-view></router-view>
      </div>
      <PostArticle class="ps"/>
    </div>
  </div>
</template>

<script>
import PostArticle from '@/components/PostArticle'
import { mapActions } from 'vuex'
export default {
  components: {
    PostArticle
  },
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

.flx-home {
  display: flex;
  flex-grow: wrap;
  justify-content: flex-start;
  align-items: flex-start;
}

.ps {
  margin-top: 30px;
  width: 100%;
}
</style>
