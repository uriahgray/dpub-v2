import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Schedule from '../views/Schedule.vue'
import Agenda from '../views/Agenda.vue'
import Projects from '../views/Projects.vue'
import Project from '../views/Project.vue'
import Resources from '../views/Resources.vue'
import Introduction from '../views/Introduction.vue'
import Timeline from '../views/Timeline.vue'
import AZ from '../views/AZ.vue'
import Term from '../views/Term.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/schedule',
      name: 'Schedule',
      component: Schedule
    },
    {
      path: '/schedule/:slug',
      name: 'Agenda',
      component: Agenda
    }, 
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/projects/:slug',
      name: 'Project',
      component: Project
    },
    {
      path: '/resources',
      name: 'Resources',
      component: Resources
    },
    {
      path: '/introduction',
      name: 'Introduction',
      component: Introduction
    },
    {
      path: '/timeline',
      name: 'Timeline',
      component: Timeline
    },
    {
      path: '/a-z',
      name: 'AZ',
      component: AZ
    },
    {
      path: '/a-z/:slug',
      name: 'Term',
      component: Term
    }                   
  ]
})

export default router
