import React from "react";
import SearchPage from "./components/Search";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/searchPage" element={<SearchPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
