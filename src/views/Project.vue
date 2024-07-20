<template>
  <div class="home min-h-screen">
    <div class="w-full pt-4 px-16 pb-0 text-left md:text-left top-0 left-0 fixed bff">
      <span class="ff-e block max-w-xs md:max-w-none overflow-ellipsis overflow-hidden whitespace-nowrap">{{project.projectTitle}}</span>
      <span class="hidden md:inline-block">{{project.byline}}</span>
      </div>
    <router-link to="/projects" class="close top-3 md:top-[1em] left-2 md:left-8 fixed z-30"></router-link> 

    <div v-if="project.content" class="px-2 md:px-8 mt-4 py-12 w-full md:w-4/5">
      <div v-html="project.content.html" class="p-rules img-rules whitespace-pre-line"></div> 
    </div>

    <div class="hidden md:block sidebar fixed top-0 right-0 h-screen overflow-scroll w-40 ">
      <div v-for="imageSingle in project.thumbnailGallery">
        <img :src="imageSingle.url">
      </div>
    </div>

      <div class="px-2 md:px-8 w-full md:w-4/5">
        <ToggleBlock v-for="toggleBlock in project.allToggleComps" 
        :key="toggleBlock.name"
        :title="toggleBlock.titleToggle"
        :thumbnail="toggleBlock.toggleImage"
        :content="toggleBlock.contentToggle"
        > </ToggleBlock>
      </div>  

    <div v-if="project.resources.length > 0" class="p-4 pb-12">
      <div class="p-4 flex flex-wrap justify-between">
        <div>Attached resources</div>
        <div>
          <router-link class="border-b-2" to="/resources">All resources</router-link>
        </div>        
      </div>
      <div class="flex flex-wrap -mx-4 px-2">
        <ResourcesBlock v-for="resource in project.resources" 
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
import ToggleBlock from '@/components/ToggleBlock.vue'

export default {
    name: 'Project',
    data() {
        return {
              routeParam: this.$route.params.slug
        }
    },
    components: {
      ResourcesBlock,
      ToggleBlock
    },
  watch: {
    $route: 'fetchDataAgain',
  },     
  methods: { 
    fetchDataAgain() { 
      this.routeParam = this.$route.params.slug;
      console.log(this.routeParam);
      this.$apollo.queries.project.skip = false
      this.$apollo.queries.project.refresh();
      }
    },
    mounted () {
      window.scrollTo(0, 0)
        this. $nextTick(function () {
          // put code here
        })      
    },     
    apollo: {
      project: {
         query: gql`
          query getProject($slug: String) {
            project(where: {slug: $slug}) {
              projectTitle
              byline
              content {
                html
              }
              thumbnailGallery {
                  url
              }              
              allToggleComps {
                ... on ToggleComp {
                  id
                  contentToggle {
                    html
                  }
                  titleToggle
                  toggleImage {
                    url
                  }                  
                }
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
    }
}
</script>

<style>

.sidebar {
  padding-right:1rem;
  padding-left:1rem;
  transition:0.5s;
  
}

.sidebar img {
  margin: 1rem 0rem;
  max-width: 100%;
  overflow: hidden;
  
}

.sidebar:hover {
  width: 80%;
  transition:0.5s;
}

.sidebar:hover img {
}

video {
  width:75%;
  margin:3rem auto;
  border-radius:1.5rem;
}

</style>
