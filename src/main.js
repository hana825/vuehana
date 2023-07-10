import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "highlight.js/styles/github-dark-dimmed.css";
import dotenv from "dotenv";
import vue3GoogleLogin from "vue3-google-login";
dotenv.config();
library.add(faBars);

const app = createApp(App);
app.use(router);
app.use(vue3GoogleLogin, {
  clientId: "670480048319-ano7b50ulffmb20fl9v4513nksar2h30.apps.googleusercontent.com",
});
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");

// window.Kakao.init(process.env.KAKAO_API_KEY);
window.Kakao.init("f95e6ebd9c630d65b9b6e35f3a025f1d");
