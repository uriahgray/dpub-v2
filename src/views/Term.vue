<template>
  <div class="home min-h-screen">
    <div class="w-full pt-4 px-2 md:px-8 pb-4 text-left md:text-center top-0 left-0 fixed shadow-inner bff">
      <span class="ff-e block max-w-xs md:max-w-none overflow-ellipsis overflow-hidden whitespace-nowrap">{{term.title}}</span>
      </div>
    <router-link to="/a-z" class="close top-4 right-4 md:right-8 fixed z-30 "></router-link> 

    <div v-if="term.text" class="px-2 md:px-8 mt-20 py-12">
      <div class="border-t border-b border-black">Overview</div>
      <div v-html="term.text.html" class="p-rules img-rules whitespace-pre-line"></div> 
    </div>

  <div class="px-2 md:px-8 mt-0 py-12">
      <div class="border-t border-b border-black mb-4">
        Demonstration files
      </div>
      <a :href="term.codepen" v-if="term.codepen" target="_blank" class="ff-s fs-1 px-4 pb-1 bg-lightpurple text-black rounded">Code example ↗</a>
  </div>

  <div class="px-2 md:px-8 mt-0 py-12">
      <div class="border-t border-b border-black mb-4">
        Documentation <br>
      </div>
      <div v-if="term.screenrecordingNote" class="ff-s">{{term.screenrecordingNote}}</div>
      <div v-if="term.screenrecording" class="ff-s"><a :href="term.screenrecording" target="_blank" class="ff-s fs-1 px-4 pb-1 bg-lightgreen text-black rounded">Recording ↗</a></div>    
  </div>

    <div v-if="term.resources.length > 0" class="p-4 pb-12 shadow-inner">
      <div class="p-4 flex flex-wrap justify-between">
        <div>Attached resources</div>        
      </div>
      <div class="flex flex-wrap -mx-4 px-2">
        <ResourcesBlock v-for="resource in term.resources" 
        :key="resource.name"
        :name="resource.name"
        :download="resource.download"
        :link="resource.link"
        :thumbnail="resource.thumbnail"
        :description="resource.description"
        > </ResourcesBlock>
      </div>
    </div>   

  </div>

</template>

<script>
import gql from "graphql-tag";
import ResourcesBlock from '@/components/ResourcesBlock.vue'

export default {
    name: 'Term',
    data() {
        return {
              routeParam: this.$route.params.slug
        }
    },
    components: {
      ResourcesBlock
    },
  watch: {
    $route: 'fetchDataAgain',
  },     
  methods: { 
    fetchDataAgain() { 
      this.routeParam = this.$route.params.slug;
      console.log(this.routeParam);
      this.$apollo.queries.term.skip = false
      this.$apollo.queries.term.refresh();
      }
    },
    mounted () {
      window.scrollTo(0, 0)
    },     
    apollo: {
      term: {
         query: gql`
          query getTerm($slug: String) {
            term(where: {slug: $slug}) {
              title
              codepen
              screenrecording
              screenrecordingNote
              resources {
                name
                download {
                  url
                }
                thumbnail {
                  url
                }
                link
                description
              }              
              text {
                html
                }
              }             
            }
          
      `,
        variables() {
          return {
            slug: this.routeParam
          };
        }       
      }      
    }
}
</script>

<style>

</style>
