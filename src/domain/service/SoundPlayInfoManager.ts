import { Sound } from '../model/Sound';
import { SoundPlayInfo } from '../model/SoundPlayInfo';
import { Repository } from '../repository/Repository';

export class SoundPlayInfoManager {
  readonly soundPlayInfo: SoundPlayInfo;
  readonly repository: Repository;

  constructor(sound: Sound, repository: Repository) {
      this.repository = repository;
      const playedTime = this.repository.load(sound);

      this.soundPlayInfo = new SoundPlayInfo(sound, playedTime);
  }

  load(): void {
      this.soundPlayInfo.playedTime = this.repository.load(this.soundPlayInfo.sound);
  }

  save(): void {
      this.repository.save(this.soundPlayInfo.sound, this.soundPlayInfo.playedTime);
  }
}

