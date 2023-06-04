import React from "react";
import Layout from "./components/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import "./App.css";

const App = () => {
  return (
    <div className="App ">
      <Layout>
        <main className="main_wrap">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </Layout>
    </div>
  );
};

export default App;
