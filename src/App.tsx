import { Button, useDisclosure } from "@heroui/react";
import "./App.css";
import { MainDrawer } from "./components/MainDrawer";
import { MockResponseDrawer } from "./components/MockResponseDrawer";
import { useTestCreation } from "./hooks/useTestCreation";

function App() {
  const initDrawer = useDisclosure();
  const mockDrawer = useDisclosure();
  
  const {
    selectedStep,
    responses,
    loading,
    selectedResponse,
    mockedResponse,
    cleanStates,
    handleSelectionChange,
    handleResponseSelect,
  } = useTestCreation();

  const handleCancel = () => {
    cleanStates();
    initDrawer.onClose();
  };

  const handleSave = () => {
    cleanStates();
    initDrawer.onClose();
  };

  const handleReturn = () => {
    cleanStates();
    mockDrawer.onClose();
  };

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

      <MainDrawer
        isOpen={initDrawer.isOpen}
        onOpenChange={initDrawer.onOpenChange}
        onCancel={handleCancel}
        onSave={handleSave}
        onOpenMockDrawer={mockDrawer.onOpen}
        mockedResponse={mockedResponse}
      />

      <MockResponseDrawer
        isOpen={mockDrawer.isOpen}
        onOpenChange={mockDrawer.onOpenChange}
        onReturn={handleReturn}
        onClose={mockDrawer.onClose}
        selectedStep={selectedStep}
        onSelectionChange={handleSelectionChange}
        loading={loading}
        responses={responses}
        selectedResponse={selectedResponse}
        onResponseSelect={handleResponseSelect}
        mockedResponse={mockedResponse}
      />
    </div>
  );
}

export default App;
