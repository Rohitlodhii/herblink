"use client"

import * as React from "react"
import { Check, ChevronsUpDown, Globe } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
]

export function ComboboxDemo() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <Popover  open={open} onOpenChange={setOpen}>
      <PopoverTrigger className="h-7  border-primary dark:border-white bg-transparent font-medium cursor-pointer flex items-center justify-center" asChild>
        <div className="h-7 bg-transparent">
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[100px] h-7 bg-transparent border-primary dark:border-white overflow-hidden hidden md:flex justify-between"
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : "English"}
          <Globe className="" />
        </Button>
            
            {/* small Screen Language switch button */}


        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[30px] md:hidden h-6 text-xs rounded-sm flex items-center border-primary dark:border-white bg-transparent justify-center"
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : "En"}
         
        </Button>


        </div>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search framework..." className="h-9" />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  {framework.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === framework.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
 