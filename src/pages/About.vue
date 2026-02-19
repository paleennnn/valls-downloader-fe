<template>
  <div class="py-16 px-4">
    <div class="max-w-4xl mx-auto">
      <!-- Header -->
      <h1 class="text-4xl font-bold mb-4">Tentang VallsDownloader</h1>

      <p class="text-gray-400 text-lg mb-8">
        VallsDownloader adalah tools download video gratis yang mudah, cepat, dan aman. VallsDownloader tidak berafiliasi dengan platform video manapun. Pengguna bertanggung jawab dengan menggunakan hak legal untuk mengunduh konten. Download video favoritmu sekarang - gratis selamanya!
      </p>

      <!-- Features -->
      <section class="mb-12">
        <h2 class="text-2xl font-bold mb-6">Fitur Unggulan</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 class="text-xl font-bold mb-3">⚡ Super Cepat</h3>
            <p class="text-gray-400">
              Download video dalam hitungan detik tanpa proses yang rumit.
            </p>
          </div>

          <div class="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 class="text-xl font-bold mb-3">🔓 Gratis Selamanya</h3>
            <p class="text-gray-400">
              100% gratis, tidak ada biaya tersembunyi atau batasan unduhan.
            </p>
          </div>

          <div class="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 class="text-xl font-bold mb-3">🎬 Berbagai Platform</h3>
            <p class="text-gray-400">
              Support TikTok, Instagram, YouTube, Facebook, Twitter, Bilibili, dan lebih banyak.
            </p>
          </div>

          <div class="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 class="text-xl font-bold mb-3">🎯 Pilihan Kualitas</h3>
            <p class="text-gray-400">
              Download dalam berbagai kualitas mulai dari 480p hingga 1080p.
            </p>
          </div>

          <div class="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 class="text-xl font-bold mb-3">🔒 Aman & Privat</h3>
            <p class="text-gray-400">
              Data Anda aman. Kami tidak menyimpan atau menunjukkan riwayat unduhan.
            </p>
          </div>

          <div class="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 class="text-xl font-bold mb-3">📱 Responsive Design</h3>
            <p class="text-gray-400">
              Akses dari desktop, tablet, atau smartphone kapan saja.
            </p>
          </div>
        </div>
      </section>

      <!-- How It Works -->
      <section class="mb-12">
        <h2 class="text-2xl font-bold mb-6">Cara Kerja</h2>

        <div class="space-y-4">
          <div class="flex gap-4 items-start">
            <div class="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
              1
            </div>
            <div>
              <h3 class="font-bold text-lg">Copy Link Video</h3>
              <p class="text-gray-400">Salin link dari media sosial yang ingin Anda download.</p>
            </div>
          </div>

          <div class="flex gap-4 items-start">
            <div class="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
              2
            </div>
            <div>
              <h3 class="font-bold text-lg">Paste & Pilih Format</h3>
              <p class="text-gray-400">Paste link ke form kami dan pilih kualitas yang diinginkan.</p>
            </div>
          </div>

          <div class="flex gap-4 items-start">
            <div class="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
              3
            </div>
            <div>
              <h3 class="font-bold text-lg">Download</h3>
              <p class="text-gray-400">Klik download dan file video akan tersimpan ke perangkat Anda.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- FAQ -->
      <section class="mb-12">
        <h2 class="text-2xl font-bold mb-6">FAQ</h2>

        <div class="space-y-4">
          <div class="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <details class="cursor-pointer">
              <summary class="font-bold flex justify-between items-center">
                Apakah legal menggunakan layanan ini?
                <span>▼</span>
              </summary>
              <p class="text-gray-400 mt-3">
                Layanan ini hanya untuk tujuan pribadi. Pastikan Anda memiliki hak untuk
                mengunduh konten dan tidak melanggar kebijakan platform media sosial.
              </p>
            </details>
          </div>

          <div class="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <details class="cursor-pointer">
              <summary class="font-bold flex justify-between items-center">
                Berapa lama waktu pengunduhan?
                <span>▼</span>
              </summary>
              <p class="text-gray-400 mt-3">
                Waktu pengunduhan tergantung pada ukuran file dan kecepatan internet Anda.
                Biasanya hanya butuh beberapa detik hingga menit.
              </p>
            </details>
          </div>

          <div class="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <details class="cursor-pointer">
              <summary class="font-bold flex justify-between items-center">
                Apakah ada limit pengunduhan?
                <span>▼</span>
              </summary>
              <p class="text-gray-400 mt-3">
                Tidak ada limit pengunduhan. Anda bisa download sebanyak yang Anda mau!
              </p>
            </details>
          </div>
        </div>
      </section>

      <!-- Contact -->
      <section class="mb-12">
        <div class="flex items-center gap-3 mb-8">
          <div class="w-1 h-8 bg-gradient-to-b from-purple-500 to-green-500 rounded"></div>
          <h2 class="text-3xl font-bold">Contact Information</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Email -->
          <div class="bg-gray-800 rounded-lg p-6 border border-gray-700 flex items-start gap-4">
            <div class="w-12 h-12 bg-purple-900 rounded flex items-center justify-center flex-shrink-0">
              <Icon icon="mdi:email" class="text-2xl text-orange-400" />
            </div>
            <div>
              <h3 class="font-bold text-lg text-white mb-1">Email Address</h3>
              <p class="text-gray-400">vfebyan@gmail.com</p>
            </div>
          </div>

          <!-- Telegram -->
          <div class="bg-gray-800 rounded-lg p-6 border border-gray-700 flex items-start gap-4">
            <div class="w-12 h-12 bg-purple-900 rounded flex items-center justify-center flex-shrink-0">
              <Icon icon="mdi:telegram" class="text-2xl text-green-400" />
            </div>
            <div>
              <h3 class="font-bold text-lg text-white mb-1">Telegram</h3>
              <p class="text-gray-400">@loremipsum112</p>
            </div>
          </div>

          <!-- Location -->
          <div class="bg-gray-800 rounded-lg p-6 border border-gray-700 flex items-start gap-4">
            <div class="w-12 h-12 bg-green-900 rounded flex items-center justify-center flex-shrink-0">
              <Icon icon="mdi:map-marker" class="text-2xl text-green-400" />
            </div>
            <div>
              <h3 class="font-bold text-lg text-white mb-1">Location</h3>
              <p class="text-gray-400">Indonesia</p>
            </div>
          </div>
        </div>

        <!-- Additional Links -->
        <div class="mt-8 bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 class="font-bold text-lg text-white mb-4">Connect With Us</h3>
          <div class="flex flex-wrap gap-4">
            <a 
              href="https://github.com/paleennnn" 
              target="_blank" 
              rel="noopener noreferrer"
              class="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded font-semibold transition"
            >
              <Icon icon="mdi:github" class="text-xl" />
              GitHub
            </a>
            <a 
              href="mailto:vfebyan@gmail.com"
              class="flex items-center gap-2 bg-primary hover:bg-orange-600 px-6 py-3 rounded font-semibold transition"
            >
              <Icon icon="mdi:email" class="text-xl" />
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
// Component for About page
</script>
