import type { Key } from "react";

interface CardMockedResponseSelectedProps {
    id: Key,
    title: string,
}

export const CardMockedResponseSelected= ({id, title, }: CardMockedResponseSelectedProps) => {
    return (
        <div className="w-full bg-white rounded-lg border-[1px] border-black/8 flex items-center justify-between px-[16px] py-[12px]">
            <div className="flex items-center justify-between gap-6 w-full">
                <div className="flex items-center justify-center w-max gap-4">
                    <div className="flex items-center justify-center bg-gray-50 w-[2rem] h-[2rem] rounded-sm">
                        <img src="/assets/pipeline-step-rest.svg" alt={"pipeline step rest image"} className="w-[1rem] h-[1rem] " />
                    </div>
                    <div className="flex flex-col gap-[2px]">
                        <div className="flex gap-[6px] items-center">
                            <h1 className="font-medium text-sm">
                               {title}
                            </h1>
                        </div>
                        <p className="font-normal text-sm text-gray-500">
                            Session Management
                        </p>
                    </div>
                </div>
                <img src="/assets/dots.svg" alt={"pipeline step rest image"} className="w-[1rem] h-[1rem] " />
            </div>
        </div>
    )
}