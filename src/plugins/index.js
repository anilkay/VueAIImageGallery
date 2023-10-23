/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import vuetify from './vuetify'
import pinia from '../store'
import router from '../router'

import Vueform from '@vueform/vueform/plugin'
import vueformConfig from '../../vueform.config.js'

export function registerPlugins (app) {
  app
    .use(vuetify)
    .use(router)
    .use(pinia)
    .use(Vueform, vueformConfig)
}
