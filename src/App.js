import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Dashboard from "./containers/Dashboard/Dashboard";

import "./App.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Service from "./containers/Service/Service";
const App = () => {
  const toasterContainer = (
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  );

  let routes = (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/service" element={<Service />} />
        <Route path="*" element={<Dashboard wrongPage />} />
      </Routes>
    </Router>
  );

  return (
    <div className="App">
      {toasterContainer}
      {routes}
    </div>
  );
};

export default App;
