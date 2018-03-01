<template>
  <div class="flx-crd">
    <div class="card mb-3 col-md-6" v-for="article in articles" :key="article._id">
      <h3 class="card-header">{{article.title}}</h3>
      <div class="card-body">
      </div>
      <img style="height: 200px; width: 100%; display: block;" :src="article.image" alt="Card image">
      <div class="card-body">
        <p class="card-text">{{ article.content.substr(0, 50)}}</p>
      </div>
      <div class="card-body">
        <router-link :to="{ name: 'ArticleDetail', params: { id: article._id } }" class="card-link">View Detail</router-link>
        <a href="#" class="card-link"> {{ article.author.username }}</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState([
      'articles'
    ])
  },
  methods: {
    ...mapActions([
      'getAllArticles'
    ])
  },
  created () {
    this.getAllArticles()
  }
}
</script>

<style scoped>
.flx-crd {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
