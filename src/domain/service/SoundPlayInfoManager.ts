import { Sound } from '../model/Sound';
import { SoundPlayInfo } from '../model/SoundPlayInfo';
import { Repository } from '../repository/Repository';

export class SoundPlayInfoManager {
  readonly soundPlayInfo: SoundPlayInfo;
  readonly repository: Repository;

  constructor(soundPlayInfo: SoundPlayInfo, repository: Repository) {
      this.repository = repository;
      this.soundPlayInfo = soundPlayInfo;
  }

  get soundName(): string {
      return this.soundPlayInfo.sound.name;
  }

  get soundUrl():  string {
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

  static createFromRepository(sound: Sound, repository: Repository) : SoundPlayInfoManager {
      const soundPlayInfo = repository.load(sound);
      if (soundPlayInfo) {
          return new SoundPlayInfoManager(soundPlayInfo, repository);
      } else {
          throw new Error(`${sound}が見つかりませんでした。`);
      }
  }

}

