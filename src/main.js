import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "highlight.js/styles/github-dark-dimmed.css";
import dotenv from "dotenv";
dotenv.config();
library.add(faBars);

const app = createApp(App);
app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");

window.Kakao.init(process.env.KAKAO_API_KEY);
