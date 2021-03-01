import { Sound } from '../model/Sound';
import { SoundPlayInfo } from '../model/SoundPlayInfo';

export class SoundPlayInfos {
  readonly soundPlayInfos: SoundPlayInfo[];

  constructor(soundPlayInfos: SoundPlayInfo[]) {
      this.soundPlayInfos = soundPlayInfos;
  }

  getSoundPlayInfo(index : number) : SoundPlayInfo {
      return this.soundPlayInfos[index];
  }

  get length() : number {
      return this.soundPlayInfos.length;
  }
}


