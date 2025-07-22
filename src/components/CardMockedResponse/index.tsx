import type { Key } from "react";

import {Radio, cn} from "@heroui/react";

interface cardMockedResponseProps {
    id: Key,
    title: string,
    createdAt: string,
    index: number,
}

export const CardMockedResponse= ({id, title, createdAt, index}: cardMockedResponseProps) => {
    return (
         <Radio
            value={String(index - 1)} 
            classNames={{
                base: cn(
                "inline-flex m-0 bg-content1 hover:bg-content2 items-center justify-between",
                "flex-row-reverse max-w-full cursor-pointer rounded-lg gap-4 p-4 border-2 border-transparent",
                "data-[hover=true]:border-primary data-[hover=true]:bg-white border-[1px] border-black/8",
                ),
            }}
            >
                <div className="flex items-center justify-between gap-6 w-full">
                    <div className="flex items-center justify-center w-max gap-4">
                        <div className="flex items-center justify-center bg-gray-50 w-[2rem] h-[2rem] rounded-sm">
                            <img src="/assets/tag-mock.svg" alt={"tag mock image"} className="w-[1rem] h-[1rem] " />
                        </div>
                        <div className="flex flex-col gap-[2px]">
                            <div className="flex gap-[6px] items-center">
                                <h1 className="font-medium text-sm">
                                    {title}
                                </h1>
                                <p className="text-[11px] text-gray-500">
                                    {`(${index})`}
                                </p>
                            </div>
                            <p className="font-normal text-sm text-gray-500">
                                {createdAt}
                            </p>
                        </div>
                    </div>
                </div>
        </Radio>
    )
}