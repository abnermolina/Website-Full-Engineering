import { Outlet } from "react-router-dom";
import { TopBar } from "./topBar";

export function HomeLayout() {
  return (
    <div>
      <TopBar />
      <div>
        <Outlet />
      </div>
    </div>
  );
}
