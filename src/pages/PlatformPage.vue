<template>
  <div>
    <!-- Platform Header -->
    <section class="bg-gradient-to-b from-gray-800 to-gray-900 py-12 px-4 border-b border-gray-700">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-4xl font-bold mb-2">
          {{ getPlatformName() }} Download Video
        </h1>

        <p class="text-gray-400">
          Download Video {{ getPlatformName() }} dalam kualitas terbaik
        </p>
      </div>
    </section>

    <!-- Download Form -->
    <section class="py-12 px-4">
      <div class="max-w-2xl mx-auto">
        <DownloadForm :platform="platform" />
      </div>
    </section>

    <!-- Recent Downloads -->
    <section v-if="recentDownloads.length > 0" class="py-12 px-4 bg-gray-800 bg-opacity-30">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-2xl font-bold mb-8">Download Terakhir</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            v-for="item in recentDownloads"
            :key="item.id"
            class="bg-gray-800 rounded-lg overflow-hidden hover:border-primary border border-gray-700 transition"
          >
            <div class="p-4">
              <p class="text-gray-400 text-sm mb-2">{{ item.platform }}</p>
              <p class="text-white truncate mb-3">{{ item.file_name }}</p>

              <div class="flex gap-2">
                <a
                  :href="item.file_url"
                  class="flex-1 bg-primary hover:bg-red-600 px-4 py-2 rounded text-center transition"
                  download
                >
                  Download
                </a>
                <button
                  @click="removeRecent(item.id)"
                  class="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded transition"
                >
                  ✕
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import DownloadForm from '@/components/DownloadForm.vue'

const props = defineProps({
  platform: {
    type: String,
    required: true,
  },
})

const recentDownloads = ref([])

const platformNames = {
  tiktok: 'TikTok',
  instagram: 'Instagram',
  youtube: 'YouTube',
  facebook: 'Facebook',
  twitter: 'Twitter/X',
  bilibili: 'Bilibili',
}

const getPlatformName = () => {
  return platformNames[props.platform] || props.platform
}

onMounted(() => {
  // Load from localStorage
  const saved = localStorage.getItem(`downloads_${props.platform}`)
  if (saved) {
    try {
      recentDownloads.value = JSON.parse(saved).slice(0, 4)
    } catch (e) {
      console.error('Failed to load recent downloads', e)
    }
  }
})

const removeRecent = (id) => {
  recentDownloads.value = recentDownloads.value.filter((item) => item.id !== id)
  localStorage.setItem(
    `downloads_${props.platform}`,
    JSON.stringify(recentDownloads.value)
  )
}

const addRecent = (item) => {
  recentDownloads.value.unshift(item)
  if (recentDownloads.value.length > 4) {
    recentDownloads.value.pop()
  }
  localStorage.setItem(
    `downloads_${props.platform}`,
    JSON.stringify(recentDownloads.value)
  )
}

// Expose untuk parent
defineExpose({ addRecent })
</script>
