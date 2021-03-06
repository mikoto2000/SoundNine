import { SoundPlayInfo } from '../model/SoundPlayInfo';
import { SoundPlayInfos } from '../model/SoundPlayInfos';
import { Repository } from '../repository/Repository';

export class DataSource {
  readonly soundPlayInfos: SoundPlayInfos;
  readonly repository: Repository;

  constructor(soundPlayInfos: SoundPlayInfos, repository: Repository) {
      this.repository = repository;
      this.soundPlayInfos = soundPlayInfos;
  }

  get(index: number): SoundPlayInfo {
      return this.soundPlayInfos.get(index);
  }

  getFromUrl(url: string): SoundPlayInfo|undefined {
      return this.soundPlayInfos.getFromUrl(url);
  }

  get length(): number {
      return this.soundPlayInfos.length;
  }

  save(): void {
      this.repository.saveAll(this.soundPlayInfos);
  }

  static createFromRepository(repository: Repository) : DataSource {
      const soundPlayInfos = repository.loadAll();
      return new DataSource(soundPlayInfos, repository);
  }
}

