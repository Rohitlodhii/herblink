import ToolTip from "@/components/helper/TooltipContainer";
import Image from "next/image";

import { useTranslation } from "react-i18next";
import { ComboboxDemo } from "./LanguageSwitcher";
import ThemeButton from "./ThemeSwitcher";
import { FastForward } from "lucide-react";
import { Button } from "@/components/ui/button";

const Accessbility = () => {
  const { t } = useTranslation();

  return (
    <div className="h-8 bg-blue-400 dark:bg-blue-600 w-full flex items-center justify-between px-2">
      <div className="flex gap-2 items-center justify-center text-sm">
        <Image src={"/flag.png"} height={20} width={20} alt="flag" />
        <span className="hidden md:flex font-semibold">
          {t("navbar.accessBarHeaderLeft")}
        </span>
      </div>

      {/* Large Screens */}

      <div className="hidden md:flex gap-4 items-center ">
        {/* <div className="text-sm cursor-pointer">
          {t("navbar.accessBarRightSkipButton")}
        </div> */}
        <ComboboxDemo />
        <ThemeButton />
      </div>

      {/* Small Screens */}

      <div className="md:hidden flex items-center justify-center gap-2">
        <Button className="" variant={"link"} size={"icon-sm"}>
          <FastForward />
        </Button>
        <ComboboxDemo />
        <ThemeButton />
      </div>
    </div>
  );
};

export default Accessbility;
