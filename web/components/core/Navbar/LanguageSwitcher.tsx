"use client"

import * as React from "react";
import { Check, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const LANG_OPTIONS = [
  { value: "en", label: "English" },
  { value: "hi", label: "हिंदी (Hindi)" },
  { value: "mr", label: "मराठी (Marathi)" },
  { value: "ta", label: "தமிழ் (Tamil)" },
  { value: "te", label: "తెలుగు (Telugu)" },
  { value: "kn", label: "ಕನ್ನಡ (Kannada)" },
  { value: "bn", label: "বাংলা (Bengali)" },
  { value: "pa", label: "ਪੰਜਾਬੀ (Punjabi)" },
  { value: "gu", label: "ગુજરાતી (Gujarati)" },
];

export function ComboboxDemo() {
  const [open, setOpen] = React.useState(false);
  const { i18n } = useTranslation();

  const availableLangs = React.useMemo(
    () => Object.keys(i18n.options?.resources || {}),
    [i18n.options?.resources]
  );

  const options =
    availableLangs.length > 0
      ? LANG_OPTIONS.filter((opt) => availableLangs.includes(opt.value))
      : LANG_OPTIONS;

  const currentLang = (i18n.language || "en").split("-")[0];
  const selectedLabel =
    options.find((item) => item.value === currentLang)?.label || "English";

  const handleSelect = (lang: string) => {
    const next = lang === currentLang ? currentLang : lang;
    i18n.changeLanguage(next);
    if (typeof window !== "undefined") {
      localStorage.setItem("i18nextLng", next);
    }
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        className="h-7 border-primary dark:border-white bg-transparent font-medium cursor-pointer flex items-center justify-center"
        asChild
      >
        <div className="h-7 bg-transparent">
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[120px] h-7 bg-transparent border-primary dark:border-white overflow-hidden hidden md:flex justify-between"
          >
            <span className="truncate">{selectedLabel}</span>
            <Globe className="ml-2 h-4 w-4 shrink-0" />
          </Button>

          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[36px] md:hidden h-6 text-xs rounded-sm flex items-center border-primary dark:border-white bg-transparent justify-center"
          >
            {(currentLang || "en").toUpperCase()}
          </Button>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-[220px] p-0">
        <Command>
          <CommandInput placeholder="Search language..." className="h-9" />
          <CommandList>
            <CommandEmpty>No language found.</CommandEmpty>
            <CommandGroup>
              {options.map((lang) => (
                <CommandItem
                  key={lang.value}
                  value={lang.value}
                  onSelect={(currentValue) => handleSelect(currentValue)}
                >
                  {lang.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      currentLang === lang.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}