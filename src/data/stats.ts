export interface Stat {
  label: string;
  value: number;
  suffix: string;
  noFormat?: boolean;
}

export const stats: Stat[] = [
  { label: "Students", value: 1825, suffix: "+" },
  { label: "Centers", value: 10, suffix: "" },
  { label: "Staff Members", value: 111, suffix: "" },
  { label: "Since", value: 1993, suffix: "", noFormat: true },
];
