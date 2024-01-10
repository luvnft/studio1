import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import { polyfillNode } from "esbuild-plugin-polyfill-node";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    nftStorageApiKey: '',
    awsS3Region: '',
    awsS3BucketPodcast: '',
    awsS3AccessKeyId: '',
    awsS3SecretAccessKey: '',
    pinataApiKey: '',
    pinataApiSecret: '',
    public: {
      network: process.env.NUXT_PUBLIC_NETWORK || 'testnet',
      chainId: 'bitsong-2b',
      appName: 'Studio',
      links: {
        tos: 'https://bitsong.io/tos',
        privacy: 'https://bitsong.io/privacy'
      },
      ipfsGateway: 'https://yellow-hilarious-jay-665.mypinata.cloud/ipfs/{cid}',
    },
  },
  build: {
    transpile: ['vue-toastification', 'vuetify'],
  },
  modules: [
    '@nuxt/image',
    '@pinia/nuxt',
    '@quirks/nuxt',
    '@vueuse/nuxt',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
  ],
  vite: {
    plugins: [polyfillNode()],
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})
