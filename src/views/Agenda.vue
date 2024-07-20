<template>
  <div class="home min-h-screen">
    <div class="w-full pt-4 px-16 pb-4 text-left md:text-left top-0 left-0 fixed bff">
      Week {{agenda.weekNumber}} <span class="hidden md:inline-block">, {{agenda.dateName}}</span></div>
    <router-link to="/schedule" class="close top-3 md:top-[1em] left-2 md:left-8 fixed z-30"></router-link>  


    <div v-if="agenda.content" class="px-2 md:px-8 mt-4 py-12">
      <div class="pb-1">Outline</div>
      <div v-html="agenda.content.html" class="p-rules img-rules whitespace-pre-line"></div>
    </div>

    <div class="px-2 md:px-8 pb-12">
      <div class="">Semester Resources</div>
      <div class="flex flex-wrap -mx-4 px-2">
        <ResourcesBlock v-for="resource in resources"
        :key="resource.id"
        :name="resource.name"
        :link="resource.link"
        >
        </ResourcesBlock>
      </div>
    </div>    

    <div v-if="agenda.resources.length > 0" class="px-2 md:px-4 pb-12">
      <div class="p-0 py-4 md:p-4 flex flex-wrap justify-between">
        <div>Attached resources</div>
        <div>
          <router-link class="border-b-2" to="/resources">All resources</router-link>
        </div>        
      </div>
      <div class="flex flex-wrap -mx-4 px-2">
        <ResourcesBlock v-for="resource in agenda.resources" 
        :key="resource.name"
        :name="resource.name"
        :download="resource.download"
        :link="resource.link"
        :thumbnail="resource.thumbnail"
        :description="resource.description"
        > </ResourcesBlock>
      </div>
    </div>

    <div v-if="agenda.additional" class="px-2 md:px-8 py-4 bg-black text-white">
      <div class="text-left">Additional Week {{agenda.weekNumber}} Reader</div>
      <div v-html="agenda.additional.html" class="p-rules img-rules whitespace-pre-line"></div>
    </div>        

  </div>

</template>

<script>
import gql from "graphql-tag";
import ResourcesBlock from '@/components/ResourcesBlock.vue'

export default {
    name: 'Agenda',
    data() {
        return {
          routeParam: this.$route.params.slug,
          agenda: {
            weekNumber: ' '
          }
          
        }
    },
  watch: {
    $route: 'fetchDataAgain',
  },
  mounted () {
  window.scrollTo(0, 0)
  },       
  methods: { 
    fetchDataAgain() { 
      this.routeParam = this.$route.params.slug;
      console.log(this.routeParam);
      this.$apollo.queries.agenda.skip = false
      this.$apollo.queries.agenda.refresh();
      }
    },    
    components: {
      ResourcesBlock
    },
  apollo: {
      resources: {
          query: gql `
        {
          resources(where: {semester: s2_2021, type: agenda}) {
            id
            name
            link
          }
        }
    `,
         },
      agenda: {
         query: gql`
          query getAgenda($slug: String) {
            agenda(where: {slug: $slug}) {
              date
              dateName
              weekNumber              
              content {
                html
              }
              timelines {
                id
                weekNumber
                details
                description
                date
              }              
              additional {
                 html
              }
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
            }
          }
      `,
        variables() {
          return {
            slug: this.routeParam
          };
        }       
      }
    },
}
</script>

<style>

</style>
