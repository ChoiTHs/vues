import { createApp } from 'vue';
import App from './App.vue';
import GlobalChild from './components/GlobalChild.vue';

// createApp(App).mount('#app')

const app = createApp(App)
app.component("GlobalChild", GlobalChild)
app.mount('#app')
