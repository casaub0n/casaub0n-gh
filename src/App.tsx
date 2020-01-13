import React from "react";
import { Provider } from "react-redux";
import { MainAreaConnected } from "./containers/MainAreaContainer";
import { store } from "./store";

const App: React.SFC = () => {
  return (
    <Provider store={store}>
      <MainAreaConnected />
    </Provider>
  );
};

export default App;
