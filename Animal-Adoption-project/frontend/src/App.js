import React, { useRef } from "react";
import { Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import AnimalList from "./components/AnimalList";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";
import AdoptionForm from "./components/AdoptionForm";
import './App.css';

const App = () => {
  const searchInputRef = useRef(null);

  const focusSearchInput = () => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  return (
      <div className="app">
        <Header searchInputRef={searchInputRef} focusSearchInput={focusSearchInput} />
        <Routes>
          <Route path="/" element={<AnimalList />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/adopt/:id" element={<AdoptionForm />} />
        </Routes>
      </div>
  );
};

export default App;

