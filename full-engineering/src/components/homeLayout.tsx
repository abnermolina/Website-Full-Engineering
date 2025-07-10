import { Outlet } from "react-router-dom";
import { TopBar } from "./topBar";
import { ImageCarousel } from "./imageCarousel";
import { AboutUs } from "../components/aboutUs";
import { Services } from "./services";
import { Projects } from "./projects";
import { ContactUs } from "./contact";

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

      <AboutUs />
      <Services />
      <Projects />
      <ContactUs />

      {/* 2) the rest of your page — scrollable into view */}
      <main>
        <Outlet />
      </main>
    </div>
  );
}
