import { createI18n } from 'vue-i18n'

const messages = {
  id: {
    nav: {
      home: 'Beranda',
      tiktok: 'TikTok',
      instagram: 'Instagram',
      twitter: 'X',
      facebook: 'Facebook',
      youtube: 'YouTube',
      bilibili: 'Bilibili',
      about: 'Tentang',
    }
  },
  en: {
    nav: {
      home: 'Home',
      tiktok: 'TikTok',
      instagram: 'Instagram',
      twitter: 'X',
      facebook: 'Facebook',
      youtube: 'YouTube',
      bilibili: 'Bilibili',
      about: 'About',
    }
  }
}

export const i18n = createI18n({
  legacy: false,
  locale: 'id',
  fallbackLocale: 'en',
  messages
})