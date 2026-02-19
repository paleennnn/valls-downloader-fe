<template>
  <div class="space-y-6">
    <!-- URL Input -->
    <div class="bg-gray-800 rounded-lg p-6 border border-gray-700">
      <div class="flex gap-2 mb-4">
        <input
          v-model="url"
          type="text"
          placeholder="Paste link video di sini..."
          class="flex-1 bg-gray-700 text-white px-4 py-3 rounded border border-gray-600 focus:border-primary focus:outline-none transition"
          @keyup.enter="getVideoInfo"
        />
        <button
          @click="pasteFromClipboard"
          class="bg-green-600 hover:bg-green-700 px-6 py-3 rounded font-medium transition"
        >
          📋 Paste
        </button>
      </div>

      <!-- Get Video Info Button -->
      <button
        @click="getVideoInfo"
        :disabled="!url || isLoading"
        class="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed px-8 py-3 rounded font-bold transition flex items-center justify-center gap-2"
      >
        <span v-if="isLoading" class="animate-spin">⏳</span>
        <span v-else>ℹ️</span>
        {{ isLoading ? 'Loading...' : 'Get Video Info' }}
      </button>
    </div>

    <!-- Video Info Section (shown after getVideoInfo) -->
    <div v-if="videoInfo" class="bg-gray-800 rounded-lg p-6 border border-gray-700">
      <!-- Thumbnail & Title -->
      <div class="mb-6">
        <div class="flex gap-4">
          <div v-if="videoInfo.thumbnail" class="w-32 h-24 rounded overflow-hidden flex-shrink-0">
            <img
              :src="getThumbnailUrl(videoInfo.thumbnail)"
              :alt="videoInfo.title"
              class="w-full h-full object-cover"
              @error="onThumbnailError"
            />
          </div>
          <div v-else class="w-32 h-24 rounded bg-gray-700 flex items-center justify-center flex-shrink-0">
            <div class="text-gray-400 text-center text-xs">
              <div>📹</div>
              <div>No Preview</div>
            </div>
          </div>
          <div class="flex-1">
            <h3 class="text-white font-bold text-lg mb-2">{{ videoInfo.title }}</h3>
            <p class="text-gray-400 text-sm">
              ⏱️ Duration: {{ formatDuration(videoInfo.duration) }}
            </p>
          </div>
        </div>
      </div>

      <!-- Format Selector -->
      <div class="mb-6">
        <p class="text-gray-400 text-sm mb-3">Pilih Format:</p>
        <div class="flex gap-3">
          <button
            @click="format = 'mp4'"
            class="flex-1 py-2 rounded font-medium transition"
            :class="
              format === 'mp4'
                ? 'bg-green-600 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            "
          >
            📹 Video
          </button>
          <button
            @click="format = 'mp3'"
            class="flex-1 py-2 rounded font-medium transition"
            :class="
              format === 'mp3'
                ? 'bg-green-600 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            "
          >
            🎵 MP3 (Audio)
          </button>
        </div>
      </div>

      <!-- Quality Selector (dynamic from API) -->
      <div class="mb-6" v-if="format === 'mp4' && availableQualities.length > 0">
        <p class="text-gray-400 text-sm mb-3">Pilih Kualitas:</p>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-2">
          <button
            v-for="q in availableQualities"
            :key="q"
            @click="quality = q"
            class="py-2 rounded font-medium transition border"
            :class="
              quality === q
                ? 'bg-green-600 text-white border-green-500'
                : 'bg-gray-700 text-gray-300 border-gray-600 hover:bg-gray-600'
            "
          >
            {{ q }}
          </button>
        </div>
      </div>

      <!-- Download Button -->
      <button
        @click="downloadVideo"
        :disabled="isLoading"
        class="w-full bg-primary hover:bg-red-600 disabled:bg-gray-600 disabled:cursor-not-allowed px-8 py-3 rounded font-bold transition flex items-center justify-center gap-2"
      >
        <span v-if="isLoading" class="animate-spin">⏳</span>
        <span v-else>📥</span>
        {{ isLoading ? 'Downloading...' : 'Download Video' }}
      </button>
    </div>

    <!-- Status Messages -->
    <div v-if="successMessage" class="bg-green-900/30 border border-green-700 rounded-lg p-4">
      <p class="text-green-300">✓ {{ successMessage }}</p>
    </div>

    <div v-if="errorMessage" class="bg-red-900/30 border border-red-700 rounded-lg p-4">
      <p class="text-red-300">✗ {{ errorMessage }}</p>
    </div>

    <!-- Progress Bar -->
    <div v-if="progress > 0 && progress < 100" class="bg-gray-800 rounded-lg p-4">
      <div class="flex justify-between mb-2">
        <p class="text-gray-400 text-sm">Processing...</p>
        <p class="text-gray-400 text-sm">{{ progress }}%</p>
      </div>
      <div class="w-full bg-gray-700 rounded-full h-2">
        <div
          class="bg-primary h-2 rounded-full transition-all duration-300"
          :style="{ width: progress + '%' }"
        ></div>
      </div>
    </div>

    <!-- Security Message -->
    <div class="text-center text-gray-500 text-sm">
      🔒 Secure & Protected by Cloudflare
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useDownload } from '@/composables/useDownload'

