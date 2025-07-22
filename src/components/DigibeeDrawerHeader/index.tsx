import { DrawerHeader } from "@heroui/react"
import { Book, Xmark } from "iconoir-react"

interface DigibeeDrawerHeaderProps{
    icon: React.ReactNode,
    title: string,
    subtitle: string
}

export const DigibeeDrawerHeader = ({icon, title, subtitle}: DigibeeDrawerHeaderProps) => {
    return (
        <DrawerHeader className="flex flex-col gap-4">
            <div className="flex  items-center justify-between w-full">
            {icon}
            <Book color="black" height={20} width={20} />
            </div>
            <div className=" flex flex-col gap-2"> 
            <div className="text-[28px] font-bold">
                {title}
            </div>
            <div className="text-gray-500 font-normal">
                {subtitle}
            </div>
            </div>
        </DrawerHeader>
    )
}