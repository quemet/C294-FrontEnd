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
      path: '/noteDetail',
      name: 'noteDetail',
      component: () => import('../views/NoteDetailView.vue')
    },
    {
      path: '/addNote',
      name: 'addNote',
      component: () => import('../views/AddNoteView.vue')
    }
  ]
})

export default router
