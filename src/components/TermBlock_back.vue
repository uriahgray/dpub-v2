<template>
  <div class="w-full md:w-1/3 px-2 ">
  <div class="fs-1">{{category}}</div>
    <div class="px-2 pt-2 pb-4 card shadow-inner rounded">
      <div class="text-base leading-base md:text-lg md:leading-lg">
          <div class="ff-e pt-4">{{title}}</div>
          <div class="ff-s"><a :href="codepen" target="_blank" class="ff-s fs-1 px-4 pb-1 bg-gray text-black rounded">Code example</a></div>
          <div class="ff-s"><a :href="screenrecording" target="_blank" class="ff-s fs-1 px-4 pb-1 bg-gray text-black rounded">Screen recording</a></div>
          <router-link :to="{ path: '/A-Z/' + slug }" :key="slug">
            <span class="ff-s fs-1 px-4 pb-1 bg-black text-white rounded">Read more</span>
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
    codepen: String,
    screenrecording: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
