import {
  Drawer,
  DrawerContent,
  DrawerBody,
  DrawerFooter,
  Button,
} from "@heroui/react";
import { ArrowLeft } from "iconoir-react";
import { Divider } from "@heroui/divider";
import { DigibeeDrawerHeader } from "../DigibeeDrawerHeader";
import { MockStepSelector } from "../MockStepSelector";
import { MockResponseList } from "../MockResponseList";
import { type MockStepProps, type responsesProps } from "../../types";
import { type Key } from "react";

interface MockResponseDrawerProps {
  isOpen: boolean;
  onOpenChange: () => void;
  onReturn: () => void;
  onClose: () => void;
  selectedStep: MockStepProps | null;
  onSelectionChange: (key: Key | null) => void;
  loading: boolean;
  responses: responsesProps[];
  selectedResponse: string | null;
  onResponseSelect: (value: string) => void;
  mockedResponse: responsesProps | null;
}

export function MockResponseDrawer({
  isOpen,
  onOpenChange,
  onReturn,
  onClose,
  selectedStep,
  onSelectionChange,
  loading,
  responses,
  selectedResponse,
  onResponseSelect,
  mockedResponse,
}: MockResponseDrawerProps) {
  return (
    <Drawer
      placement="right"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      hideCloseButton
      classNames={{
        base: "bg-white rounded-none border-gray-50 border-[1px] z-[1001]",
        body: "rounded-none",
        backdrop: "bg-transparent",
      }}
    >
      <DrawerContent>
        {(onClose) => (
          <>
            <DigibeeDrawerHeader
              title="Mock Response"
              subtitle="You can choose a connector to simulate the response."
              icon={
                <ArrowLeft
                  color="black"
                  height={20}
                  width={20}
                  className="cursor-pointer"
                  onClick={onReturn}
                />
              }
            />
            <DrawerBody className="px-[0]">
              <MockStepSelector
                selectedStep={selectedStep}
                onSelectionChange={onSelectionChange}
              />
              <Divider className="my-[8px] w-full" />
              <div className="w-full px-[24px] bg-white flex flex-col gap-2">
                <MockResponseList
                  loading={loading}
                  responses={responses}
                  selectedResponse={selectedResponse}
                  onResponseSelect={onResponseSelect}
                />
              </div>
            </DrawerBody>
            <DrawerFooter>
              <div className="flex items-center justify-between w-full">
                <Button
                  color="primary"
                  variant="bordered"
                  onPress={onClose}
                  isDisabled={!mockedResponse}
                  className="w-full p-px"
                >
                  <div className="font-semibold">Apply</div>
                </Button>
              </div>
            </DrawerFooter>
          </>
        )}
      </DrawerContent>
    </Drawer>
  );
} 