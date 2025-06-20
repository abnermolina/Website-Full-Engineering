import logoTopBar from "../assets/logoTopBar.png";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

export function TopBar() {
  const { t, i18n } = useTranslation();

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === "en" ? "es" : "en");
  };
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        backgroundColor: "rgba(219, 219, 219, 0.6)",
        backdropFilter: "saturate(180%) blur(8px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 20px",
        zIndex: 1000,
      }}
    >
      <div>
        <img
          src={logoTopBar}
          alt="Full Engineering Logo"
          style={{ height: "50px" }}
        />
      </div>

      <div>
        <NavigationMenu className="mr-4">
          <NavigationMenuList>
            {["home", "about", "services", "projects"].map((key) => {
              const href =
                key === "home"
                  ? "#"
                  : key === "about"
                  ? "#about-us"
                  : `#${key}`;
              return (
                <NavigationMenuItem key={key}>
                  <a
                    href={href}
                    className={cn(navigationMenuTriggerStyle(), "text-md")}
                  >
                    {t(`nav.${key}`)}
                  </a>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="flex items-center space-x-2">
        <Button onClick={toggleLang}>
          {i18n.language === "en"
            ? t("language.toggle_es")
            : t("language.toggle_en")}
        </Button>
        <Button className="bg-[#0D1F5F] text-lg hover:bg-blue-900">
          {t("nav.contact")}
        </Button>
      </div>
    </header>
  );
}
