<template>
  <div class="home min-h-screen text-[magenta]">

<Nav></Nav>
    <!-- <div class="fixed p-2 top-0 left-0 h-screen w-screen backdrop-blur-2xl z-50 notice flex items-center">
      <div>15.01.24 <br> Digital Publishing(DPub) is currently being updated. Please return shortly. <br> For more infomation contact Uriah Gray. <br> Uriah.Gray@monash.edu</div>
    </div> -->
    <div class="px-2 md:px-8 mb-2 ff-f fs-large hover:font-sans">
      <div v-for="introduction in introductions" class="">
        {{introduction.byline}}
      </div>
    </div>
    <div class="">
      <div v-for="introduction in introductions" class="px-2 md:px-8">
        <div class="background">
          <img class="m-auto" :src="introduction.background.url" alt="">
        </div>
      </div>
    </div>

    
    <!-- <div class="px-2 md:px-8">
      <div v-for="introduction in introductions" class="">
        <div v-html="introduction.excerpt"></div>
      </div>
    </div> -->

    <!-- <div class="p-2 md:p-4">
      <div class="p-2 mb-2 md:mb-0 md:p-4">
        <div class="flex flex-wrap justify-between">
          <div class="w-full md:w-auto">Schedule</div>
          <router-link class="border-b-2" to="/schedule">Full schedule</router-link>
        </div>
      </div>
          <AgendasBlock v-for="agenda in agendas"
          :key="agenda.weekNumber"
          :weekNumber="agenda.weekNumber"
          :date="agenda.date"
          :dateName="agenda.dateName"
          :slug="agenda.slug"
          >
          </AgendasBlock>
    </div> -->

    <!-- <div class="p-2 md:p-4 mb-12">
      <div class="p-2 mb-2 md:mb-0 md:p-4 flex flex-wrap justify-between">
        <div>Featured projects</div>
        <div>
          <router-link class="border-b-2" to="/projects">All projects</router-link>
        </div>
      </div>
      <div class="flex flex-wrap -mx-4 px-2">
        <ProjectsBlock v-for="project in projects" :title="project.projectTitle" :byline="project.byline"
          :slug="project.slug" :key="project.projectTitle"> </ProjectsBlock>
      </div>
    </div> -->

    <!-- <div class="p-4 pb-12 shadow-inner">
      <div class="p-4 flex flex-wrap justify-between">
        <div>Featured resources</div>
        <div>
          <router-link class="border-b-2" to="/resources">All resources</router-link>
        </div>        
      </div>
      <div class="flex flex-wrap -mx-4 px-2">
        <ResourcesBlock v-for="resource in resources" 
        :key="resource.name"
        :name="resource.name"
        :download="resource.download"
        :link="resource.link"
        :thumbnail="resource.thumbnail"
        :description="resource.description"
        > </ResourcesBlock>
      </div>
    </div> -->

    <!-- <div class="p-4 pb-12 shadow-inner hidden md:block">
      <div class="p-4 flex flex-wrap justify-between">
        <div>Timeline</div>
        <div>
          
        </div>        
      </div>

        <div v-for="introduction in introductions" :key="introduction.id" class="px-2 md:px-4">
          <div class="mt-8 flex flex-wrap ff-e">
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

    </div>     -->

    

    <div class="p-4">
      <div class="p-4 ff-f hover:font-sans">
        Email <br>
        Uriah is available for Monash emails Thursday afternoons. uriah.gray@monash.edu <br> Monash Art Design &
        Architecture. CC-NC Uriah Gray {{ new Date().getFullYear() }}
      </div>
    </div>

  </div>

</template>

<script>
import ProjectsBlock from '@/components/ProjectsBlock.vue'
import ResourcesBlock from '@/components/ResourcesBlock.vue'
import AgendasBlock from '@/components/AgendasBlock.vue'
import Nav from '@/components/Nav.vue'
import gql from "graphql-tag";

export default {
  name: 'Home',
  data() {
    return {
      introduction: {
        byline: null,
        excerpt: null,
        background: {
          url: null
        }
      }
    }
  },
  components: {
    ProjectsBlock,
    ResourcesBlock,
    AgendasBlock,
    Nav
  },
  mounted () {
    window.scrollTo(0, 0)
  },  
  apollo: {
    projects: {
      query: gql `
                    {
                      projects(where: {category_contains_all: Featured}) {
                        projectTitle
                        slug
                        byline
                      }
                    }
    `,
    },
    introductions: {
      query: gql `
                    {
                      introductions {
                        byline
                        excerpt
                        foreground {
                          url
                        }
                        timelines {
                          id
                          weekNumber
                          details
                          description
                          date
                        }                         
                        background {
                          url
                        }
                      }
                    }
    `,
    },
   resources: {
      query: gql `
                    {
                      resources(where: {semester: s1_2023, category: Featured}) {
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
    `,
    },
   agendas: {
      query: gql `
                    {
                      agendas(where: {semester: s2_2022}, orderBy: weekNumber_ASC) {
                        date
                        dateName
                        weekNumber
                        slug
                      }
                    }
    `,
    },        
  },
}
</script>

<style>

</style>
