<template>
  <div class="w-full whitespace-pre-line flex border-t">
    <div class="pt-2 mr-4 w-24">{{category}}</div>  
    <div class="pt-2 mr-4 w-24">CSS</div>  
    <div class="pt-2">{{title}}</div>
    <div class="pt-2 ml-auto flex flex-wrap justify-end max-w-xlg">
      <div v-if="codepen" class="ml-4 mb-4">
        <a :href="codepen" target="_blank" class="ff-s fs-1 px-4 pb-1 bg-lightpurple text-black rounded">Code ↗</a></div>
      <div v-if="screenrecording" class="ml-4 mb-4">
        <a :href="screenrecording" target="_blank" class="ff-s fs-1 px-4 pb-1 bg-lightgreen text-black rounded">Recording ↗</a></div>
      <div class="ml-4 mb-4">
          <router-link :to="{ path: '/a-z/' + slug }" :key="slug">
            <span class="ff-s fs-1 px-4 pb-1 bg-gray text-black rounded">Read</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TermBlock',
  props: {
    title: String,
    byline: String,
    slug: String,
    category: String,
    kind: String,
    codepen: String,
    screenrecording: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
