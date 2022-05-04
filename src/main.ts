import { createSSRApp } from "vue";
import App from "./App.vue";
import store, { key } from "@/store";
import 'virtual:windi-components.css'
import 'virtual:windi-utilities.css'
export function createApp() {
  const app = createSSRApp(App);
  app.use(store, key);
  return {
    app,
  };
}
