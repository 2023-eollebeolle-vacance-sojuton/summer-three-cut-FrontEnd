import { Route, Routes } from "react-router-dom";
import HomePage from "../pages";
import Result from "../pages/result";
export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      
    </Routes>
  );
}
