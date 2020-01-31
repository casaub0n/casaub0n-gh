import React from "react";
import { Provider } from "react-redux";
import { MainAreaConnected } from "./containers/MainAreaContainer";
import { store } from "./store";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/" component={MainAreaConnected} />
      </Router>
    </Provider>
  );
};

export default App;
