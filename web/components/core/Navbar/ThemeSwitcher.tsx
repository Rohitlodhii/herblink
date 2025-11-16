import { Button } from '@/components/ui/button'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'


const ThemeButton = () => {
    const { theme,setTheme } = useTheme()

  return (
    <div>
        {theme === "dark" ? 
        (
            <Button className=" bg-none hover:bg-transparent cursor-pointer" variant={"link"} size={"icon-sm"} onClick={() => setTheme("light")}>
                <Sun className='size-4' />
            </Button>
        ) : (
            <Button className=" bg-none hover:bg-transparent cursor-pointer" variant={"link"} size={"icon-sm"} onClick={() => setTheme("dark")}>
            <Moon className='size-4' />
        </Button>
        )
        }
    </div>
  )
}

export default ThemeButton
