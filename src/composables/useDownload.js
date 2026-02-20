import axios from 'axios'

const API_BASE = `${import.meta.env.VITE_API_URL || 'http://localhost:8080'}/api`

export function useDownload() {
  const download = async (url, format = 'mp4', quality = 'best') => {
    try {
      const response = await axios.post(`${API_BASE}/download`, {
        url,
        format,
        quality,
      })

      if (response.data.success) {
        return response.data.data
      } else {
        throw new Error(response.data.error || 'Download failed')
      }
    } catch (error) {
      const message = error.response?.data?.error || error.message
      throw new Error(message)
    }
  }

  const detectPlatform = async (url) => {
    try {
      const response = await axios.get(`${API_BASE}/detect`, {
        params: { url },
      })

      if (response.data.success) {
        return response.data.platform
      } else {
        throw new Error(response.data.error)
      }
    } catch (error) {
      throw new Error('Failed to detect platform')
    }
  }

  const getVideoInfo = async (url) => {
    try {
      const response = await axios.get(`${API_BASE}/video-info`, {
        params: { url },
      })

      if (response.data.success) {
        return response.data.data
      } else {
        throw new Error(response.data.error || 'Failed to get video info')
      }
    } catch (error) {
      const message = error.response?.data?.error || error.message
      throw new Error(message)
    }
  }

  const getThumbnailUrl = (thumbnail) => {
    if (!thumbnail) return ''
    // Jika thumbnail dari Instagram/Facebook, route lewat proxy BE untuk bypass CORS
    if (thumbnail.includes('instagram') || thumbnail.includes('cdninstagram') || thumbnail.includes('fbcdn')) {
      const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:8080'
      return `${baseUrl}/api/proxy-thumbnail?url=${encodeURIComponent(thumbnail)}`
    }
    return thumbnail
  }

  return {
    download,
    detectPlatform,
    getVideoInfo,
    getThumbnailUrl,
  }
}
