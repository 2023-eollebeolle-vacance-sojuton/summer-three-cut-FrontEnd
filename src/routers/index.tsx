import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SelectPhotosPage from "../pages/SelectPhotosPage";
import SharePage from "../pages/SharePage";

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/selectphotos" element={<SelectPhotosPage />} />
      <Route path="/share" element={<SharePage />} />
    </Routes>
  );
}
