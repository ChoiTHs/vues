import { createApp } from 'vue'
import App from './App.vue'
import Child from './components/GlobalChild.vue'

createApp(App)
.component('child',Child)
.mount('#app')

