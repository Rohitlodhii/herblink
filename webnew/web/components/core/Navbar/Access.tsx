import ToolTip from "@/components/helper/TooltipContainer";
import Image from "next/image";

import { useTranslation } from "react-i18next";
import { ComboboxDemo } from "./LanguageSwitcher";
import ThemeButton from "./ThemeSwitcher";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ALargeSmall, FastForward } from "lucide-react";
import { Button } from "@/components/ui/button";

const Accessbility = () => {
  const { t } = useTranslation("common");

  return (
    <div className="h-8 bg-blue-400 dark:bg-blue-600 w-full flex items-center justify-between px-2">
      <div className="flex gap-2 items-center justify-center text-sm">
        <Image src={"/flag.png"} height={20} width={20} alt="flag" />
        <span className="hidden md:flex font-semibold">{t("access.goi")}</span>
      </div>

    {/* Large Screens */}

      <div className="hidden md:flex gap-4 items-center ">
        <div className="text-sm   cursor-pointer">Skip to main content</div>

        <div className="flex items-center border border-primary  h-6 rounded-sm text-sm font-medium overflow-hidden  ">
          <div className="border-r border-primary px-2 hover:bg-blue-500">
            <ToolTip trigger={t("access.A+")} content={t("access.tpA+")} />
          </div>
          <div className="border-r border-primary px-2  hover:bg-blue-500">
            <ToolTip trigger={t("access.A")} content={t("access.tpA")} />
          </div>
          <div className="px-2  hover:bg-blue-500">
            <ToolTip trigger={t("access.A-")} content={t("access.tpA-")} />
          </div>
        </div>

        <div>
          <ComboboxDemo />
        </div>

        <div>
          <ThemeButton />
        </div>
      </div>



    {/* Small Screens */}
    

      <div className="md:hidden flex items-center  justify-center">
        <Button className="" variant={"link"} size={"icon-sm"}>
          <FastForward/>
        </Button>
      <Popover>
          <PopoverTrigger><ALargeSmall className="size-6 mr-2"/></PopoverTrigger>
          <PopoverContent className="w-[150px] p-0 overflow-hidden rounded-lg">
          <div className="flex flex-col h-full w-full">
            <Button className="w-full rounded-none flex items-center justify-center gap-1" variant={'outline'}>{t("access.A+")} <span className="text-xs font-medium">{t("access.tpA+")}</span> </Button>
            <Button className="w-full  rounded-none" variant={'outline'}>{t("access.A")} <span className="text-xs font-medium">{t("access.tpA")}</span> </Button>
            <Button className="w-full  rounded-none" variant={'outline'}>{t("access.A-")} <span className="text-xs font-medium">{t("access.tpA-")}</span> </Button>
          </div>
          </PopoverContent>
        </Popover>
        <ComboboxDemo />
        <ThemeButton/>
      
      </div>


    </div>
  );
};

export default Accessbility;
