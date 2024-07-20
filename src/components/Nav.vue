<template>
  <div id="nav" class="flex flex-wrap flex-col md:flex-row md:justify-normal w-full pt-4 px-2 md:px-8 mb-8">
      <router-link class="mr-2" to="/">
        <span class="ff-e">Digital Publishing (https://d-p-u-b.com)</span>
      </router-link>
      <router-link class="mr-2" to="/schedule">Schedule</router-link>
      <router-link class="mr-2" to="/projects">Projects</router-link>
      <router-link class="mr-2" to="/resources">Resources</router-link>
      <span id="timer">[{{ timestamp }}]</span>
      <!-- <router-link class="mr-2 text-red" to="/a-z">A-Z</router-link> -->
  </div>
</template>

<script>
export default {
  name: 'Nav',
  el: '#timer',
  props: {
    msg: String
  },
  data: {
      timestamp: "..."
  },
  created() {
      setInterval(this.getNow, 1000);
  },
  methods: {
      getNow: function() {
          const today = new Date();
          const date = (today.getMonth()+1)+'-'+today.getDate();
          const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
          const dateTime = date +' '+ time;
          this.timestamp = dateTime;
      }
  }    
}
</script>


<style scoped>
.router-link-exact-active {
  @apply border-b-2;
}
</style>
