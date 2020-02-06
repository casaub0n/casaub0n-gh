import React from "react";
import { Provider } from "react-redux";
import { MainAreaConnected } from "./containers/MainAreaContainer";
import { CvConnected } from "./containers/CvContainer";
import { store } from "./store";
import { Route, HashRouter, Switch } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <HashRouter>
        <Switch>
          <Route path="/" component={MainAreaConnected} />
          <Route path="/cv" component={CvConnected} />
        </Switch>
      </HashRouter>
    </Provider>
  );
};

export default App;
