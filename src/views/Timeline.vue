<template>
  <div class="home min-h-screen">
  <!-- <router-link to="/" class="close top-4 right-8 absolute"></router-link>   -->
  <Nav></Nav>

        <div v-for="introduction in introductions" :key="introduction.id" class="px-2 md:px-8 mb-8">
          
          <div class="mt-24 flex flex-wrap ff-e">
            <div class="w-1/2 md:w-1/4">Week</div>
            <div class="w-1/2 md:w-1/4">Date</div>
            <div class="w-1/2 md:w-1/4">Description</div>
            <div class="w-1/2 md:w-1/4">Milestone</div>
          </div>
          <div v-for="timeline in introduction.timelines" :key="timeline.id" class="whitespace-pre-line flex flex-wrap border-t hover:bg-black hover:text-white">
            <div class="w-1/2 md:w-1/4">{{timeline.weekNumber}}</div>
            <div class="w-1/2 md:w-1/4">{{timeline.date}}</div>
            <div class="w-1/2 md:w-1/4">{{timeline.description}}</div>
            <div class="w-1/2 md:w-1/4">{{timeline.details}}</div>
          </div>
        </div>
  </div>

</template>

<script>
import gql from "graphql-tag";
import Nav from '@/components/Nav.vue'

export default {
    name: 'Timeline',
    data() {
        return {

        }
    },
    components: {
      Nav
    },
    mounted() {
      window.scrollTo(0,0)
    },
    apollo: {
    introductions: {
      query: gql `
                    {
                      introductions {
                        id
                        byline
                        essay {
                          html
                        }
                        timelines {
                          id
                          weekNumber
                          details
                          description
                          date
                        }                                                                        
                        excerpt
                        foreground {
                          url
                        }
                        background {
                          url
                        }
                      }
                    }
    `,
    },
    }
}
</script>

<style>

</style>
