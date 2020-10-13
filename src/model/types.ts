export type KeyedObj = { [key: string]: any };

export type LineChartData<T extends KeyedObj> = T & {
  date: string;
};

export interface DataSetConfigItem<K = string> {
  name: string;
  dataKey: K;
  color?: string;
}
