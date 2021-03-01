import { Sound } from '../model/Sound';
import { Sounds } from '../model/Sounds';
import { SoundPlayInfo } from '../model/SoundPlayInfo';

import { SoundPlayInfoManager } from './SoundPlayInfoManager';

import { Repository } from '../repository/Repository';

export class SoundPlayInfoManagers {
  readonly soundPlayInfoManagers: SoundPlayInfoManager[];
  readonly repository: Repository;

  constructor(sounds: Sounds, repository: Repository) {
      this.repository = repository;
      this.soundPlayInfoManagers = sounds.map(sound => {
          return new SoundPlayInfoManager(sound, repository);
      });
  }

  getSoundPlayInfoManager(index : number) : SoundPlayInfoManager {
      return this.soundPlayInfoManagers[index];
  }

  get length(): number {
      return this.soundPlayInfoManagers.length;
  }
}

