import { createRouter, createWebHistory } from "vue-router";
import HomeView from '../views/HomeView.vue';
import AddView from '../views/AddView.vue'

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path:'/', name:'Home', component: HomeView},
        {path:'/add', name:'Add', component: AddView},
    ]
})

export default router;