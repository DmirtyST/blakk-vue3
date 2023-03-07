import { createApp } from 'vue'
import './style/global.scss'
import App from './App.vue'
import router from "./router/index";
import "@fontsource/montserrat/400.css"
import "@fontsource/montserrat/500.css"
import "@fontsource/montserrat/700.css"
import "@fontsource/montserrat/800.css"
const app = createApp(App)
app.use(router).mount('#app')
