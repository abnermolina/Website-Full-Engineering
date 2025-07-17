import { useState, useEffect, useRef } from "react";
import img1 from "../assets/Slideshow 1.png";
import img2 from "../assets/Slideshow 2.png";
import img3 from "../assets/Slideshow 3.png";
import { useTranslation } from "react-i18next";

export function ImageCarousel() {
  const { t } = useTranslation();
  const images = [img1, img2, img3];
  const words = t("carousel.words", { returnObjects: true }) as string[];
  const prefix = t("carousel.prefix");

  const [currentImage, setCurrentImage] = useState(0);
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const speedRef = useRef(200);

  useEffect(() => {
    const handleType = () => {
      const currentWord = words[wordIndex % words.length];
      setText((prev) =>
        isDeleting
          ? currentWord.substring(0, prev.length - 1)
          : currentWord.substring(0, prev.length + 1)
      );

      speedRef.current = isDeleting ? 100 : 180;

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);

        // compute next wordIndex
        const nextWordIndex = wordIndex + 1;

        // ➡️ advance only on every 2nd word
        if (nextWordIndex % 2 === 0) {
          setCurrentImage((img) => (img + 1) % images.length);
        }

        // now bump the index
        setWordIndex(nextWordIndex);
      }
    };

    const timer = setTimeout(handleType, speedRef.current);
    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex]);

  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {images.map((src, idx) => (
        <img
          key={idx}
          src={src}
          alt={`slide ${idx + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            idx === currentImage ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1 className="text-4xl md:text-7xl font-bold text-white drop-shadow-lg">
          {prefix} <span className="border-r-2 border-white pr-2">{text}</span>
        </h1>
      </div>
    </div>
  );
}
