import { useTranslation } from "react-i18next";
import vectorObrasCiviles from "@/assets/vectorObrasCivilesES.png";
import vectorObrasMecanicas from "@/assets/vectorObrasMecanicasES.png";
import obrasCiviles from "@/assets/obrasCiviles.png";
import obrasMecanicas from "@/assets/obrasMecanicas.png";
import garantias from "@/assets/garantias.png";
import vectorGarantias from "@/assets/vectorGarantiasES.png";
import obrasElectricas from "@/assets/obrasElectricas.png";
import vectorObrasElectricas from "@/assets/vectorObrasElectricasES.png";
import mantenimiento from "@/assets/mantenimiento.png";
import vectorMantenimiento from "@/assets/vectorMantenimientoES.png";

import vectorCivilWorksEN from "@/assets/civilWorksVector.png";
import vectorMechWorksEN from "@/assets/mechanicalWorksVector.png";
import vectorWarrantiesEN from "@/assets/warrantiesVector.png";
import vectorElecWorksEN from "@/assets/electricalWorksVector.png";
import vectorMaintenanceEN from "@/assets/maintenaceVector.png";

export function Services() {
  const { t, i18n } = useTranslation();

  const vectorCivil =
    i18n.resolvedLanguage === "es" ? vectorObrasCiviles : vectorCivilWorksEN;
  const vectorMech =
    i18n.resolvedLanguage === "es" ? vectorObrasMecanicas : vectorMechWorksEN;
  const vectorWarranty =
    i18n.resolvedLanguage === "es" ? vectorGarantias : vectorWarrantiesEN;
  const vectorElec =
    i18n.resolvedLanguage === "es" ? vectorObrasElectricas : vectorElecWorksEN;
  const vectorMaint =
    i18n.resolvedLanguage === "es" ? vectorMantenimiento : vectorMaintenanceEN;

  const services = [
    { img: obrasCiviles, icon: vectorCivil, alt: t("services.civil") },
    { img: obrasMecanicas, icon: vectorMech, alt: t("services.mechanical") },
    { img: obrasElectricas, icon: vectorElec, alt: t("services.electrical") },
    { img: mantenimiento, icon: vectorMaint, alt: t("services.maintenance") },
    { img: garantias, icon: vectorWarranty, alt: t("services.warranty") },
  ];

  return (
    <div>
      {/* — your existing “Services” header — */}
      <section
        id="services"
        className="scroll-mt-22 md:scroll-mt-4 relative bg-white md:py-16 px-4 md:px-20"
      >
        <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 text-left items-center">
          <div>
            <h2 className="inline-block bg-[#0D1F5F] text-white rounded-sm px-4 py-2 text-3xl md:text-4xl font-bold mb-4 md:mb-2">
              {t("services")}
            </h2>
          </div>
        </div>
      </section>

      {/* — md+ only: blue bar + overlapping images — */}
      <div className="hidden md:block">
        {/* first row (exactly your original code) */}
        <div className="w-full mt-10 h-40 overflow-visible">
          <div className="absolute left-0 h-40 w-screen overflow-hidden -z-10 bg-[#0D1F5F]" />
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
                src={vectorCivil}
                className="absolute inset-0 w-8/12 h-8/12 m-auto object-contain pointer-events-none"
              />
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
                src={vectorMech}
                className="absolute inset-0 w-8/12 h-8/12 m-auto object-contain pointer-events-none"
              />
            </div>
          </div>
        </div>

        {/* second row (exactly your original code) */}
        <div className="h-40 mt-60 mb-40 overflow-visible w-full">
          <div className="absolute left-0 h-40 w-screen overflow-hidden -z-10 bg-[#0D1F5F]" />
          <div className="relative h-full max-w-7xl mx-auto flex justify-center items-center space-x-8">
            <div className="relative">
              <img
                src={obrasElectricas}
                alt="Obras Eléctricas"
                className="w-80 rounded-lg shadow-lg object-cover"
              />
              <div className="absolute inset-0 bg-[#FAFAFA] opacity-50 rounded-lg" />
              <img
                src={vectorElec}
                alt=""
                className="absolute inset-0 w-9/12 h-9/12 m-auto object-contain pointer-events-none"
              />
            </div>
            <div className="relative">
              <img
                src={mantenimiento}
                alt="Mantenimiento"
                className="w-80 rounded-lg shadow-lg object-cover"
              />
              <div className="absolute inset-0 bg-[#FAFAFA] opacity-50 rounded-lg" />
              <img
                src={vectorMaint}
                alt=""
                className="absolute inset-0 w-9/12 h-9/12 m-auto object-contain pointer-events-none"
              />
            </div>
            <div className="relative">
              <img
                src={garantias}
                alt="Garantías"
                className="w-80 rounded-lg shadow-lg object-cover"
              />
              <div className="absolute inset-0 bg-[#FAFAFA] opacity-50 rounded-lg" />
              <img
                src={vectorWarranty}
                alt=""
                className="absolute inset-0 w-9/12 h-9/12 m-auto object-contain pointer-events-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* — small only: single-column cards, no blue bars — */}
      <div className="block md:hidden px-4 space-y-8">
        {services.map((svc, i) => (
          <div key={i} className="relative mx-auto max-w-xs">
            <img
              src={svc.img}
              alt={svc.alt}
              className="w-full rounded-lg shadow-lg object-cover"
            />
            <div className="absolute inset-0 bg-[#FAFAFA] opacity-50 rounded-lg" />
            <img
              src={svc.icon}
              alt=""
              className="absolute inset-0 w-2/3 h-2/3 m-auto object-contain pointer-events-none"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
