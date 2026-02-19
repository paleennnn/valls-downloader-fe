import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/tiktok',
    name: 'TikTok',
    component: () => import('@/pages/PlatformPage.vue'),
    props: { platform: 'tiktok' },
  },
  {
    path: '/instagram',
    name: 'Instagram',
    component: () => import('@/pages/PlatformPage.vue'),
    props: { platform: 'instagram' },
  },
  {
    path: '/youtube',
    name: 'YouTube',
    component: () => import('@/pages/PlatformPage.vue'),
    props: { platform: 'youtube' },
  },
  {
    path: '/facebook',
    name: 'Facebook',
    component: () => import('@/pages/PlatformPage.vue'),
    props: { platform: 'facebook' },
  },
  {
    path: '/twitter',
    name: 'X',
    component: () => import('@/pages/PlatformPage.vue'),
    props: { platform: 'twitter' },
  },
  {
    path: '/bilibili',
    name: 'Bilibili',
    component: () => import('@/pages/PlatformPage.vue'),
    props: { platform: 'bilibili' },
  },
  {
    path: '/about',
    name: 'Tentang',
    component: () => import('@/pages/About.vue'),
  },
  {
    path: '/terms',
    name: 'Terms',
    component: () => import('@/pages/Terms.vue'),
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: () => import('@/pages/Privacy.vue'),
  },
  {
    path: '/dmca',
    name: 'DMCA',
    component: () => import('@/pages/DMCA.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
