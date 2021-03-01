import { Sound } from '../model/Sound';
import { SoundPlayInfo } from '../model/SoundPlayInfo';
import { Repository } from '../repository/Repository';

export class SoundPlayInfoManager {
  readonly soundPlayInfo: SoundPlayInfo;
  readonly repository: Repository;

  constructor(sound: Sound, repository: Repository) {
      this.repository = repository;
      const playedTime = this.repository.load(sound).playedTime;

      this.soundPlayInfo = new SoundPlayInfo(sound, playedTime);
  }

  get soundName(): string {
      return this.soundPlayInfo.sound.name;
  }

  get soundUrl(): URL {
      return this.soundPlayInfo.sound.url;
  }

  get playedTime(): number {
      return this.soundPlayInfo.playedTime;
  }

  set playedTime(playedTime: number) {
      this.soundPlayInfo.playedTime = playedTime;
  }

  load(): void {
      this.soundPlayInfo.playedTime = this.repository.load(this.soundPlayInfo.sound).playedTime;
  }

  save(): void {
      this.repository.save(this.soundPlayInfo.sound, this.soundPlayInfo.playedTime);
  }
}