const url = ref('')
const format = ref('mp4')
const quality = ref('best')
const isLoading = ref(false)
const progress = ref(0)
const successMessage = ref('')
const errorMessage = ref('')
const videoInfo = ref(null)

const { download, getVideoInfo: getVideoInfoApi, getThumbnailUrl } = useDownload()

const availableQualities = computed(() => {
  if (!videoInfo.value || !videoInfo.value.available_formats) return []
  return videoInfo.value.available_formats
    .filter(f => f.format === format.value)
    .map(f => f.quality)
    .sort((a, b) => {
      const order = { best: 0, '1080p': 1, '720p': 2, '480p': 3 }
      return (order[a] ?? 999) - (order[b] ?? 999)
    })
})

const formatDuration = (seconds) => {
  if (!seconds) return 'N/A'
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const secs = seconds % 60
  
  if (hours > 0) {
    return `${hours}h ${minutes}m ${secs}s`
  }
  return `${minutes}m ${secs}s`
}

const onThumbnailError = () => {
  // If thumbnail image fails to load, clear it to show placeholder
  if (videoInfo.value) {
    videoInfo.value.thumbnail = ''
  }
}

const pasteFromClipboard = async () => {
  try {
    const text = await navigator.clipboard.readText()
    url.value = text
    await getVideoInfo()
  } catch (e) {
    errorMessage.value = 'Tidak bisa akses clipboard. Manual paste saja.'
  }
}

const getVideoInfo = async () => {
  if (!url.value) {
    errorMessage.value = 'Masukan URL video terlebih dahulu'
    return
  }

  try {
    isLoading.value = true
    errorMessage.value = ''
    successMessage.value = ''

    const info = await getVideoInfoApi(url.value)
    videoInfo.value = info
    quality.value = availableQualities.value[0] || 'best'
  } catch (e) {
    errorMessage.value = e.message || 'Gagal mengambil informasi video'
    videoInfo.value = null
  } finally {
    isLoading.value = false
  }
}

const downloadVideo = async () => {
  if (!url.value) {
    errorMessage.value = 'Masukan URL video terlebih dahulu'
    return
  }

  try {
    isLoading.value = true
    errorMessage.value = ''
    successMessage.value = ''
    progress.value = 10

    // Simulate progress
    const progressInterval = setInterval(() => {
      if (progress.value < 90) {
        progress.value += Math.random() * 30
      }
    }, 500)

    const result = await download(url.value, format.value, quality.value)

    clearInterval(progressInterval)
    progress.value = 100

    // Create download link
    const link = document.createElement('a')
    link.href = result.file_url
    link.download = result.file_name
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    successMessage.value = `Video berhasil di-download! Format: ${result.format}`

    // Reset after success
    setTimeout(() => {
      url.value = ''
      progress.value = 0
      videoInfo.value = null
      successMessage.value = ''
    }, 3000)
  } catch (e) {
    errorMessage.value = e.message || 'Gagal download video. Coba lagi.'
    progress.value = 0
  } finally {
    isLoading.value = false
  }
}
</script>
