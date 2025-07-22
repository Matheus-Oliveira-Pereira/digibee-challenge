import { NavArrowDown, Plus } from "iconoir-react"
import {Input} from "@heroui/input";
import {Button, Textarea} from "@heroui/react";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem
} from "@heroui/dropdown";
import { div } from "framer-motion/client";

interface DrawerBlockedInputsProps {
    cardTitle: string,
    cardSubtitle: string,
}

export const DrawerBlockedInputs = ({cardTitle, cardSubtitle}: DrawerBlockedInputsProps) => {
    return (
        // <div className="rounded-lg border-[1px] border-gray/8 flex items-center justify-between px-[16px] py-[12px] ">
        <div>
            <Input 
                label="Name *" 
                placeholder="Enter the name of the test" 
                className=""
                classNames={{
                    input: "text-[14px]",
                    inputWrapper: `
                        bg-transparent hover:bg-transparent! group-data-[focus=true]:bg-transparent-50
                        border-x-[1px] border-t-[1px] border-b-[0] hover:border-b-[1px] border-b-[1px] 
                        border-gray-200 
                        rounded-none rounded-t-md 
                        hover:border-gray-300 
                        group-data-[focus=true]:border-black!
                    `,
                    base: "",
                    clearButton: "",
                    description: "",
                    errorMessage: "",
                    helperWrapper: "",
                    innerWrapper: "",
                    label: "text-[12px]",
                    mainWrapper: "group",
                }}
            />
            <Textarea 
                className="max-w " 
                label="Description *" 
                placeholder="Add information about the test" 
                
                classNames={{
                    input: "text-[14px]",
                    base: "",
                    clearButton: "",
                    description: "",
                    errorMessage: "",
                    helperWrapper: "",
                    innerWrapper: "",
                    inputWrapper: `
                        bg-transparent border-[1px] border-gray-200 
                        rounded-none hover:bg-transparent! hover:border-gray-300
                        group-data-[focus=true]:bg-transparent-50
                        group-data-[focus=true]:border-black!
                    `,
                    label: "text-[12px]",
                    mainWrapper: "group",
                }}
            />
            <Dropdown >
                <DropdownTrigger >
                    <div 
                        className="
                            w-full rounded-none border-x-[1px] border-t-[0] 
                            hover: border-t-[1px] border-b-[1px] border-gray-200 
                            rounded-none rounded-b-md hover:border-gray-300
                            flex items-center justify-between cursor-pointer
                            px-[12px] py-[14px]
                            aria-expanded:border-black
                            aria-expanded:opacity-100 
                            aria-expanded:scale-[1]
                        " 
                    >
                        <div>
                            <div className="text-[12px]">
                                Group
                            </div>
                            <div className="text-[12px] text-gray-500">
                                Add your test to a group
                            </div>
                        </div>
                        <NavArrowDown/>
                    </div>
                    
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions" >
                    <DropdownItem key="new"></DropdownItem>
                </DropdownMenu>
            </Dropdown>


        </div>
    )
}