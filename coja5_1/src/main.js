import { createApp } from 'vue'
import App from './App.vue'
import FirstChild from './components/FirstChild.vue'

createApp(App).mount('#app')
App.components('Firstchild', FirstChild);


