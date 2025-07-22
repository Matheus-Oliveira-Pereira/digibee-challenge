import { Switch } from "@heroui/react"
import { useState } from "react"

interface DrawerSectionTitleProps {
    title: string,
    subtitle: string,
    steps?: boolean
}

export const DrawerSectionTitle = ({title, subtitle, steps = false}: DrawerSectionTitleProps ) => {
    const [isSelected, setIsSelected] = useState<boolean>(false)
    
    return (
        <div className="flex items-center justify-between w-full">
            <div className="font-semibold text-[12px] uppercase tracking-[1px]">
                {title}
            </div>
            {steps ? (
                <div className="flex gap-3 items-center">
                    <div className="flex gap-1 items-center">
                        <div className="font-medium text-[12px]">
                        {subtitle}
                        </div>
                        <div className="font-normal text-[12px] text-gray-500">
                        (8 steps)
                        </div>
                    </div>
                    <Switch
                        isSelected={isSelected}
                        onValueChange={setIsSelected}
                    />
                </div>
            ) : null}
        </div>
    )
}