
import { ReactNode } from 'react';

export interface StepData {
  id: string;
  category: "BEFORE ARRIVAL" | "AFTER ARRIVAL";
  title: string;
  content: ReactNode;
}
