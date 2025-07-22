import { useState } from "react";
import { type Key } from "react";
import { type MockStepProps, type responsesProps } from "../types";

export function useTestCreation() {
  const [selectedStep, setSelectedStep] = useState<MockStepProps | null>(null);
  const [responses, setResponses] = useState<responsesProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedResponse, setSelectedResponse] = useState<string | null>(null);
  const [mockedResponse, setMockedResponse] = useState<responsesProps | null>(null);

  const cleanStates = () => {
    setSelectedStep(null);
    setResponses([]);
    setSelectedResponse(null);
    setMockedResponse(null);
  };

  const fetchMockResponses = (): Promise<responsesProps[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, title: "Mocked response name #1", createdAt: "Created at 10 dec, 2024", index: 1 },
          { id: 2, title: "Mocked response name #2", createdAt: "Created at 2 dec, 2024", index: 2 },
        ]);
      }, 2000);
    });
  };

  const handleSelectionChange = async (key: Key | null) => {
    const mockSteps: MockStepProps[] = [
      { id: 1, label: "Session Management", key: "1", src: "/assets/pipeline-step-session-management.svg" },
      { id: 2, label: "Rest V2 (HTTP / APIs)", key: "2", src: "/assets/pipeline-step-rest.svg" },
      { id: 3, label: "Session Management", key: "3", src: "/assets/pipeline-step-session-management.svg" },
      { id: 4, label: "Transformer (JOLT)", key: "4", src: "/assets/pipeline-step-jolt.svg" },
    ];

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

  const handleResponseSelect = (value: string) => {
    setSelectedResponse(value);
    setMockedResponse(responses[Number(value)]);
  };

  return {
    selectedStep,
    responses,
    loading,
    selectedResponse,
    mockedResponse,
    cleanStates,
    handleSelectionChange,
    handleResponseSelect,
  };
} 