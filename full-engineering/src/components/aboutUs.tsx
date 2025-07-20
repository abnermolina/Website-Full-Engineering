// src/components/AboutUs.tsx
import { useTranslation } from "react-i18next";
import hexagonDesign from "../assets/hexagons 1.png"; // your hexagon overlay
import hexagonDesign2 from "../assets/hexagons 4.png";
import hexagonDesign3 from "../assets/hexagons 3.png";
import liftMotorImg from "@/assets/liftingMotor.png";
import valuesImg from "@/assets/valuesImg.png";
import machineWork from "@/assets/machineWork.jpeg";

export function AboutUs() {
  const { t } = useTranslation();
  const valuesList = t("values.list", { returnObjects: true }) as string[];
  const locationsArr = t("locations", { returnObjects: true }) as string[];
  const locations = locationsArr.join("\u00A0\u00A0 - \u00A0\u00A0");

  // join with non-breaking spaces around the dash

  return (
    <div>
      {/* VISION */}
      <section
        id="about-us"
        className="scroll-mt-4 sm:scroll-mt-10 relative bg-white pb-16 pt-6 sm:py-16 px-4 md:px-20"
      >
        <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 text-left items-center">
          {/* TEXT BLOCK */}
          <div>
            <h2 className="inline-block bg-[#0D1F5F] text-white rounded-sm px-4 py-2 text-3xl md:text-4xl font-bold mb-2">
              {t("about.heading")}
            </h2>
            <p className="text-lg md:text-xl uppercase tracking-wider mb-6">
              {t("about.tagline")}
            </p>

            <h3 className="text-2xl font-semibold mb-2">
              {t("about.visionTitle")}
            </h3>
            <p className="text-base leading-relaxed">{t("about.visionText")}</p>
          </div>

          {/* IMAGE + HEXAGON OVERLAY */}
          <div className="relative w-full overflow-visible">
            <img
              src={machineWork}
              alt="Worker operating machinery"
              className="w-full rounded-lg shadow-lg"
            />

            <img
              src={hexagonDesign}
              alt=""
              className="absolute -top-8 -right-8  w-36 h-32 md:w-48 md:h-48 pointer-events-none"
            />
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section id="mission" className="relative bg-white py-16 px-4 md:px-20">
        <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 text-left md:text-right items-center">
          <div className="relative w-full overflow-visible">
            <img
              src={liftMotorImg}
              alt="Our mission illustration"
              className="w-full rounded-lg shadow-lg"
            />
            <img
              src={hexagonDesign2}
              alt=""
              className="absolute -top-14 -left-14 w-32 h-32 md:w-48 md:h-48 pointer-events-none"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              {t("mission.heading")}
            </h2>
            <p className="text-base leading-relaxed">{t("mission.text")}</p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section id="values" className="relative bg-white pb-16 px-4 md:px-20">
        <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 items-center sm:justify-items-center justify-items-start">
          <div>
            <h2 className="text-2xl text-left font-semibold mb-7">
              {t("values.heading")}
            </h2>

            <ul className="list-none text-left space-y-4 text-base leading-relaxed grid grid-cols-2 gap-x-4">
              {valuesList.map((val, i) => (
                <li key={i}>{val}</li>
              ))}
            </ul>
          </div>
          <div className="relative w-full overflow-visible">
            <img
              src={valuesImg}
              alt="Our core values illustration"
              className="w-full rounded-lg shadow-lg"
            />
            <img
              src={hexagonDesign3}
              alt=""
              className="absolute -top-18 -right-12 w-28 h-28 md:w-48 md:h-48 pointer-events-none"
            />
          </div>
        </div>
        <div className="mt-28 text-center">
          <p className=" text-center text-lg md:text-xl font-medium">
            {locations}
          </p>
        </div>
      </section>
    </div>
  );
}
