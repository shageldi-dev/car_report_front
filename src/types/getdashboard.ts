export interface GetDashboard {
  average_price_over_time: AveragePriceOverTime;
  brand_price_comparison: BrandPriceComparison;
  model_price_comparison: ModelPriceComparison;
  year_price_trends: YearPriceTrends;
  daily_upload_trends: DailyUploadTrends;
  price_correlation_year: PriceCorrelationYear;
  top: Top[];
  total: Total;
  price_avg: PriceAvg;
  brand_count: BrandCount;
  model_count: ModelCount;
}

export interface AveragePriceOverTime {
  buckets: Bucket[];
}

export interface Bucket {
  key_as_string: string;
  key: number;
  doc_count: number;
  average_price: AveragePrice;
}

export interface AveragePrice {
  value: number;
}

export interface BrandPriceComparison {
  doc_count_error_upper_bound: number;
  sum_other_doc_count: number;
  buckets: Bucket2[];
}

export interface Bucket2 {
  key: string;
  doc_count: number;
  avg_price: AvgPrice;
}

export interface AvgPrice {
  value?: number;
}

export interface ModelPriceComparison {
  doc_count_error_upper_bound: number;
  sum_other_doc_count: number;
  buckets: Bucket3[];
}

export interface Bucket3 {
  key: string;
  doc_count: number;
  avg_price: AvgPrice2;
}

export interface AvgPrice2 {
  value?: number;
}

export interface YearPriceTrends {
  doc_count_error_upper_bound: number;
  sum_other_doc_count: number;
  buckets: Bucket4[];
}

export interface Bucket4 {
  key: number;
  doc_count: number;
  avg_price: AvgPrice3;
}

export interface AvgPrice3 {
  value: number;
}

export interface DailyUploadTrends {
  buckets: Bucket5[];
}

export interface Bucket5 {
  key_as_string: string;
  key: number;
  doc_count: number;
  daily_upload_count: DailyUploadCount;
}

export interface DailyUploadCount {
  value: number;
}

export interface PriceCorrelationYear {
  doc_count_error_upper_bound: number;
  sum_other_doc_count: number;
  buckets: Bucket6[];
}

export interface Bucket6 {
  key: number;
  doc_count: number;
  price_and_year: PriceAndYear;
}

export interface PriceAndYear {
  value: number;
}

export interface Top {
  _index: string;
  _type: string;
  _id: string;
  _score: any;
  _source: Source;
  sort: number[];
}

export interface Source {
  markasy: string;
  ady: string;
  yyly: string;
  bahasy: number;
  created_at: string;
  full: string;
}

export interface Total {
  value: number;
  relation: string;
}

export interface PriceAvg {
  value: number;
}

export interface BrandCount {
  value: number;
}

export interface ModelCount {
  value: number;
}
