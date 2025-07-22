import {Skeleton} from "@heroui/skeleton";


export const CardSkeleton = () => {
    return (
        <div className="w-full bg-white rounded-lg border-[1px] border-black/8 flex items-center justify-between px-[16px] py-[12px]">
            <div className="flex items-center justify-between gap-6 w-full">
                <div className="flex items-center justify-center w-max gap-4">
                    <Skeleton className="flex flex-col w-[2rem] h-[2rem] rounded-sm"/>
                    <div className="flex flex-col gap-[2px]">
                        <Skeleton className="h-[1.4rem] w-[12.5rem] rounded-sm"/>
                        <Skeleton className="h-[1.4rem] w-[10.125rem] rounded-sm"/>
                    </div>
                </div>

                <Skeleton className="flex flex-col gap-4 w-[1.25rem] h-[1.25rem] rounded-full bg-gray-50" />
            </div>
        </div>
    )
}