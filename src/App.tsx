import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Page } from "./components/Page";

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Page />
    </div>
  );
};
