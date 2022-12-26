import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Blog from "./routes/Blog";
import Contacts from "./routes/Contacts";
import Homepage from "./routes/HomePage";

function App() {
  return (
    <>
      <Nav />
      <Suspense fallback={<div>...loading</div>}>
        <div className="app">
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={<div>...loading</div>}>
                  <Homepage />
                </Suspense>
              }
            />
            <Route
              path="/blog"
              element={
                <Suspense fallback={<div>...loading</div>}>
                  <Blog />
                </Suspense>
              }
            />

            <Route
              path="/contacts"
              element={
                <Suspense fallback={<div>...loading</div>}>
                  <Contacts />
                </Suspense>
              }
            />
          </Routes>
        </div>
      </Suspense>
      {/* empty <></> just to avoid .app style for nav (push it to the right) */}
    </>
  );
}

export default App;
