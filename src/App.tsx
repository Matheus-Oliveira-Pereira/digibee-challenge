import {
  Button,
  Drawer,
  DrawerContent,
  DrawerBody,
  DrawerFooter,
  useDisclosure,
  addToast,
} from "@heroui/react";
import { Xmark, Book, ArrowLeft, LightBulbOn, GitCommit, Check, CheckCircle, CheckCircleSolid } from "iconoir-react";
import { DrawerSectionTitle } from "./components/DrawerSectionTitle";
import { DrawerCard } from "./components/DrawerCard";
import { DrawerBlockedInputs } from "./components/DrawerBlockedInputs";
import { DigibeeDrawerHeader } from "./components/DigibeeDrawerHeader";
import {Divider} from "@heroui/divider";
import {RadioGroup} from "@heroui/radio";

import {
  Autocomplete,
  AutocompleteSection,
  AutocompleteItem
} from "@heroui/autocomplete";

import "./App.css";
import { useEffect, useState, type Key } from "react";
import { CardSkeleton } from "./components/CardSkeleton";
import { h1 } from "framer-motion/client";
import { CardMockedResponse } from "./components/CardMockedResponse";
import { CardMockedResponseSelected } from "./components/CardMockedResponseSelected";

interface autoCompleteStateProps {
  selectedKey: string | null;
  inputValue: string;
}

interface MockStepProps {
    id: number | string;
    label: string;
    key: string;
    src?: string;
    icon?: React.ReactNode;
    tutorial?: boolean;
}

interface responsesProps {
  id: Key,
  title: string,
  createdAt: string,
  index: number,
}

