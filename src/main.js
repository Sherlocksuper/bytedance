import './index.css'

import {createApp} from 'vue'
import App from './App.vue'
import item_interface_detail_page
    from "@/sub_module_items/item_interface_list/item_interface_detail_page/item_interface_detail_page.vue";

import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/el-icon.css'; // 全局导入 Element Plus 图标样式
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import router from './vue-router.js'

const app = createApp(App)

app.use(ElementPlus)
app.use(router)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app.mount('#app')

