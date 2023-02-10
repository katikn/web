import { createRouter, createWebHistory } from 'vue-router'
import allPosts from '@/components/allPosts.vue'
import userPost from '@/components/userPost.vue'
import newUser from '@/components/newUser.vue'
import loginUser from '@/components/loginUser.vue'
import newPost from '@/components/newPost.vue'

const routes = [
  {
    path: '/',
    redirect: {
      name: "all"
    }
  },
  {
    path: '/posts',
    name: 'all',
    component: allPosts
  },
  {
    path: '/posts/:id',
    component: userPost
  },
  {
    path: '/register',
    component: newUser
  },
  {
    path: '/login',
    component: loginUser
  },
  {
    path: '/newpost',
    component: newPost
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
