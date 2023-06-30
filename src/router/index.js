import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Todo from "../views/Todo.vue";
import Posts from "../views/Posts.vue";
// import MarkdownViewer from "../views/MarkdownViewer.vue";

const router = createRouter({
  // history: createWebHistory('/vuehana/'),
  history: createWebHistory(),
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
    // {
    //   path: "/posts/:name",
    //   name: "post",
    //   component: MarkdownViewer,
    //   props: true,
    // },
  ],
});

export default router;
