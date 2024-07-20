<template>
  <div class="agendaBlock">
    <router-link :to="{ path: '/schedule/' + slug }" :key="slug" class="flex flex-wrap mb-2 ff-e">
    <div class="text-left md:text-left mr-4">Week {{weekNumber}}</div>
    <div class="text-left mr-4">{{dateName}}</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'AgendasBlock',
  props: {
    weekNumber: Number,
    date: String,
    dateName: String,
    slug: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
