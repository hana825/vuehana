import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Todo from "../views/Todo.vue";

const router = createRouter({
  history: createWebHistory('/vuehana/'),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '/todo',
      name: 'Todo',
      component: Todo,
    },
  ],
});

export default router;
