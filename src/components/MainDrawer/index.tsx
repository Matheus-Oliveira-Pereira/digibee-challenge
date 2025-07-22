import {
  Drawer,
  DrawerContent,
  DrawerBody,
  DrawerFooter,
  Button,
} from "@heroui/react";
import { Xmark, CheckCircleSolid } from "iconoir-react";
import { addToast } from "@heroui/react";
import { DigibeeDrawerHeader } from "../DigibeeDrawerHeader";
import { DrawerSectionTitle } from "../DrawerSectionTitle";
import { DrawerCard } from "../DrawerCard";
import { DrawerBlockedInputs } from "../DrawerBlockedInputs";
import { CardMockedResponseSelected } from "../CardMockedResponseSelected";

interface MainDrawerProps {
  isOpen: boolean;
  onOpenChange: () => void;
  onCancel: () => void;
  onSave: () => void;
  onOpenMockDrawer: () => void;
  mockedResponse: any;
}

export function MainDrawer({
  isOpen,
  onOpenChange,
  onCancel,
  onSave,
  onOpenMockDrawer,
  mockedResponse,
}: MainDrawerProps) {
  const handleSave = () => {
    onSave();
    addToast({
      icon: <CheckCircleSolid height={24} width={24} />,
      description: "Your test has been created successfully.",
      color: "success",
      closeIcon: <Xmark height={24} width={24} />,
    });
  };

  return (
    <Drawer
      placement="right"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      hideCloseButton
      classNames={{
        base: "bg-white rounded-none border-gray-50 border-[1px] z-[1000]",
        body: "rounded-none",
        backdrop: "bg-transparent",
      }}
    >
      <DrawerContent>
        {(onClose) => (
          <>
            <DigibeeDrawerHeader
              title="Create a test case"
              subtitle="Define your coverage area and use tools to simulate the desired paths."
              icon={
                <Xmark
                  color="black"
                  height={20}
                  width={20}
                  className="cursor-pointer"
                  onClick={onCancel}
                />
              }
            />
            <DrawerBody>
              <div className="py-[20px] flex flex-col gap-4">
                <DrawerSectionTitle title="Define Path" subtitle="Full flow" />
                <DrawerCard
                  cardTitle="Set the start and end"
                  cardSubtitle="Choose the path to be tested"
                />
              </div>

              <div className="py-[20px] flex flex-col gap-4">
                <DrawerSectionTitle
                  title="Define the conditions"
                  subtitle="Full flow"
                  steps
                />
                <DrawerCard
                  cardTitle="Payload"
                  cardSubtitle="Create or use a saved payload"
                />
                {!mockedResponse ? (
                  <DrawerCard
                    cardTitle="Mock Responses"
                    cardSubtitle="Create or use a saved mock"
                    onClick={onOpenMockDrawer}
                  />
                ) : (
                  <CardMockedResponseSelected
                    id={mockedResponse.id}
                    title={mockedResponse.title}
                    key={mockedResponse.id}
                  />
                )}
                {mockedResponse && (
                  <div className="w-full font-medium text-sm text-end">
                    Add a new mock
                  </div>
                )}
                <DrawerCard
                  cardTitle="Expect Results"
                  cardSubtitle="Configure assertions"
                />
              </div>

              <div className="py-[20px] flex flex-col gap-4">
                <DrawerSectionTitle title="Organize your tests" subtitle="Full flow" />
                <DrawerBlockedInputs
                  cardTitle="Set the start and end"
                  cardSubtitle="Choose the path to be tested"
                />
              </div>
            </DrawerBody>

            <DrawerFooter>
              <div className="flex items-center justify-between w-full">
                <Button variant="light" onPress={onCancel}>
                  Cancel
                </Button>

                <Button
                  color="primary"
                  variant="bordered"
                  onPress={handleSave}
                  className="w-[2px] p-px"
                >
                  <div className="font-semibold">Save</div>
                </Button>
              </div>
            </DrawerFooter>
          </>
        )}
      </DrawerContent>
    </Drawer>
  );
} 