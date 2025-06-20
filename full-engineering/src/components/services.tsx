import { useTranslation } from "react-i18next";
import obrasCivilesImg from "@/assets/vectorObrasCiviles.png";
import obrasMecanicasImg from "@/assets/vectorObrasMecanicas.png";
import obrasCiviles from "@/assets/obrasCiviles.png";
import obrasMecanicas from "@/assets/obrasMecanicas.png";

export function Services() {
  const { t } = useTranslation();
  return (
    <div>
      <section
        id="services"
        className="scroll-mt-20 relative bg-white py-16 px-4 md:px-20"
      >
        <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 text-left items-center">
          <div>
            <h2 className="inline-block bg-[#0D1F5F] text-white rounded-sm px-4 py-2 text-3xl md:text-4xl font-bold mb-2">
              {t("services")}
            </h2>
          </div>
        </div>
      </section>
      <section className="w-screen bg-[#0D1F5F] py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Obras Civiles */}
          <div className="relative">
            <img
              src={obrasCiviles} // ← import this at top
              alt="Obras Civiles"
              className="w-full rounded-lg shadow-lg"
            />
            {/* optional overlay icon/text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <img
                src={obrasCivilesImg} // ← import this at top
                alt="Obras Civiles"
                className="w-full rounded-lg shadow-lg"
              />
              <span className="absolute bottom-4 text-2xl font-semibold text-black">
                Obras Civiles
              </span>
            </div>
          </div>

          {/* Obras Mecánicas */}
          <div className="relative">
            <img
              src={obrasMecanicas} // ← import this at top
              alt="Obras Mecánicas"
              className="w-full rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <img
                src={obrasMecanicasImg} // ← import this at top
                alt="Obras Mecánicas"
                className="w-frounded-lg shadow-lg"
              />
              <span className="absolute bottom-4 text-2xl font-semibold text-black">
                Obras Mecánicas
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
