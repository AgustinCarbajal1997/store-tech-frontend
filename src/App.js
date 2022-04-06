import RouterEcommerce from "./navigation/Router";
import { BrowserRouter as HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <div>
      <Provider store={store}>
        <HashRouter>
          <RouterEcommerce />
        </HashRouter>
      </Provider>
    </div>
  );
}

export default App;
