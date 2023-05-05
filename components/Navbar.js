import React from "react";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar bg-light d-flex flex-row">
        <div className="mx-2">
          <h1>Shivam Singhal</h1>
        </div>
        <div className="mx-2">
          <a className="navbar-brand" href="#">
            <img
              src="logo.jpeg"
              alt="Logo"
              width="80rm"
              height="80rm"
              className="d-inline-block align-text-top rounded-circle"
            />
          </a>
        </div>
      </nav>
    </>
  );
};
