<template>
  <div class="home min-h-screen">
      <Nav></Nav>
      <div class="px-2 flex flex-wrap">
        <ResourcesBlock v-for="resource in resources" 
        :key="resource.name"
        :name="resource.name"
        :download="resource.download"
        :link="resource.link"
        :thumbnail="resource.thumbnail"
        :description="resource.description"
        > </ResourcesBlock>
      </div>

  </div>

</template>

<script>
import gql from "graphql-tag";
import ResourcesBlock from '@/components/ResourcesBlock.vue'
import Nav from '@/components/Nav.vue'

export default {
    name: 'Resources',
    data() {
        return {
          active: false 
        }
    },
    components: {
        Nav,
        ResourcesBlock

    },
    mounted () {
      window.scrollTo(0, 0)
    },
    apollo: {
   resources: {
      query: gql `
                    {
                      resources(where: {semester: s1_2023}) {
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
    }
}
</script>

<style>

</style>
