<template>
  <div class="w-full md:w-1/2 pl-2 ">
    <router-link :to="{ path: '/projects/' + slug }" :key="slug" class="p-2 card flex flex-wrap justify-center content-center min-h-33 
    md:min-h-1/3 bg-black text-white mb-10 md:mb-1 ">
      <div class="text-center">
          <span class="ff-e">{{title}}</span> <br>
          {{byline}}
      </div>
    </router-link>
    </div>
</template>

<script>
export default {
  name: 'ProjectsBlock',
  props: {
    title: String,
    byline: String,
    slug: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
