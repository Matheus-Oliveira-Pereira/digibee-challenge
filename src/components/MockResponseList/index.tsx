import { RadioGroup } from "@heroui/radio";
import { GitCommit } from "iconoir-react";
import { CardSkeleton } from "../CardSkeleton";
import { CardMockedResponse } from "../CardMockedResponse";
import { type responsesProps } from "../../types";

interface MockResponseListProps {
  loading: boolean;
  responses: responsesProps[];
  selectedResponse: string | null;
  onResponseSelect: (value: string) => void;
}

export function MockResponseList({
  loading,
  responses,
  selectedResponse,
  onResponseSelect,
}: MockResponseListProps) {
  if (loading) {
    return (
      <>
        <CardSkeleton />
        <CardSkeleton />
      </>
    );
  }

  if (!loading && responses.length === 0) {
    return (
      <div className="h-[14rem] flex flex-col items-center justify-center gap-4">
        <div className="p-[8px] bg-gray-50 w-[4rem] h-[4rem] rounded-lg">
          <GitCommit color="black" height={48} width={48} />
        </div>
        <div className="flex flex-col items-center justify-center">
          <p>Choose a step to see saved </p>
          <p>mocked responses.</p>
        </div>
      </div>
    );
  }

  if (!loading && responses?.length >= 0) {
    return (
      <RadioGroup value={selectedResponse} onValueChange={onResponseSelect}>
        {responses.map((item) => (
          <CardMockedResponse
            key={item.id}
            id={item.id}
            title={item.title}
            createdAt={item.createdAt}
            index={item.index}
          />
        ))}
      </RadioGroup>
    );
  }

  return null;
} 