function App() {
  const initDrawer = useDisclosure();
  const mockDrawer = useDisclosure();

  const [selectedStep, setSelectedStep] = useState<MockStepProps | null>(null);
  const [responses, setResponses] = useState<responsesProps[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [selectedResponse, setSelectedResponse] = useState<string | null>(null);
  const [mockedResponse, setMockedResponse] = useState<responsesProps | null>(null)


  const cleanStates = () => {
    setSelectedStep(null)
    setResponses([])
    setSelectedResponse(null)
    setMockedResponse(null)
  }

  const handleCancel = () => {
    cleanStates()
    initDrawer.onClose()
  }
  const handleSave = () => {
    cleanStates()
    addToast({
      icon: <CheckCircleSolid  height={24} width={24} />,
      description: "Your test has been created successfully.",
      color: "success",
      closeIcon: <Xmark height={24} width={24}/>,
    })
    initDrawer.onClose()
  }

  const handleReturn = () => {
    cleanStates()
    mockDrawer.onClose()
  }

  const fetchMockResponses = (): Promise<responsesProps[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, title: "Mocked response name #1", createdAt: "Created at 10 dec, 2024", index: 1},
                { id: 2, title: "Mocked response name #2" , createdAt: "Created at 2 dec, 2024", index: 2},
            ]);
        }, 2000);
    });
  };

  const handleSelectionChange = async (key: Key | null) => {
    const step = mockSteps.find((s) => s.key === String(key)) || null;
    setSelectedStep(step);
    
    if (step?.key === "2") {
        setLoading(true);
        try {
            const responses = await fetchMockResponses();
            setResponses(responses);
        } finally {
            setLoading(false);
        }
    }

  };

  useEffect(() => {
    console.log(mockedResponse)
  }, [mockedResponse])

  const mockSteps: MockStepProps[] = [
    {id: 1, label: "Session Management", key: "1", src: "/assets/pipeline-step-session-management.svg"},
    {id: 2, label: "Rest V2 (HTTP / APIs)", key: "2", src: "/assets/pipeline-step-rest.svg"},
    {id: 3, label: "Session Management", key: "3", src: "/assets/pipeline-step-session-management.svg"},
    {id: 4, label: "Transformer (JOLT)", key: "4", src: "/assets/pipeline-step-jolt.svg"},
    {id: "tutorial", label: "You can select the step by clicking on canvas", key: "5", icon: <LightBulbOn  color="black" height={16} width={16}/> , tutorial: true}
  ];

  const showContent = () => {
    if(loading){
      return (
        <>
          <CardSkeleton/>
          <CardSkeleton/>
        </>
      )
    }

    if(!loading && responses.length === 0){
      return (
        <div className="h-[14rem] flex flex-col items-center justify-center gap-4">
          <div className="p-[8px] bg-gray-50 w-[4rem] h-[4rem] rounded-lg">
            <GitCommit color="black" height={48} width={48}/>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p>Choose a step to see saved </p>
            <p>mocked responses.</p>
          </div>
        </div>
      )
    }


    if(!loading && responses?.length >= 0){
      return (
        <RadioGroup 
          value={selectedResponse}
          onValueChange={(val) => {
            setSelectedResponse(val)
            setMockedResponse(responses[Number(val)])
          }}
        >
          {responses.map((item) => (
            <CardMockedResponse key={item.id} id={item.id} title={item.title} createdAt={item.createdAt} index={item.index}/>
          ))}
        </RadioGroup>
      );
    }

  }
  

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Button
        className="px-[24px] py-[14px] border-2 cursor-pointer"
        color="primary"
        variant="bordered"
        radius="sm"
        onPress={initDrawer.onOpen}
      >
        <div className="font-semibold text-[14px]">Open drawer</div>
      </Button>

      <Drawer
        placement="right"
        isOpen={initDrawer.isOpen}
        onOpenChange={initDrawer.onOpenChange}
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
                icon={<Xmark color="black" height={20} width={20} className="cursor-pointer" onClick={handleCancel}/>}
              />
              <DrawerBody>
                <div className="py-[20px] flex flex-col gap-4">
                  <DrawerSectionTitle
                    title="Define Path"
                    subtitle="Full flow"
                  />
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
                  {!mockedResponse ? <DrawerCard
                    cardTitle="Mock Responses"
                    cardSubtitle="Create or use a saved mock"
                    onClick={mockDrawer.onOpen}
                    /> : <CardMockedResponseSelected id={mockedResponse.id} title={mockedResponse.title} key={mockedResponse.id}  />
                  }
                  {
                    mockedResponse ? (
                      <div className="w-full font-medium text-sm text-end">Add a new mock</div>
                    ) : null
                  }
                  <DrawerCard
                    cardTitle="Expect Results"
                    cardSubtitle="Configure assertions"
                  />
                </div>

                <div className="py-[20px] flex flex-col gap-4">
                  <DrawerSectionTitle
                    title="Organize your tests"
                    subtitle="Full flow"
                  />
                  <DrawerBlockedInputs
                    cardTitle="Set the start and end"
                    cardSubtitle="Choose the path to be tested"
                  />
                </div>
              </DrawerBody>

              <DrawerFooter>
                <div className="flex items-center justify-between w-full">
                  <Button variant="light" onPress={handleCancel}>
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

      <Drawer
        placement="right"
        isOpen={mockDrawer.isOpen}
        onOpenChange={mockDrawer.onOpenChange}
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
                icon={<ArrowLeft color="black" height={20} width={20} className="cursor-pointer" onClick={handleReturn} />}
              />
              <DrawerBody className="px-[0]">
                <Autocomplete 
                  className="max-w px-[24px]" 
                  placeholder="Choose a step to mock..."
                  selectedKey={selectedStep?.key ?? null}
                  onSelectionChange={handleSelectionChange}
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
                        bg-transparent! border-gray-200 data-[hover=true]:bg-transparent data-[hover=true]:text-black 
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
                <Divider className="my-[8px] w-full"/>
                <div className="w-full px-[24px] bg-white flex flex-col gap-2">
                  {showContent()}
                </div>
              </DrawerBody>
               <DrawerFooter>
                <div className="flex items-center justify-between w-full">
                  <Button
                    color="primary"
                    variant="bordered"
                    onPress={onClose}
                    isDisabled ={!mockedResponse}
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
    </div>
  );
}

export default App;
