import { ThemeProvider } from "@/app/providers/ThemeProvider";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import BaseLayout from "./layouts/BaseLayout";
import { store } from "./appStore";
import "@/shared/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ThemeProvider>
      <BaseLayout />
    </ThemeProvider>
  </Provider>
);
