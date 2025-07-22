import { Plus } from "iconoir-react"

interface DrawerCardCardProps {
    cardTitle: string,
    cardSubtitle: string,
    onClick?: () => void,
}

export const DrawerCard = ({cardTitle, cardSubtitle, onClick}: DrawerCardCardProps) => {
    return (
        <div className="rounded-lg border-[1px] border-black/8 flex items-center justify-between px-[16px] py-[12px] cursor-pointer" onClick={onClick}>
            <div className="flex flex-col">
                <div className="font-medium">
                    {cardTitle}
                </div>  
                <div className="font-normal text-gray-500">
                    {cardSubtitle}
                </div>
            </div>
            <div>
                <Plus color="black" height={20} width={20} />
            </div>
        </div>
    )
}