
import React from "react";
import { Route, Routes } from "react-router";
//import './App.css';
//import Landing from "./pages/LandingPage/Landing";
import LandingPage from "./pages/LandingPage/LandingPage";
import MainPage from './pages/mainPage/mainPage';


const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <LandingPage />
          </>
        }
      />
      <Route
        path="/MainPage"
        element={
          <>
            <MainPage />
          </>
        }
      />
    </Routes>
  );
};

export default App;
