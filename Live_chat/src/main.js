import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/global.css";
import { projectAuth } from "./firebase/config";
let app; // app has some value after every refresh, no value if initailly loaded
projectAuth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App).use(router).mount("#app");
  }
});
