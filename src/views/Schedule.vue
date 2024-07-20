<template>
  <div class="home min-h-screen">
    <Nav></Nav>
     <AgendasBlock v-for="agenda in agendas" class="px-2 md:px-8"
          :key="agenda.weekNumber"
          :weekNumber="agenda.weekNumber"
          :date="agenda.date"
          :dateName="agenda.dateName"
          :slug="agenda.slug"
          >
    </AgendasBlock>

  </div>

</template>

<script>
import AgendasBlock from '@/components/AgendasBlock.vue'
import Nav from '@/components/Nav.vue'
import gql from "graphql-tag";

export default {
    name: 'Schedule',
    data() {
        return {

        }
    },
    mounted () {
      window.scrollTo(0, 0);
    },
    components: {
      AgendasBlock,
      Nav
    },
    apollo: {
      agendas: {
          query: gql `
                        {
                          agendas(where: {semester: s2_2024}, orderBy: weekNumber_ASC) {
                            date
                            dateName
                            weekNumber
                            slug
                          }
                        }
        `,
        },
    }
}
</script>

<style>

</style>
