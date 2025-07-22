import {
  Autocomplete,
  AutocompleteItem
} from "@heroui/autocomplete";
import { Divider } from "@heroui/divider";
import { LightBulbOn } from "iconoir-react";
import { type Key } from "react";
import { type MockStepProps } from "../../types";

interface MockStepSelectorProps {
  selectedStep: MockStepProps | null;
  onSelectionChange: (key: Key | null) => void;
}

const mockSteps: MockStepProps[] = [
  {id: 1, label: "Session Management", key: "1", src: "/assets/pipeline-step-session-management.svg"},
  {id: 2, label: "Rest V2 (HTTP / APIs)", key: "2", src: "/assets/pipeline-step-rest.svg"},
  {id: 3, label: "Session Management", key: "3", src: "/assets/pipeline-step-session-management.svg"},
  {id: 4, label: "Transformer (JOLT)", key: "4", src: "/assets/pipeline-step-jolt.svg"},
  {id: "tutorial", label: "You can select the step by clicking on canvas", key: "5", icon: <LightBulbOn  color="black" height={16} width={16}/> , tutorial: true}
];

export function MockStepSelector({ selectedStep, onSelectionChange }: MockStepSelectorProps) {
  return (
    <Autocomplete 
      className="max-w px-[24px]" 
      placeholder="Choose a step to mock..."
      selectedKey={selectedStep?.key ?? null}
      onSelectionChange={onSelectionChange}
      startContent={
        selectedStep ? (
          <div className="w-[40px] h-[40px] bg-gray-50 rounded-lg flex items-center justify-center min-w-[40px] shrink-0 ">
            <img src={selectedStep.src} alt={selectedStep.label} className="w-[24px] h-[24] " />
          </div>
        ) : null
      }
      classNames={{
        popoverContent:"bg-white"
      }}
      inputProps={{
        classNames: {
          base:"group-data-[focus=true]:border-black!",
          inputWrapper: `
            bg-transparent! border-gray-200 data-[hover=true]:bg-transparent! data-[hover=true]:text-black 
            group-data-[focus=true]:bg-transparent border-[1px] border-gray-100 rounded-lg  
            group-data-[focus=true]:border-black!
            h-[60px]
          `,
          label: "h-[60px]!",
          input: `
            placeholder:text-gray-400
            group-data-[hover=true]:placeholder:text-black 
            group-data-[focus=true]:placeholder:text-black
          `
        },
      }}
      disabledKeys={["tutorial"]}
    >
      {mockSteps.map((mockStep) => (
        <AutocompleteItem key={mockStep.key}  textValue={mockStep.label}>
          {!mockStep.tutorial ? (
            <div className="flex gap-2 items-center">
              <img src={mockStep.src} alt={mockStep.label}  />
              <div className="font-semibold text-gray-500">
                {mockStep.label}
              </div>
            </div>
          ) : (
            <div className="w-full">
                <Divider className="my-[8px]"/>
                <div className="flex gap-2 items-center">
                  {mockStep.icon}
                  <div className="font-semibold text-black!">
                    {mockStep.label}
                  </div>
                </div>
            </div>
          )}
        </AutocompleteItem>
      ))}
    </Autocomplete>
  );
} 