// Importing all diff components that have their own page or that are global.

import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "../global/Home";
import Articles from '../global/Articles';


//routing all the imported components and also external page links
function AppRoute() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Articles" element={<Articles />} />
          <Route
            path="*"
            element={
              <div>
                  <p>404 NOT FOUND!</p>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AppRoute;
