import my_module from "@/sub_module_my/my_module.vue";
import item_module from "@/sub_module_items/item_module.vue";
import item_interface_detail_page
    from "@/sub_module_items/item_interface_list/item_interface_detail_page/item_interface_detail_page.vue";
import item_members_list from "@/sub_module_items/item_members_list/item_members_list.vue";

import edit from "@/sub_module_items/item_interface_list/item_interface_detail_page/detail_router_view/edit.vue";
import view from "@/sub_module_items/item_interface_list/item_interface_detail_page/detail_router_view/view.vue";
import version from "@/sub_module_items/item_interface_list/item_interface_detail_page/detail_router_view/version.vue";
import mock_serve
    from "@/sub_module_items/item_interface_list/item_interface_detail_page/detail_router_view/mock_serve.vue";

import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        redirect: '/my'
    },
    {
        path: '/my',
        name: 'my_module',
        component: my_module
    },
    {
        path: '/items/:id',
        name: 'item_module',
        component: item_module,
        children: [
            {
                path: 'members',
                name: 'item_members_list',
                component: item_members_list
            },
            {
                path: 'interface/:interface_id',
                name: 'item_interface_detail_page',
                component: item_interface_detail_page,
                children: [
                    {
                        path: 'edit',
                        name: 'edit',
                        component: edit
                    },
                    {
                        path: 'view',
                        name: 'view',
                        component: view
                    },
                    {
                        path: 'version',
                        name: 'version',
                        component: version
                    },
                    {
                        path: 'mock_serve',
                        name: 'mock_serve',
                        component: mock_serve
                    },
                ]
            },
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router