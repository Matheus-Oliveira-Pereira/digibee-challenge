import { type Key } from "react";

export interface MockStepProps {
  id: number | string;
  label: string;
  key: string;
  src?: string;
  icon?: React.ReactNode;
  tutorial?: boolean;
}

export interface responsesProps {
  id: Key;
  title: string;
  createdAt: string;
  index: number;
} 