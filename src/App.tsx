import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Home = React.lazy(async () => await import("./pages/Home/index"));

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
