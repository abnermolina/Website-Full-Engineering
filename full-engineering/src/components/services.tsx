import { useTranslation } from "react-i18next";
import vectorObrasCiviles from "@/assets/vectorObrasCiviles.png";
import vectorObrasMecanicas from "@/assets/vectorObrasMecanicas.png";
import obrasCiviles from "@/assets/obrasCiviles.png";
import obrasMecanicas from "@/assets/obrasMecanicas.png";
import garantias from "@/assets/garantias.png";
import vectorGarantias from "@/assets/vectorGarantias.png";
import obrasElectricas from "@/assets/obrasElectricas.png";
import vectorObrasElectricas from "@/assets/vectorObrasElectricas.png";
import mantenimiento from "@/assets/mantenimiento.png";
import vectorMantenimiento from "@/assets/vectorMantenimiento.png";

export function Services() {
  const { t } = useTranslation();

  return (
    <div>
      {/* — your existing “Services” header — */}
      <section
        id="services"
        className="scroll-mt-0 relative bg-white py-16 px-4 md:px-20"
      >
        <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 text-left items-center">
          <div>
            <h2 className="inline-block bg-[#0D1F5F] text-white rounded-sm px-4 py-2 text-3xl md:text-4xl font-bold mb-2">
              {t("services")}
            </h2>
          </div>
        </div>
      </section>

      {/* — blue bar + overlapping images — */}
      <div className="w-full mt-10 h-40 overflow-visible">
        {/* full-width bar */}
        <div className="absolute left-0 h-40 w-screen overflow-hidden -z-10 bg-[#0D1F5F]" />

        {/* images row, same height as the bar, centered vertically */}
        <div className="relative h-full max-w-7xl mx-auto flex justify-center items-center space-x-8">
          {/* Obras Civiles */}
          <div className="relative z-10">
            <img
              src={obrasCiviles}
              alt="Obras Civiles"
              className="w-96 rounded-lg shadow-lg object-cover"
            />
            <div className="absolute inset-0 bg-[#FAFAFA] opacity-50 rounded-lg" />
            <img
              src={vectorObrasCiviles}
              className="absolute inset-0 w-8/12 h-8/12 m-auto object-contain pointer-events-none"
            ></img>
          </div>

          {/* Obras Mecánicas */}
          <div className="relative z-10">
            <img
              src={obrasMecanicas}
              alt="Obras Mecánicas"
              className="w-96 rounded-lg shadow-lg object-cover"
            />
            <div className="absolute inset-0 bg-[#FAFAFA] opacity-50 rounded-lg" />
            <img
              src={vectorObrasMecanicas}
              className="absolute inset-0 w-8/12 h-8/12 m-auto object-contain pointer-events-none"
            ></img>
          </div>
        </div>
      </div>

      {/*SECOND ROW OF IMAGES */}
      <div className="h-40 mt-60 overflow-visible w-full">
        <div className="absolute left-0 h-40 w-screen overflow-hidden -z-10 bg-[#0D1F5F]" />

        {/* image row */}
        <div className="relative h-full max-w-7xl mx-auto flex justify-center items-center space-x-8">
          {/* --- Obras Civiles --- */}
          <div className="relative">
            <img
              src={obrasElectricas}
              alt="Obras Civiles"
              className="w-80 rounded-lg shadow-lg object-cover"
            />
            <div className="absolute inset-0 bg-[#FAFAFA] opacity-50 rounded-lg" />
            <img
              src={vectorObrasElectricas}
              alt=""
              className="absolute inset-0 w-8/12 h-8/12 m-auto object-contain pointer-events-none"
            />
          </div>

          {/* --- Obras Mecánicas --- */}
          <div className="relative">
            <img
              src={mantenimiento}
              alt="Obras Mecánicas"
              className="w-80 rounded-lg shadow-lg object-cover"
            />
            <div className="absolute inset-0 bg-[#FAFAFA] opacity-50 rounded-lg" />
            <img
              src={vectorMantenimiento}
              alt=""
              className="absolute inset-0 w-8/12 h-8/12 m-auto object-contain pointer-events-none"
            />
          </div>

          {/* --- Obras Eléctricas (third image) --- */}
          <div className="relative">
            <img
              src={garantias}
              alt="Obras Eléctricas"
              className="w-80 rounded-lg shadow-lg object-cover"
            />
            <div className="absolute inset-0 bg-[#FAFAFA] opacity-50 rounded-lg" />
            <img
              src={vectorGarantias}
              alt=""
              className="absolute inset-0 w-8/12 h-8/12 m-auto object-contain pointer-events-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
