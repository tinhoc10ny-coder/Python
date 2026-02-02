
export interface ExecutionResult {
  output: string;
  explanation: string;
  isError: boolean;
  needsInput?: boolean;
  inputPrompt?: string;
  errorLines?: number[];
}

export interface ExampleCode {
  title: string;
  code: string;
  description: string;
}

export type StickAction = 'jump' | 'wave' | 'celebrate' | 'think' | 'error' | 'none';

export type Difficulty = 'beginner' | 'advanced' | 'hsg';