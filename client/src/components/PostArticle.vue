<template>
  <div>
    <div class="card text-white bg-success mb-3">
      <div class="card-header">
        <div class="form-group">
          <input class="form-control" placeholder="Title" type="text" v-model="title">
        </div>
      </div>
      <div class="card-body">
        <div class="form-group">
          <textarea class="form-control" rows="4" placeholder="input your articles" v-model="content"></textarea>
        </div>
        <div class="form-group">
          <input class="form-control-file" aria-describedby="fileHelp" type="file" id="file">
        </div>
        <div class="form-group">
        <input class="form-control form-control-sm" placeholder="category" type="text" v-model="category">
      </div>
      </div>
      <button type="button" class="btn btn-info" @click="sendArticle">Send Your Article</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      title: '',
      content: '',
      category: '',
      fileUpload: ''
    }
  },
  methods: {
    ...mapActions([
      'addArticle'
    ]),
    sendArticle () {
      let data = new FormData()
      data.append('title', this.title)
      data.append('content', this.content)
      data.append('category', this.category)
      data.append('image', document.getElementById('file').files[0])

      console.log(data, 'ini form multi')
      this.addArticle(data)
    }
  }
}
</script>

<style>

</style>
