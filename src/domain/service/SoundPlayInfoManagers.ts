import { Sound } from '../model/Sound';
import { Sounds } from '../model/Sounds';
import { SoundPlayInfo } from '../model/SoundPlayInfo';
import { SoundPlayInfos } from '../model/SoundPlayInfos';

import { SoundPlayInfoManager } from './SoundPlayInfoManager';

import { Repository } from '../repository/Repository';

export class SoundPlayInfoManagers {
  readonly soundPlayInfoManagers: SoundPlayInfoManager[];
  readonly soundPlayInfos: SoundPlayInfos;
  readonly repository: Repository;

  constructor(soundPlayInfos: SoundPlayInfos, repository: Repository) {
      this.repository = repository;
      this.soundPlayInfos = soundPlayInfos;
      this.soundPlayInfoManagers = soundPlayInfos.map(soundPlayInfo => {
          return new SoundPlayInfoManager(soundPlayInfo, repository);
      });
  }

  getSoundPlayInfoManager(index : number) : SoundPlayInfoManager {
      return this.soundPlayInfoManagers[index];
  }

  get length(): number {
      return this.soundPlayInfoManagers.length;
  }

  saveAll(): void {
      this.repository.saveAll(this.soundPlayInfos);
  }

  static createFromRepository(repository: Repository) : SoundPlayInfoManagers {
      const soundPlayInfos = repository.loadAll();
      return new SoundPlayInfoManagers(soundPlayInfos, repository);
  }
}

