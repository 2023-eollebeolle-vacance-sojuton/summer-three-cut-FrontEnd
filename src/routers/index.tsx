import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Result from "../pages/result";

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  );
}
