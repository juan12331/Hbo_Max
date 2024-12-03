//importando biblioteca
import { Route, Routes } from "react-router-dom";

import Landing from "../src/pages/landing/landing.jsx";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
    </Routes>
  );
}

export default MainRoutes;