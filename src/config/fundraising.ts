export interface FundraisingConfig {
  goal: number;
  raised: number;
  startDate: string;
  endDate: string;
}

export const fundraisingConfig: FundraisingConfig = {
  goal: 200000, // $200,000 goal
  raised: 15000, // Amount raised so far
  startDate: '2025-03-15',
  endDate: '2026-05-15'
};