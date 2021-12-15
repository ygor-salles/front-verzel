import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Modules from "./pages/Modules";
import ModulesList from "./pages/Modules/components/ModuleList";
import Register from "./pages/Register";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="login" element={<Login />}></Route>
      <Route path="register" element={<Register />}></Route>
      <Route path="module/create" element={<Modules />}></Route>
      <Route path="module/list" element={<ModulesList />}></Route>
      <Route path="module/update/:id" element={<ModulesList />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}

export const NotFound = () => {
  return <div>This is a 404 page</div>;
};

export default Routers;
