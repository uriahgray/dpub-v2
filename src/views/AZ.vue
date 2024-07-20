<template>
  <div class="home min-h-screen">
    <Nav></Nav>

    <div class="p-4 mb-12">  
    <div class="flex flex-wrap px-4">
      <div class="mb-2 text-gray">This is currently a work in progress</div>
      <TermBlock v-for="term in terms"
      :title="term.title"
      :slug="term.slug"
      :category="term.termCategory"
      :kind="term.termKind"
      :codepen="term.codepen"
      :screenrecording="term.screenrecording"
      :key="term.id"> 
      </TermBlock>
    </div>
    </div>

  </div>

</template>

<script>
import gql from "graphql-tag";
import Nav from '@/components/Nav.vue'
import TermBlock from '@/components/TermBlock.vue'

export default {
    name: 'A-Z',
    data() {
        return {

        }
    },
    components: {
      TermBlock,
      Nav
    },
    mounted () {
      window.scrollTo(0, 0)
    },
    apollo: {
    terms: {
      query: gql `
                    {
                      terms(orderBy: termCategory_ASC) {
                        title
                        termCategory
                        id
                        termKind
                        slug
                        codepen
                        screenrecording
                      }
                    }
    `,
    },
    }
}
</script>

<style>

</style>
