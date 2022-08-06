import React from "react";
import Layout from "./components/Layout";
import Routes from "./routes/routes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Layout>
        <Routes></Routes>
      </Layout>
    </Router>
  );
}

export default App;
