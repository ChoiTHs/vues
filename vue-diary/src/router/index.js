import { createRouter, createWebHashHistory } from 'vue-router'
import DiaryView from '@/views/DiaryView.vue'
import TodoView from '@/views/TodoPage.vue'

const routes = [
  {
    path:"/",
    redirect: "/diary"
  },
  {
    path:"/diary",
    component: DiaryView
  },
  {
    path:"/to-do",
    component: TodoView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
