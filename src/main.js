import './index.css'

import {createApp} from 'vue'
import App from './App.vue'
import item_interface_detail_page
    from "@/sub_module_items/item_interface_list/item_interface_detail_page/item_interface_detail_page.vue";

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import router from './vue-router.js'

const app = createApp(App)

app.use(ElementPlus)
app.use(router)
app.mount('#app')

