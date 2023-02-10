import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueAxios from 'vue-axios'
import axios from 'axios'
import materialize from 'vue-materialize'

import 'materialize-css/dist/css/materialize.min.css'

createApp(App).use(router).use(VueAxios, axios).use(materialize).mount('#app')
