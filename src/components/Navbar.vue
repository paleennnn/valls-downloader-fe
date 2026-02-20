<template>
  <nav class="bg-gray-800 border-b border-gray-700 sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <router-link
          to="/"
          class="flex items-center gap-2 font-bold text-xl text-white"
        >
          <img
            :src="logo"
            alt="VallsDownloader Logo"
            class="w-8 h-8 object-contain"
          />
          <span>VallsDownloader</span>
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
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import logo from "@/assets/Logo-noBG.png";

const route = useRoute();
const { locale, t } = useI18n();

const language = computed({
  get: () => locale.value,
  set: (val) => {
    locale.value = val;
    localStorage.setItem("lang", val);
  },
});

const navLinks = computed(() => [
  { label: t("nav.home"), path: "/" },
  // { label: t('nav.tiktok'), path: '/tiktok' },
  // { label: t('nav.instagram'), path: '/instagram' },
  // { label: t('nav.twitter'), path: '/twitter' },
  // { label: t('nav.facebook'), path: '/facebook' },
  // { label: t('nav.youtube'), path: '/youtube' },
  // { label: t('nav.bilibili'), path: '/bilibili' },
  // { label: t('nav.about'), path: '/about' },
  { label: t("Syarat dan Ketentuan"), path: "/terms" },
  { label: t("Kebijakan Privasi"), path: "/privacy" },
  { label: t("DMCA"), path: "/dmca" },
]);

const isActive = (path) => route.path === path;
</script>
