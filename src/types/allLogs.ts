export interface AllLogs {
  took: number;
  timed_out: boolean;
  _shards: Shards;
  hits: Hits;
}

export interface Shards {
  total: number;
  successful: number;
  skipped: number;
  failed: number;
}

export interface Hits {
  total: Total;
  max_score: any;
  hits: Hit[];
}

export interface Total {
  value: number;
  relation: string;
}

export interface Hit {
  _index: string;
  _type: string;
  _id: string;
  _score: any;
  _source: Source;
  sort: number[];
}

export interface Source {
  markasy: string;
  ady: any;
  created_at: string;
  full: string;
  yyly?: string;
  bahasy?: number;
}
