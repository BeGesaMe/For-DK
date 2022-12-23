import { createApp } from 'vue'
import './style.css'
import 'mdb-vue-ui-kit/css/mdb.min.css';
import router from './routes/router'
import App from './App.vue'
let app = createApp(App)
app.use(router)
app.mount('#app')
