import { createWebHashHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Todo from "../views/Todo.vue";
import Posts from "../views/Posts.vue";
import KakaoLogin from "../views/KakaoLogin.vue";

const router = createRouter({
  // history: createWebHashHistory("/vuehana/"),
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/about",
      name: "About",
      component: About,
    },
    {
      path: "/todo",
      name: "Todo",
      component: Todo,
    },
    {
      path: "/posts",
      name: "Posts",
      component: Posts,
    },
    {
      path: "/kakao",
      name: "Kakao",
      component: KakaoLogin,
    },
  ],
});

export default router;
