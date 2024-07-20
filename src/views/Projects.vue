<template>
  <div class="home min-h-screen">
    <Nav></Nav>

    <div class="px-4 mb-12">
    <div class="flex flex-wrap -mx-4 px-6">
      <ProjectsBlock v-for="project in projects" :title="project.projectTitle" :byline="project.byline"
        :slug="project.slug" :key="project.projectTitle"> </ProjectsBlock>
    </div>
    </div>

  </div>

</template>

<script>
import gql from "graphql-tag";
import Nav from '@/components/Nav.vue'
import ProjectsBlock from '@/components/ProjectsBlock.vue'

export default {
    name: 'Projects',
    data() {
        return {

        }
    },
    components: {
      ProjectsBlock,
      Nav
    },
    mounted () {
      window.scrollTo(0, 0)
    },
    apollo: {
    projects: {
      query: gql `
                    {
                      projects(where: {category_contains_all: Active}) {
                        projectTitle
                        slug
                        byline
                      }
                    }
    `,
    },
    }
}
</script>

<style>

</style>
