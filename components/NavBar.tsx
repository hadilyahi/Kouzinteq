"use client";
import React, { ChangeEvent, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

const NavBar = () => {
  const [isRecipesMenuOpen, setIsRecipesMenuOpen] = useState(false);
  const t = useTranslations();
  const locale = useLocale(); // This will give you the current locale (e.g., 'en' or 'ar')
  const pathname = usePathname();
  const router = useRouter();
  const toggleRecipesMenu = () => setIsRecipesMenuOpen(!isRecipesMenuOpen);
  const handleRecipeItemClick = () => setIsRecipesMenuOpen(false);
  
  // Handle language change
  const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value as string;
    const path = pathname.split("/").slice(2).join("/");
    router.push(`/${newLocale}/${path}`);
  };

  return (
    <div
      className={`flex justify-between items-center p-4 relative w-full h-[95px] 
        ${locale === "ar" ? "rtl" : "ltr"} 
        ${locale === "ar" ? "font-arabic" : "font-english"}`}
    >
      <div className="flex items-center ml-2">
        {/* Change the logo image based on the current language */}
        <Image
          src={locale === "ar" ? "/LogoAr.png" : "/LogoEN.png"}
          alt="Logo"
          width={200}
          height={100}
        />
      </div>

      <div className="hidden md:flex flex-1 justify-center items-center">
        <div className="flex gap-10 items-center">
          <Link href={"/User/home"}>
            <button className="font-itim text-lg md:text-xl hover:text-[#2d552f]">
              {t("home")}
            </button>
          </Link>
          <div className="relative">
            <button
              onClick={toggleRecipesMenu}
              className="font-itim text-lg md:text-xl hover:text-[#2d552f]"
            >
              {t("Recipes")}
            </button>
            {isRecipesMenuOpen && (
              <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-[#FFFBE6] border border-gray-300 rounded-lg shadow-lg w-max grid grid-cols-2 gap-4 p-4 z-40">
                <h3 className="md:text-lg text-2xl font-itim mt-4 px-4 col-span-2">
                  Choose your category!
                </h3>
                {[
                  { href: "", alt: "Traditional", title: t("Traditional") },
                  { href: "", alt: "Modern", title: t("Modern") },
                  { href: "", alt: "Sweets", title: t("Sweets") },
                  { href: "", alt: "Drinks", title: t("Drinks") },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="w-full flex items-center text-black text-sm md:text-lg font-itim text-center py-2 hover:bg-[#FDDCA1]"
                  >
                    <Link href={item.href}>
                      <button onClick={handleRecipeItemClick}>{item.title}</button>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
          <Link href={""}>
            <button className="font-itim text-lg md:text-xl hover:text-[#2d552f]">
              {t("healthy_food")}
            </button>
          </Link>
          <Link href={""}>
            <button className="font-itim text-lg md:text-xl hover:text-[#2d552f]">
              {t("about")}
            </button>
          </Link>
        </div>
      </div>

      <div className="md:flex mr-4">
        <button className="font-itim text-lg md:text-xl bg-[#E8C27F] rounded-xl p-2 text-black">
          {t("Sign_up")}
        </button>
      </div>

      {/* Language selection dropdown */}
      <div>
        <select
          value={locale}
          onChange={handleLanguageChange}
          className="rounded-xl px-4 py-2 bg-transparent hover:outline-none focus:outline-none"
        >
          <option value="en">EN</option>
          <option value="ar">AR</option>
        </select>
      </div>
    </div>
  );
};

export default NavBar;
