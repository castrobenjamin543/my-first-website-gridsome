<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />

    <h1>Hello, world!</h1>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores
    </p>

    <p class="home-links">
      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p>

    {{data.name}} - {{data.age}}

  </Layout>
</template>

<script>
import data from "~/data/info.json"
export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  data(){
    return {
      data
    }
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
