import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/addNote',
      name: 'addNote',
      component: () => import('../views/AddNoteView.vue')
    },
    {
      path: '/modifyNote',
      name: 'modifyNote',
      component: () => import('../views/NoteDetailView.vue')
    }
  ]
})

export default router
