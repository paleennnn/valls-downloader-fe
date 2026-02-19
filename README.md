# VAlls Downloader Frontend

Vue 3 + Tailwind CSS frontend untuk VAlls Downloader.

## Setup

```bash
npm install
npm run dev        # Development
npm run build      # Production
npm run preview    # Preview build
```

Server akan berjalan di `http://localhost:5173`

## Struktur

```
src/
├── components/
│   ├── Navbar.vue
│   ├── Footer.vue
│   └── DownloadForm.vue
├── pages/
│   ├── Home.vue
│   ├── PlatformPage.vue
│   ├── About.vue
│   ├── Terms.vue
│   ├── Privacy.vue
│   └── DMCA.vue
├── composables/
│   └── useDownload.js
├── router/
│   └── index.js
├── App.vue
└── main.js
```

## Tech Stack

- Vue 3 (Composition API)
- Vite
- Tailwind CSS
- Vue Router v4
- Axios

## Features

- Multi-platform download (TikTok, Instagram, YouTube, Facebook, Twitter/X, Bilibili)
- Format selection (MP4/MP3)
- Quality selector (1080p, 720p, 480p, best)
- Responsive design
- Dark UI

## Configuration

Update `tailwind.config.js` untuk customize warna primary atau styling lainnya.

Backend API: `http://localhost:8080/api`

## Build

```bash
npm run build
# Output di folder dist/
```
