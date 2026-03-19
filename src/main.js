import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import '@/app.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCalendarDays, faLocationDot, faClock, faEnvelope, faArrowRight, faGlobe, faFileLines, faLink } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faBluesky, faTwitter, faLinkedin, faGoogleScholar } from '@fortawesome/free-brands-svg-icons'

library.add(faCalendarDays, faLocationDot, faClock, faEnvelope, faArrowRight, faGlobe, faFileLines, faLink, faGithub, faBluesky, faTwitter, faLinkedin, faGoogleScholar)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.mount('#app')
