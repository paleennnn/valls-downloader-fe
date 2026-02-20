# 🚀 Deployment Guide - VAlls Downloader

## Frontend: Deploy ke Vercel

### Prerequisites:
- GitHub account dengan kode ter-push (sudah ✅)
- Vercel account (gratis di https://vercel.com)

### Langkah-langkah:

1. **Login ke Vercel**
   - Buka https://vercel.com
   - Klik "Sign Up" dan pilih "Continue with GitHub"
   - Authorize Vercel untuk akses repository

2. **Import Project**
   - Klik "New Project"
   - Search dan select `valls-downloader-fe` repository
   - Klik "Import"

3. **Configure Environment**
   - Di halaman "Configure Project"
   - Biarkan **Framework**: `Other` (Vite sudah auto-detected)
   - **Root Directory**: `./` (default)
   - Build Command: `npm run build` (auto)
   - Output Directory: `dist` (auto)

4. **Tambah Environment Variables**
   - Di bagian "Environment Variables", add:
   ```
   Name: VITE_API_URL
   Value: https://your-ngrok-url.ngrok.io
   ```
   *(Anda akan update ini setelah setup ngrok)*

5. **Deploy**
   - Klik "Deploy"
   - Tunggu... selesai! 🎉
   - URL akan muncul seperti: `https://valls-downloader-fe-xxx.vercel.app`

6. **Link ke Backend (ngrok)**
   - Setelah ngrok aktif (lihat langkah berikutnya)
   - Go to Project Settings → Environment Variables
   - Update VITE_API_URL dengan ngrok URL
   - Redeploy: Go to Deployments → Click latest → "Redeploy"

---

## Backend: Setup ngrok untuk Local Backend

### Prerequisites:
- Go backend sudah running di `http://localhost:8080`
- Download ngrok: https://ngrok.com/download

### Langkah-langkah:

1. **Download & Install ngrok**
   ```powershell
   # Windows dengan Chocolatey
   choco install ngrok
   
   # Atau download langsung dari https://ngrok.com/download
   # Extract ke folder, tambahkan ke PATH
   ```

2. **Start Backend (Terminal 1)**
   ```powershell
   cd d:\valls-downloader-be
   go run cmd/valls-downloader/main.go
   # Seharusnya running di http://localhost:8080
   ```

3. **Start ngrok (Terminal 2)**
   ```powershell
   ngrok http 8080
   ```
   
   Output akan seperti:
   ```
   Forwarding  https://abcd-1234-efgh-5678.ngrok.io -> http://localhost:8080
   ```
   
   **Copy URL ini** (contoh: `https://abcd-1234-efgh-5678.ngrok.io`)

4. **Update Backend BASE_URL (.env)**
   ⚠️ **IMPORTANT STEP!**
   
   Edit file `d:\valls-downloader-be\.env`:
   ```env
   # Change this line:
   BASE_URL=http://localhost:8080
   
   # To your ngrok URL:
   BASE_URL=https://abcd-1234-efgh-5678.ngrok.io
   ```
   
   Ini memastikan file download URL yang dikirim FE adalah full ngrok URL, bukan localhost.

5. **Restart Backend (Terminal 1)**
   - Stop backend dengan `Ctrl+C`
   - Jalankan lagi:
     ```powershell
     go run cmd/valls-downloader/main.go
     ```

6. **Update Vercel Environment Variable**
   - Buka https://vercel.com/dashboard
   - Select project `valls-downloader-fe`
   - Settings → Environment Variables
   - Edit `VITE_API_URL` dengan ngrok URL yang sama:
     ```
     VITE_API_URL=https://abcd-1234-efgh-5678.ngrok.io
     ```
   - Save & Redeploy

7. **Test**
   - Buka FE di Vercel: `https://valls-downloader-fe-xxx.vercel.app`
   - Paste video URL dan download
   - Download seharusnya langsung ke device! ✅

---

## ⚠️ Important Notes

### ngrok URL Berubah Setiap Kali ngrok Restart
- Setiap kali restart ngrok, URL berubah
- **Solusi:**
  - Gunakan ngrok paid plan untuk static domain
  - ATAU update Vercel env var setiap kali ngrok restart

### Upgrade ngrok ke Static Domain (Optional but Recommended)
- Buka https://dashboard.ngrok.com
- Sign up/Login
- **Get Your Auth Token:**
  ```powershell
  ngrok config add-authtoken YOUR_TOKEN_HERE
  ```

- **Reserve Static Domain:**
  - Premium plan ($5-10/bulan)
  - Get permanent domain like `my-app.ngrok.io`

- **Start ngrok dengan static domain:**
  ```powershell
  ngrok http 8080 --domain my-app.ngrok.io
  ```
  
  Sekarang URL tidak berubah lagi! 🎉

---

## Quick Checklist

- [ ] Backend running locally (`http://localhost:8080`)
- [ ] Frontend pushed to GitHub
- [ ] Vercel project created & imported
- [ ] ngrok installed & token configured
- [ ] ngrok running & URL noted
- [ ] Vercel environment variable updated
- [ ] Vercel redeployed
- [ ] Test di Vercel FE → Backend via ngrok ✅

---

## Troubleshooting

### FE tidak bisa connect ke Backend
1. Check ngrok status: `ngrok http 8080` aktif?
2. Check backend logs: sudah running?
3. Vercel env var: sudah update ke ngrok URL?
4. Tunggu ~1 minute untuk Vercel redeploy

### ngrok URL invalid
- Restart ngrok
- Copy URL yang baru
- Update di Vercel env var
- Redeploy

### CORS Error
- Backend sudah ada CORS middleware
- Check backend `.env` ALLOWED_ORIGINS untuk dev/production

---

## Local Development (Tanpa Deploy)

Untuk testing lokal sebelum deploy:

```powershell
# Terminal 1: Backend
cd d:\valls-downloader-be
go run cmd/valls-downloader/main.go

# Terminal 2: Frontend
cd d:\valls-downloader-fe
npm run dev
# Buka http://localhost:5173
```

Frontend akan auto-proxy ke backend via vite.config.js

---

**Pertanyaan atau butuh bantuan lebih lanjut?**
