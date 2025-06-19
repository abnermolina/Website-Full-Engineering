import { Route, Routes } from "react-router-dom";
import { HomeLayout } from "./components/homeLayout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}></Route>
    </Routes>
  );
}
