<template>
  <footer class="bg-gray-800 border-t border-gray-700 mt-12">
    <div class="max-w-7xl mx-auto px-4 py-12">
      <!-- Disclaimer Section -->
      <div class="text-center mb-12">
        <p class="text-gray-400 mb-6">
          VallsDownloader adalah tools download video gratis yang mudah, cepat, dan aman. VallsDownloader tidak berafiliasi dengan platform video manapun. Pengguna bertanggung jawab dengan menggunakan hak legal untuk mengunduh konten. Download video favoritmu sekarang - gratis selamanya!
        </p>
      </div>

      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-700 pt-8">
        <!-- About -->
        <div>
          <h3 class="font-bold text-lg mb-3">VAlls Downloader</h3>
          <p class="text-gray-400 text-sm">
            Download video dari berbagai platform media sosial dengan kualitas terbaik.
          </p>
        </div>

        <!-- Links -->
        <div>
          <h3 class="font-bold text-lg mb-3">Layanan</h3>
          <ul class="space-y-2 text-sm text-gray-400">
            <li><router-link to="/terms" class="hover:text-primary">Syarat & Ketentuan</router-link></li>
            <li><router-link to="/privacy" class="hover:text-primary">Kebijakan Privasi</router-link></li>
            <li><router-link to="/dmca" class="hover:text-primary">DMCA Policy</router-link></li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="font-bold text-lg mb-3">Contact</h3>
          <ul class="space-y-2 text-sm text-gray-400">
            <li>
              <a href="mailto:vfebyan@gmail.com" class="hover:text-primary flex items-center gap-1">
                Email Us
              </a>
            </li>
            <li>
              <a href="https://github.com/paleennnn" target="_blank" rel="noopener noreferrer" class="hover:text-primary flex items-center gap-1">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://t.me/loremipsum112" target="_blank" rel="noopener noreferrer" class="hover:text-primary flex items-center gap-1">
                Telegram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
        <p>&copy; 2026 VAlls Downloader. Built with Vue 3 & Go.</p>
      </div>
    </div>
  </footer>
</template>
