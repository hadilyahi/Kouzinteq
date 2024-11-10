import { useTranslations } from "next-intl";


export default function Home() {
  const t = useTranslations("NavbarLinks"); // This provides the translation function

  return (
    <>
      <div className="flex w-full items-center justify-center">
        <div className="text-3xl font-bold mt-20">{t("home")}</div>
      </div>
    </>
  );
}
