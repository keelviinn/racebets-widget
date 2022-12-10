export declare type Event = {
  title: string;
  country: string;
};

export declare type RaceType = "D" | "G" | "J" | "T" 

export declare type Purse = {
  amount: number;
  currency: string;
}

export declare type Runner = {
  id_runner: number;
  name: string;
  odds: number;
  silk: string;
}

export declare type Race = {
  id_race: number;
  event: Event;
  race_type: RaceType;
  post_time: number;
  num_runners: number;
  distance: number;
  purse: Purse;
  runners: Runner[];
}

export declare interface RaceResponse {
  status: string;
  data: {
    races: Race[];
  }
}

export declare type Option = {
  id: string;
  path: string;
  color: string;
}