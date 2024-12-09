import React from "react";
import { Link } from "react-router-dom";

const Header = ({ searchInputRef, focusSearchInput }) => {
  return (
    <header>
      <h1>Animal Adoption Platform</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="/dashboard">Dashboard</Link> |{" "}
        <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
      </nav>
      <div>
        <input ref={searchInputRef} type="text" placeholder="Search animals..." />
        <button onClick={focusSearchInput}>Focus Search</button>
      </div>
    </header>
  );
};

export default Header;
