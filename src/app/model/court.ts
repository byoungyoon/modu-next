export interface CourtCount {
  count: number;
}

export interface Court {
  id: number;
  lat: number;
  lon: number;
  courtName: string | null;
  courtType: string | null;
  courtSize: string | null;
  feeYn: string | null;
  goalPost: string | null;
  parkYn: string | null;
  address: string | null;
  comment: string | null;

  Image?: string[];
}
