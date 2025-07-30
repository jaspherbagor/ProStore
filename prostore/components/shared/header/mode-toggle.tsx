"use client";
import { 
    DropdownMenu, 
    DropdownMenuTrigger, 
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuContent,
} from "@radix-ui/react-dropdown-menu";
import { useTheme } from "next-themes";
import {SunIcon, MoonIcon, SunMoon} from 'lucide-react';
import { Button } from "@/components/ui/button";
const ModeToggle = () => {
    const {theme, setTheme} = useTheme();
    return  <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant="ghost">
                {theme === 'system' ? (<SunMoon />) : theme === 'dark' ? (<MoonIcon />) : (
                    <SunIcon />
                )}
            </Button>
        </DropdownMenuTrigger>
    </DropdownMenu> ;
}
 
export default ModeToggle;