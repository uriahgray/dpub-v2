<template>
      <div class="w-full md:w-1/2 lg:w-1/3 px-6 flex items-start">
        <div class="text-center w-full bg-black text-white px-2 py-2 mb-1">
          <a v-if="download" :href="download.url">
            <img v-if="thumbnail" class="w-auto block max-h-48 mx-auto"
              :src="thumbnail.url"></a>
          <img v-else-if="thumbnail" class="w-auto block p-4 max-h-48 mx-auto"
              :src="thumbnail.url">    
          <span class="block"> {{name}}</span>
          <a v-if="download" class="ff-e inline-block my-8 border-b-2"
            :href="download.url">Download</a>
          <a v-if="link" class="ff-e break-words border-b-2 my-8 inline-block" :href="link">Link</a>
          <div v-if="description">
            {{description}}
          </div>
        </div>



      </div>
</template>

<script>
export default {
  name: 'ToggleBlock',
  props: {
    name: String,
    download: Object,
    link: String,
    thumbnail: Object,
    description: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
