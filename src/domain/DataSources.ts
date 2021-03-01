import { DataSource } from './DataSource';

export class DataSources {
  readonly dataSources: DataSource[];

  constructor(dataSources: DataSource[]) {
      this.dataSources = dataSources;
  }

  getDataSource(index : number) : DataSource {
      return this.dataSources[index];
  }
}

