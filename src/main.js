import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import '@/app.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCalendarDays, faLocationDot, faClock, faEnvelope, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faBluesky, faTwitter } from '@fortawesome/free-brands-svg-icons'

library.add(faCalendarDays, faLocationDot, faClock, faEnvelope, faArrowRight, faGithub, faBluesky, faTwitter)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.mount('#app')
