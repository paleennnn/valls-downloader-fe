<template>
  <div class="bg-gray-900 min-h-screen">
    <!-- Hero Section -->
    <section class="bg-gradient-to-b from-red-950 to-gray-900 py-20 px-4">
      <div class="max-w-4xl mx-auto text-center">
        <div class="mb-6 flex justify-center">
  <span class="bg-primary/20 border border-primary rounded-full px-4 py-2 text-sm text-primary font-medium flex items-center">
    <span class="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
    100% Gratis & Berkualitas Tinggi
  </span>
</div>


        <h1 class="text-6xl font-bold mb-4 text-white">
          Download Video Tanpa Batas
        </h1>

        <p class="text-3xl font-bold text-primary mb-8">
          TikTok, Instagram, YouTube, Facebook, Twitter/X, Bilibili
        </p>

        <p class="text-gray-300 text-lg max-w-2xl mx-auto">
          Download video berkualitas tinggi dari berbagai platform media sosial populer.
          <br />
          Cepat, mudah, dan tanpa batasan.
        </p>
      </div>
    </section>

    <!-- Download Section -->
    <section class="py-20 px-4 bg-gray-900">
      <div class="max-w-2xl mx-auto">
        <h2 class="text-4xl font-bold text-center mb-2 text-white">
          Download Video Favorit Kamu
        </h2>

        <p class="text-gray-400 text-center mb-8">
          Paste link video dan download dalam kualitas terbaik
        </p>

        <DownloadForm />

      </div>
    </section>

    <!-- Platforms Section -->
    <section class="py-16 px-4 bg-gray-800/30">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-4xl font-bold text-center mb-12 text-white">
          Download Video dari Platform Populer
        </h2>

        <div class="grid grid-cols-2 md:grid-cols-3 gap-6">
          <div
            v-for="platform in platforms"
            :key="platform.id"
            class="bg-gray-800 rounded-lg p-8 hover:border-primary border border-gray-700 transition cursor-pointer text-center hover:bg-gray-700/50"
            @click="$router.push(platform.path)"
          >
            <div class="flex justify-center mb-3">
              <Icon :icon="platform.icon" class="text-5xl" />
            </div>
            <h3 class="font-bold text-lg text-white">{{ platform.name }}</h3>
            <p class="text-gray-400 text-sm">{{ platform.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Section -->
    <section class="py-20 px-4 bg-gray-900">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-4xl font-bold text-center mb-16 text-white">
          Kenapa Pilih VallsDownloader?
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Card 1: Super Cepat -->
          <div class="bg-gradient-to-br from-green-500 to-green-600 rounded-lg p-8 text-center text-white">
            <div class="flex justify-center mb-4">
              <Icon icon="mdi:lightning-bolt" class="text-5xl" />
            </div>
            <h3 class="text-2xl font-bold mb-2">Super Cepat</h3>
            <p class="text-green-100">
              Download Video dalam hitungan detik dengan server yang optimal.
            </p>
          </div>

          <!-- Card 2: Kualitas Terbaik -->
          <div class="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-8 text-center text-white">
            <div class="flex justify-center mb-4">
              <Icon icon="mdi:target" class="text-5xl" />
            </div>
            <h3 class="text-2xl font-bold mb-2">Kualitas Terbaik</h3>
            <p class="text-blue-100">
              Download Video otomatis dalam kualitas terbaik yang tersedia.
            </p>
          </div>

          <!-- Card 3: 100% Aman -->
          <div class="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg p-8 text-center text-white">
            <div class="flex justify-center mb-4">
              <Icon icon="mdi:lock" class="text-5xl" />
            </div>
            <h3 class="text-2xl font-bold mb-2">100% Aman</h3>
            <p class="text-purple-100">
              Tidak menyimpan data pribadi, semua proses dilakukan secara anonim.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import DownloadForm from '@/components/DownloadForm.vue'

const platforms = [
  { id: 'tiktok', name: 'TikTok', icon: 'ri:tiktok-fill', description: 'Kualitas HD', path: '/tiktok' },
  { id: 'instagram', name: 'Instagram', icon: 'mdi:instagram', description: 'Reels & Video', path: '/instagram' },
  { id: 'twitter', name: 'X (Twitter)', icon: 'mdi:twitter', description: 'Video Tweets', path: '/twitter' },
  { id: 'facebook', name: 'Facebook', icon: 'mdi:facebook', description: 'Reels', path: '/facebook' },
  { id: 'youtube', name: 'YouTube', icon: 'mdi:youtube', description: 'Berbagai Kualitas', path: '/youtube' },
  { id: 'bilibili', name: 'Bilibili', icon: 'tabler:brand-bilibili', description: 'Anime & Video', path: '/bilibili' },
]
</script>
