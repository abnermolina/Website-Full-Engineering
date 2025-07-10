import { useTranslation } from "react-i18next";
import projectsES from "@/assets/ProjectsES.png";
import projectsEN from "@/assets/ProjectsEN.png";
import smallProjectsEN from "@/assets/smallScreenProjectsEN.png";
import smallProjectsES from "@/assets/smallScreenProjectsES.png";

export function Projects() {
  const { t, i18n } = useTranslation();

  // pick the right image based on the active locale
  const projectsImg = i18n.resolvedLanguage === "es" ? projectsES : projectsEN;
  const smallProjectsImg =
    i18n.resolvedLanguage === "es" ? smallProjectsES : smallProjectsEN;

  return (
    <section
      id="projects"
      className="scroll-mt-4 relative bg-white py-16 md:px-20"
    >
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 text-left items-center">
        <div>
          <h2 className="inline-block bg-[#0D1F5F] text-white rounded-sm px-4 py-2 text-3xl md:text-4xl font-bold mb-4 md:mb-2">
            {t("projects")}
          </h2>
        </div>
      </div>
      <div>
        {/* small screens */}
        <img
          src={smallProjectsImg}
          alt={t("projects")}
          className="block md:hidden w-full"
        />
        {/* md+ screens */}
        <img
          src={projectsImg}
          alt={t("projects")}
          className="hidden md:block w-full"
        />
      </div>
    </section>
  );
}
