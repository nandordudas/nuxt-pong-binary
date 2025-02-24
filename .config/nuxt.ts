// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',

  devtools: { enabled: false },

  future: { compatibilityVersion: 4 },

  experimental: {
    inlineRouteRules: true,
    typedPages: true,
  },

  router: {
    options: { strict: true },
  },

  app: {
    head: {
      templateParams: {
        separator: '\u00B7',
        siteName: 'Nuxt Pong Binary',
      },
      titleTemplate: '%s %separator %siteName',
    },
    rootAttrs: {
      'data-version': import.meta.env.npm_package_version,
    },
  },
})
