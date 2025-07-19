import logoTopBar from "../assets/logoTopBar.png";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import { Menu } from "lucide-react";
import { useState } from "react";

export function TopBar() {
  const { t, i18n } = useTranslation();

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === "en" ? "es" : "en");
  };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 w-full z-50"
      style={{
        backgroundColor: "rgba(219, 219, 219, 0.6)",
        backdropFilter: "saturate(180%) blur(8px)",
      }}
    >
      {/* Mobile: hamburger + logo */}
      <div className="flex items-center justify-between p-4 md:hidden">
        <button
          onClick={() => setMobileMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <Menu className="h-6 w-6 text-gray-800" />
        </button>
        <img src={logoTopBar} alt="Full Engineering Logo" className="h-10" />
        <Button onClick={toggleLang}>
          {i18n.language === "en"
            ? t("language.toggle_es")
            : t("language.toggle_en")}
        </Button>
      </div>

      {/* Mobile menu panel */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col p-4 space-y-2">
            {["home", "about", "services", "projects", "contact"].map((key) => {
              const href =
                key === "home"
                  ? "#"
                  : key === "about"
                  ? "#about-us"
                  : key === "contact"
                  ? "#contact-us"
                  : `#${key}`;
              return (
                <li key={key}>
                  <a
                    href={href}
                    className="block text-lg font-medium text-gray-700 hover:text-blue-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t(`nav.${key}`)}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      )}

      {/* Desktop / Tablet */}
      <div className="hidden md:flex items-center justify-between px-8 py-2">
        {/* Logo */}
        <div>
          <img src={logoTopBar} alt="Full Engineering Logo" className="h-14" />
        </div>

        {/* Nav links */}
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
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "text-md lg:text-lg"
                    )}
                  >
                    {t(`nav.${key}`)}
                  </a>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Lang toggle + contact */}
        <div className="flex items-center space-x-2">
          <Button onClick={toggleLang}>
            {i18n.language === "en"
              ? t("language.toggle_es")
              : t("language.toggle_en")}
          </Button>
          <a href="#contact-us" className="focus:outline-none">
            <Button className="bg-[#0D1F5F] text-lg hover:bg-blue-900">
              {t("nav.contact")}
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}
