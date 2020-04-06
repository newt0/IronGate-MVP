import { createClient } from 'contentful'
import { CONTENT_TYPE_POST, CONTENT_TYPE_TAG } from './config/constant'

require('dotenv').config()

const CONTENTFUL_SPACE_ID = process.env.SPACE_ID || '2l235wk2nhg9'
const CONTENTFUL_ACCESS_TOKEN = process.env.ACCESS_TOKEN || 'oRSP4HTWzSVDfsZt9TGuCFXST3q0DjhSPlPIboP28s0'

const routes = async function() {
  const client = createClient({
    space: CONTENTFUL_SPACE_ID,
    accessToken: CONTENTFUL_ACCESS_TOKEN
  })

  const [post, tag] = await Promise.all([
    client.getEntries({ content_type: CONTENT_TYPE_POST, limit: 1000 }),
    client.getEntries({ content_type: CONTENT_TYPE_TAG })
  ])

  return [...post.items.map(item => `/entry/${item.sys.id}`), ...tag.items.map(item => `/tag/${item.sys.id}`)]
}

const TITLE = '医師のためのAIメディア'
const DESCRIPTION = '医師のためのAIメディアです。AI学習方法をメインコンテンツとする予定'

module.exports = {
  mode: 'universal',
  head: {
    title: TITLE,
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#ffffff' },
      {
        hid: 'description',
        name: 'description',
        content: DESCRIPTION
      },
      {
        name: 'theme-color',
        content: '#ffffff'
      },
      {
        property: 'og:site_name',
        content: TITLE
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: TITLE
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: DESCRIPTION
      },
      {
        property: 'og:image',
        content: 'https://blog.houga.cc/og.png?2018110601'
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        name: 'twitter:image',
        content: 'https://blog.houga.cc/og.png?2018110601'
      }
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }
    ]
  },
  env: {
    SPACE_ID: CONTENTFUL_SPACE_ID,
    ACCESS_TOKEN: CONTENTFUL_ACCESS_TOKEN
  },
  loading: false,
  css: ['@/assets/scss/index.scss', 'swiper/dist/css/swiper.css', '~/static/vue-awesome-swiper/swiper.css'],
  plugins: [{ src: '~plugins/vue-awesome-swiper', ssr: false }],
  modules: [
    ['@nuxtjs/google-analytics', { id: 'UA-53153991-19' }],
    '@nuxtjs/dotenv',
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    scss: [
      './assets/scss/foundation/_variables.scss',
      './assets/scss/foundation/_mixin.scss',
      '~/assets/scss/_mixin.scss'
    ]
  },
  generate: {
    routes
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://blog.houga.cc',
    generate: true,
    routes
  },
  manifest: {
    name: '医師のためのAIメディア',
    short_name: '医師のためのAIメディア',
    lang: 'ja',
    orientation: 'portrait',
    theme_color: '#ffffff',
    background_color: '#ffffff',
    start_url: '/index.html'
  },
  workbox: {
    dev: true
  }
}
