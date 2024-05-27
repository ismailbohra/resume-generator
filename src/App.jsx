import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/portfolio";
import Resume from "./pages/Resume/Resume";
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux';
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/portfolio" element={<Portfolio />}></Route>
            <Route path="/resume" element={<Resume />}></Route>
            <Route path="*" element={<Home />}></Route>
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
