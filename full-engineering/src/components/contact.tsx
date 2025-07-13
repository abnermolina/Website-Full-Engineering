import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import contactImg from "@/assets/contactUs.png";
import logoContact from "@/assets/logoContact.png";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(XYZ)-ABC-DEFG",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "team@full-engineering.com",
  },
];

export function ContactUs() {
  const { t } = useTranslation();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const recipient = "team@full-engineering.com";
    const subject = encodeURIComponent(`Contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );

    const mailtoLink = `mailto:${recipient}?subject=${subject}&body=${body}`;

    // open default mail client
    window.location.href = mailtoLink;
  }

  return (
    <div>
      <section
        id="contact-us"
        className="scroll-mt-2 relative bg-white  mb-2 px-4 md:px-20"
      >
        <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 text-left items-center">
          <div>
            <h2 className="inline-block bg-[#0D1F5F] text-white rounded-sm px-4 py-2 text-3xl md:text-4xl font-bold mb-2">
              {t("contact.contactUs")}
            </h2>
          </div>
        </div>
      </section>
      {/* ── Section header ─────────────────────── */}
      <section className="realtive overflow-hidden px-4 pb-16 md:px-20">
        <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 items-center">
          {/* Title */}
          <div className="w-full max-w-lg">
            <p className="text-4xl text-left font-bold text-[#0D1F5F]">
              {t("contact.phrase")}
            </p>
            <div className="mt-4">
              <div className="flex-1 flex items-center order-1 xl:order-none mb-8 xl:mb-0">
                <ul className="flex flex-col gap-5">
                  {info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex text-left items-center gap-6"
                      >
                        <div className="bg-[rgba(219,219,219,0.6)] rounded-lg w-[50px] h-[50px] xl:w-[58px] xl:h-[58px] flex items-center justify-center">
                          <div className="text-[20px]">{item.icon}</div>
                        </div>
                        <div className="flex-1 flex flex-col justify-center">
                          <p className="text-md text-gray-500">{item.title}</p>
                          <h3 className="text-xl">{item.description}</h3>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>

          {/* ── Card ───────────────────────────── */}
          <Card className="w-full max-w-lg bg-[#0D1F5F] text-white">
            <CardHeader className="flex flex-col items-center gap-4">
              <img
                src={logoContact}
                alt="Business logo"
                className="h-16 w-auto"
              />
              <p className="text-white text-lg font-bold">
                "Solid Engineering Now!"
              </p>
            </CardHeader>

            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-4">
                <Input
                  required
                  name="name"
                  placeholder={t("contact.name")}
                  value={form.name}
                  onChange={handleChange}
                  className="text-white"
                />
                <Input
                  required
                  type="email"
                  name="email"
                  placeholder={t("contact.email")}
                  value={form.email}
                  onChange={handleChange}
                  className="text-white"
                />
                <Textarea
                  required
                  name="message"
                  placeholder={t("contact.message")}
                  rows={15}
                  value={form.message}
                  onChange={handleChange}
                  className="text-white"
                />
              </CardContent>

              <CardFooter className="space-y-4 mt-4">
                <Button
                  type="submit"
                  className="w-full space-y-4 bg-white text-[#0D1F5F] font-bold hover:opacity-90"
                >
                  {t("contact.send")}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </div>
      </section>
    </div>
  );
}
