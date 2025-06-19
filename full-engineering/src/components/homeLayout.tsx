import { Outlet } from "react-router-dom";
import { TopBar } from "./topBar";
import { ImageCarousel } from "./imageCarousel";

export function HomeLayout() {
  return (
    <div>
      {/* your fixed header */}
      <TopBar />

      {/* 1) full‐screen carousel */}
      <div className="h-screen w-full overflow-hidden">
        <ImageCarousel />
        <div className="absolute bottom-0 left-0 w-screen h-2 bg-[#0D1F5F]" />
      </div>

      {/* 2) the rest of your page — scrollable into view */}
      <main className="relative z-10 p-8">
        <Outlet />
      </main>
    </div>
  );
}
