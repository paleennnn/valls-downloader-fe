<template>
  <nav class="bg-gray-800 border-b border-gray-700 sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <router-link to="/" class="flex items-center gap-2 font-bold text-xl">
          <span class="text-primary"></span>
          VallsDownloader
        </router-link>

        <!-- Navigation Links -->
        <div class="hidden md:flex items-center gap-6">
          <router-link
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="hover:text-primary transition"
            :class="{ 'text-primary': isActive(link.path) }"
          >
            {{ link.label }}
          </router-link>
        </div>

        <!-- Language Selector -->
        <div class="text-sm">
  <select
    v-model="language"
    class="bg-transparent text-gray-400 focus:outline-none cursor-pointer"
  >
    <option value="id">🇮🇩 Indonesia</option>
    <option value="en">🇺🇸 English</option>
  </select>
</div>

      </div>
    </div>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { ref } from 'vue'

const language = ref('id')

const route = useRoute()

const navLinks = [
  { label: 'Beranda', path: '/' },
  { label: 'TikTok', path: '/tiktok' },
  { label: 'Instagram', path: '/instagram' },
  { label: 'X', path: '/twitter' },
  { label: 'Facebook', path: '/facebook' },
  { label: 'YouTube', path: '/youtube' },
  { label: 'Bilibili', path: '/bilibili' },
  { label: 'Tentang', path: '/about' },
]

const isActive = (path) => {
  return route.path === path
}
</script>
